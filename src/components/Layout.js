define(require => {
  const $ = require('jquery');
  return {
    mounted() {
      $('.musicContainer')
        .dimmer({
          on: 'hover'
        })
      $('.ui.dimmer').on('click', '.pause.icon', function(){
        $('.musicContainer').removeClass('play');
        $('.pause.icon').removeClass('pause').addClass('play');
        document.querySelector('audio').pause();
      })
      $('.ui.dimmer').on('click', '.play.icon', function(){
        $('.musicContainer').addClass('play');
        $('.play.icon').removeClass('play').addClass('pause');
        document.querySelector('audio').play();
      })
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
