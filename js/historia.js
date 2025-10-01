// SCRIPTS ESPECIFICOS PARA HISTORIA.HTML

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });

    items.forEach(i => obs.observe(i));
  });