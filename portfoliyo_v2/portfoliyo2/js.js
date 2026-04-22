/* ============================================
   Gihan Portfolio - js.js
   ============================================ */

// ── Mouse orb ──
const orb = document.getElementById('orb');
document.addEventListener('mousemove', e => {
  orb.style.left = e.clientX + 'px';
  orb.style.top  = e.clientY + 'px';
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Scroll reveal ──
const reveals  = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObs.observe(el));

// ── Active nav highlight on scroll ──
const sections     = document.querySelectorAll('section[id]');
const navAnchors   = document.querySelectorAll('.nav-links a');
const sectionObs   = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--primary)' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(section => sectionObs.observe(section));



