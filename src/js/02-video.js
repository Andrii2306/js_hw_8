import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');

const storeCurrentTime = function (data) {
  localStorage.setItem('videoplayer-curent-time', data.seconds);
};

player.on('timeudate', throttle(storeCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
