define(require => {
  return {
    mounted() {
      $('.ui.progress')
        .progress({
          showActivity: false,
        })
    },
    template: `
      <div class="pager">
        <div class="ui about">
          <div class="left section">
            <div class="top banner image">
              <img src="src/asset/img/desktop.jpg" alt=""/>
            </div>
            <div class="ui myContainer">
              <h2 class="header">Things I Can Do</h2>
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
                <img src="src/asset/img/avatar.jpg" alt=""/>
              </div>
              <h3 class="header">Honest</h3>
              <div class="content">我叫陈实，95 年出生在安徽的一个小农村。小时候的梦想是当一个程序员，现在已经实现了 😁。目前主要做网站开发，喜欢研究一些新鲜的事物。</div>
            </div>
            <div class="ui contact">
              <h4 class="ui horizontal divider header">
                <i class="mail icon"></i>
                邮箱
              </h4>
              <p class="center aligned">
                <a href="mailto:honestxll@gmail.com">honestxll@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  }
})
