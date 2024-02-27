const start = document.querySelector('.start');
const container = document.querySelector('.container');
const message = document.querySelector('.message');
const volume = document.querySelector('.volume');
let audio;

message.style.bottom = -message.offsetHeight + 'px';
message.style.transition = 'bottom 5s ease-in-out, background 0.3s linear';

window.addEventListener('wheel', (e) => {
  let currentVolume = +volume.value;

  if (e.deltaY > 0) {
    currentVolume = currentVolume - 5;
  } else if (e.deltaY < 0) {
    currentVolume = currentVolume + 5;
  }

  volume.value = currentVolume;

  if (audio) {
    audio.volume = +volume.value / 1250;
  }
});

volume.addEventListener('change', (e) => {
  if (audio) {
    audio.volume = +e.currentTarget.value / 1250;
  }
});

start.addEventListener('click', () => {
  start.remove();

  const pepeGif = document.createElement('img');
  pepeGif.classList.add('pepe');
  pepeGif.src = './pepe.gif';
  pepeGif.alt = 'pepe_dance';

  const audioElement = document.createElement('audio');
  audioElement.classList.add('audio');
  audioElement.src = './dance_music.mp3';
  audioElement.volume = volume.value / 1250;
  audioElement.autoplay = true;
  audioElement.loop = true;

  container.append(pepeGif);
  document.body.append(audioElement);
  audio = document.querySelector('.audio');

  changeColor();

  setInterval(() => {
    changeColor();
  }, 200);

  setTimeout(showMessage, 1000);
});

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'deepskyblue',
  'blue',
  'blueviolet',
];

let currentIndex = 0;

const changeColor = () => {
  container.style.background = colors[currentIndex];
  message.style.background = colors[colors.length - currentIndex - 1];
  currentIndex = currentIndex === colors.length - 1 ? 0 : currentIndex + 1;
};

const showMessage = () => {
  message.style.bottom = '20px';
};
