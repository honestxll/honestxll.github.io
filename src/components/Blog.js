define(function(require) {
  const ScrollReveal = require('bower_components/scrollreveal/dist/scrollreveal.min')
  const Moment = require('bower_components/moment/min/moment-with-locales.min')
  const Vue = require('vue')
  const Paginate = require('paginate')
  Vue.component('paginate', Paginate)

  const sr = ScrollReveal({ reset: true })

  return {
    data() {
      return {
        search: null,
        currentPage: 1,
        range: 10,
        total: 0,
        temp: [],
        files: []
      }
    },
    mounted() {
      $('.icon.input .search.icon')
        .click(function(){
          $(this)
            .prev('input')
            .toggleClass('reveal')
        })
      sr.reveal('.ui.blog.container', 100)
    },
    created() {
      fetch('/md/config.json')
        .then(response => response.json())
        .then(responseData => {
          this.temp = responseData.files
          this.total = responseData.files.length
          this.files = responseData.files.slice((this.currentPage - 1) * this.range, this.currentPage * this.range)
        })
    },
    filters: {
      moment(time) {
        return Moment(time).locale('zh-cn').startOf('hour').fromNow()
      }
    },
    template: `
      <div class="blog pager">
        <div class="ui search">
          <div class="ui right floated icon input">
            <input type="text" placeholder="搜索..." v-model="search">
            <i class="search icon"></i>
          </div>
        </div>
        <div class="ui blog container">
          <ol class="ui articles">
            <router-link
              class="article"
              v-for="file in files"
              :to="'/blog/'+file.id"
              tag="li">
              <div class="title">{{ file.name }} <span class="tag">{{ file.tag }}</span></div>
              <span class="time">{{ file.time | moment }}</span>
            </router-link>
          </ol>
          <paginate
            ref="p"
            v-show="files.length"
            :pageCount="Math.ceil(total / range)"
            :containerClass="'ui vue pagination menu'"
            :page-class="'item'"
            :page-link-class="'item'"
            :prev-class="'item'"
            :prev-link-class="'item'"
            :next-class="'item'"
            :next-link-class="'item'"
            :disabled-class="'disabled item'"
            :active-class="'active item'"
            no-li-surround
            :clickHandler="clickCallback">
          </paginate>
        </div>
      </div>
    `,
    methods: {
    	clickCallback: function(currentPage) {
        this.currentPage = currentPage
      }
    },
    watch: {
      search(e) {
        const ret = this.temp.filter((item) => {
          return item.name.indexOf(e) != -1 || item.time.indexOf(e) != -1 || item.tag.indexOf(e) != -1
        })
        this.total = ret.length
        this.currentPage = 1
        this.$refs.p.selected = 0
        const filter = ret.slice((this.currentPage - 1) * this.range, this.currentPage * this.range)
        this.files = filter
      },
      currentPage(e) {
        this.files = this.temp.slice((this.currentPage - 1) * this.range, this.currentPage * this.range)
      }
    }
  }
})
