const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.getAttribute("data-inviewport-first") === null) {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        entry.target.setAttribute('data-inviewport-first', 'true');
      }
    }
    console.log(entry);
  });
};

const obs = new IntersectionObserver(inViewport);
const obsOptions = {};

const viewPorts = document.querySelectorAll('[data-inviewport]');
viewPorts.forEach(EL => {
    obs.observe(EL, obsOptions);
});

var video = document.getElementsByClassName('home-video')[0];
var replayDiv = document.getElementsByClassName('home-video-replay')[0];

replayDiv.onclick = function () {
  video.pause();
  video.currentTime = '0';
  video.play();
};