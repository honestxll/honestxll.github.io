define(function(require) {
  require('highlight')
  const md = require('md')({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (__) {}
      }

      return ''
    }
  })

  return {
    data() {
      return {
        markdown: null
      }
    },
    mounted() {
      $('.blog.pager').on('scroll', function(e) {
        const scrollTop = $(this).scrollTop();
        var p = scrollTop / 80;
        $('.ui.secondary.menu').css('background', 'rgba(0, 0, 0, ' + p + ')');
      });
    },
    destroyed() {
      $('.ui.secondary.menu').css('background', 'inherit');
    },
    created() {
      const { index } = this.$route.params
      // 先去获取文章列表
      fetch('/md/config.json')
        .then(response => response.json())
        .then(responseData => {
          const { name } = responseData.files[index]
          fetch(`/md/${ name }.md`)
            .then(response => response.text())
            .then(responseData => {
              this.markdown = md.render(responseData)
            })
        })
    },
    template: `
    <div class="blog article pager">
      <div class="ui blog container" v-html="markdown"></div>
    </div>
    `
  }
})
