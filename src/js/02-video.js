// import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new player(iframe);
player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-curent-time', e.seeconds);
  }, 1000)
);

// player.on(play, data => {
//   const saveTime = localStorage.getItem('videoplayer-curent-time');
// });

// function onPlay(data) {
//   localStorage.setItem('videoplayer-curent-time', data.seconds);
// }
player
  .setCurrentTime(localStorage.getItem('videoplayer-curent-time') || 0)
  .catch(function (error) {
    console.error(error);
  });
