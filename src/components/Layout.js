define(require => {
  const $ = require('jquery');
  return {
    mounted() {
      $('.musicContainer')
        .dimmer({
          on: 'hover'
        })
      ;
    },
    template: `
      <div>
        <router-view></router-view>
        <div class="musicContainer play">
          <i class="music icon"></i>
          <div class="ui dimmer">
            <i class="pause icon"></i>
          </div>
        </div>
        <audio
          src="src/asset/media/ルルティア - 无忧歌(Music Box Ver) ＊Bonus Track.mp3" controls="controls"
          preload
          autoplay
          loop
          id="music"
          hidden />
      </div>
    `
  }
})
