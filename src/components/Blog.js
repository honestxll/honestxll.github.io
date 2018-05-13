define(function(require) {
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
    },
    created() {
      fetch('/md/config.json')
        .then(response => response.json())
        .then(responseData => {
          this.files = responseData.files
          console.log(this.files);
        })
    },
    template: `
      <div class="blog pager">
        <div class="ui search">
          <div class="ui right floated icon input">
            <input type="text" placeholder="搜索...">
            <i class="search icon"></i>
          </div>
        </div>
      </div>
    `
  }
})
