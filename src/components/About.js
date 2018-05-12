define(require => {
  const Menu = require('components/Menu');
  return {
    mounted() {
      $('.ui.progress')
        .progress({
          showActivity: false,
        })
    },
    template: `
      <div class="pager">
        <Menu></Menu>
        <div class="ui about">
          <div class="left section">
            <div class="top banner image">
              <img src="http://demo.cssmoban.com/cssthemes3/btst_33_readonly/images/banner.jpg" alt=""/>
            </div>
            <div class="ui myContainer">
              <h2 class="header">What can I do</h2>
              <div class="ui stack two column grid">
                <div class="column">
                  <div class="ui small indicating progress" data-percent="80" data-total="100">
                    <h3 class="stack">PHP</h3>
                    <div class="bar">
                      <div class="progress"></div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="ui small indicating progress" data-percent="60" data-total="100">
                    <h3 class="stack">Node.js</h3>
                    <div class="bar">
                      <div class="progress"></div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="ui small indicating progress" data-percent="80" data-total="100">
                    <h3 class="stack">H5</h3>
                    <div class="bar">
                      <div class="progress"></div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="ui small indicating progress" data-percent="80" data-total="100">
                    <h3 class="stack">CSS3</h3>
                    <div class="bar">
                      <div class="progress"></div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="ui small indicating progress" data-percent="60" data-total="100">
                    <h3 class="stack">React Native</h3>
                    <div class="bar">
                      <div class="progress"></div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="ui small indicating progress" data-percent="10" data-total="100">
                    <h3 class="stack">Java</h3>
                    <div class="bar">
                      <div class="progress"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right section">
            <div class="ui info">
              <div class="image">
                <img src="http://demo.cssmoban.com/cssthemes3/btst_33_readonly/images/avatar.jpg" alt=""/>
              </div>
              <h3 class="header">Honest</h3>
              <div class="content">化身奶爸...</div>
            </div>
            <div class="ui contact">
              <h4 class="ui horizontal divider header">
                <i class="mail icon"></i>
                邮箱
              </h4>
              <p class="center aligned">honestxll@gmail.com</p>
            </div>
          </div>
        </div>
    `,
    components: {
      Menu,
    }
  }
})
