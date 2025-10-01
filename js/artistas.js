// SCRIPTS ESPECIFICOS PARA ARTISTAS.HTML

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.artist-card');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach(card => observer.observe(card));
  });
  