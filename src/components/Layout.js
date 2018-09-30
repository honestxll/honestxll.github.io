define(require => {
  const $ = require('jquery')
  const Menu = require('components/Menu')
  return {
    mounted() {
      $('.musicContainer')
        .dimmer({
          on: 'hover'
        })
      $('.ui.dimmer').on('click', '.pause.icon', function(){
        $('.musicContainer').removeClass('play')
        $('.pause.icon').removeClass('pause').addClass('play')
        document.querySelector('audio').pause()
      })
      $('.ui.dimmer').on('click', '.play.icon', function(){
        $('.musicContainer').addClass('play')
        $('.play.icon').removeClass('play').addClass('pause')
        document.querySelector('audio').play()
      })
    },
    template: `
      <div class="layout">
        <Menu></Menu>
        <router-view></router-view>
        <div class="musicContainer play">
          <i class="music icon"></i>
          <div class="ui dimmer">
            <i class="pause icon"></i>
          </div>
        </div>
        <audio
          src="src/asset/media/艾热 - 都是小事儿 (live).mp3" controls="controls"
          preload
          loop
          autoplay
          id="music"
          hidden />
      </div>
    `,
    components: {
      Menu,
    }
  }
})
