define(require => {
  const Menu = require('components/Menu');
  return {
    template: `
      <div class="pager">
        <Menu></Menu>
        <video
          src="src/asset/video/sunset_over_sea_nimiaRF_754386_1080_HD_ZH-CN.mp4"
          autoplay
          loop
          ></video>
      </div>

    `,
    components: {
      Menu,
    }
  }
})
