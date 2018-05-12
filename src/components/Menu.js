define(require => {
  return {
    data() {
      return {
        menus: [{
          path: '/',
          name: 'Home'
        },{
          path: '/about',
          name: 'About Me'
        }, {
          path: '/blog',
          name: 'Blog'
        }]
      }
    },
    template: `
      <div class="ui top fixed inverted large secondary pointing menu">
        <div class="ui container">
          <router-link
            v-for="menu in menus"
            :to="menu.path"
            class="item"
            active-class="active"
            exact
            >{{ menu.name }}</router-link>
          </div>
      </div>
    `
  }
})
