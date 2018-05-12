define(require => {
  const $ = require('jquery');
  return {
    mounted() {
      $('.mine').hover(function(){
        $('.shadow').stop().fadeOut(1200);
      }, function() {
        $('.shadow').stop().fadeIn(1200);
      })
    },
    template: `
      <div class="pager">
        <video
          src="src/asset/media/sunset_over_sea_nimiaRF_754386_1080_HD_ZH-CN.mp4"
          autoplay
          loop
          muted
          ></video>
        <div class="mine">
          <h1>像风一样自由...</h1>
        </div>
        <div class="shadow"></div>
      </div>
    `
  }
})
