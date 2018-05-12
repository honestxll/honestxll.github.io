define(function(require) {
  return {
    data() {
      return {
        files: []
      }
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
      <div class="ui container">
        <div class="ui list">
          <div class="item" v-for="file in files">{{ file.name }}</div>
        </div>
      </div>
    `
  }
})
