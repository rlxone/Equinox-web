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

function checkScroll() {
  if (video.getAttribute("data-start") === "true") {
    var fraction = 0.8;
    var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
    b = y + h, //bottom
    visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
        video.setAttribute("data-start", "false");
        video.play();
    }
  }
}

window.addEventListener('scroll', checkScroll, false);

checkScroll();