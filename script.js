const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    console.log(entry.isIntersecting)
  });
};

const obs = new IntersectionObserver(inViewport);
const obsOptions = {};

const viewPorts = document.querySelectorAll('[data-inviewport]');
viewPorts.forEach(EL => {
    obs.observe(EL, obsOptions);
});