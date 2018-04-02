define(require => {
  const Menu = require('components/Menu');
  return {
    template: `
      <div class="pager">
        <Menu></Menu>
      </div>
    `,
    components: {
      Menu,
    }
  }
})
