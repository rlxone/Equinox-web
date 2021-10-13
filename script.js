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