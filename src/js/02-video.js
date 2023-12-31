import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const local_key = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    const curTime = data.seconds;

    localStorage.setItem(local_key, JSON.stringify(curTime));
  }, 1000)
);

const sec = JSON.parse(localStorage.getItem(local_key));

player.setCurrentTime(sec || 0);
