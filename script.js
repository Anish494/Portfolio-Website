// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('[id]');
const navAnchors = document.querySelectorAll('.nav-item');

const setActiveLink = () => {
  let current = '';
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= 120) current = section.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active-nav', a.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// ===== Hero load-in reveal =====
const heroTargets = document.querySelectorAll(
  '.greeting, .main-name, .description, .button-group, .hero-meta, .right-side, .scroll-cue'
);
heroTargets.forEach((el, i) => {
  el.classList.add('hero-reveal');
  setTimeout(() => el.classList.add('is-visible'), 120 * i);
});

// ===== Scroll reveal (below-the-fold sections) =====
const revealTargets = document.querySelectorAll(
  '.section__title, .work-card, .extra-card, .skill-card, .about__grid, .bottom-cta h3'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

