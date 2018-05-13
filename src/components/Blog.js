define(function(require) {
  const ScrollReveal = require('bower_components/scrollreveal/dist/scrollreveal.min')
  const Moment = require('bower_components/moment/min/moment-with-locales.min')

  const sr = ScrollReveal({ reset: true })

  return {
    data() {
      return {
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
          this.files = responseData.files
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
            <input type="text" placeholder="搜索...">
            <i class="search icon"></i>
          </div>
        </div>
        <div class="ui blog container">
          <ol class="ui articles">
            <router-link
              class="article"
              v-for="(file, index) in files"
              :to="'/blog/'+index"
              tag="li">
              <div class="title">{{ file.name }}</div>
              <span class="time">{{ file.time | moment }}</span>
            </router-link>
          </ol>
        </div>
      </div>
    `
  }
})
