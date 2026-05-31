
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('nav-scrolled');
  } else {
    header.classList.remove('nav-scrolled');
  }
});

const elementosAnimados = document.querySelectorAll(
  '.tarjeta, .marcas, .hero-content, .seccion-titulo, .seccion-eyebrow'
);

elementosAnimados.forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target); // solo anima una vez
    }
  });
}, {
  threshold: 0.15 
});

elementosAnimados.forEach(el => observer.observe(el));


const spanHero = document.querySelector('.hero-title span');

if (spanHero) {
  const textoOriginal = spanHero.textContent;
  spanHero.textContent = '';

  let i = 0;
  const velocidad = 80; 


  setTimeout(() => {
    const intervalo = setInterval(() => {
      spanHero.textContent += textoOriginal[i];
      i++;
      if (i >= textoOriginal.length) {
        clearInterval(intervalo);
      }
    }, velocidad);
  }, 400);
}



const contadores = document.querySelectorAll('.contador');

const observerContador = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const objetivo = parseInt(el.getAttribute('data-target'));
      const duracion = 1800; // ms que tarda en llegar al número final
      const pasos = 60;
      const incremento = objetivo / pasos;
      let actual = 0;

      const timer = setInterval(() => {
        actual += incremento;
        if (actual >= objetivo) {
          el.textContent = objetivo;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(actual);
        }
      }, duracion / pasos);

      observerContador.unobserve(el);
    }
  });
}, { threshold: 0.5 });

contadores.forEach(c => observerContador.observe(c));




const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Solo aplica el parallax mientras el hero es visible
  if (scrollY < window.innerHeight) {
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
    }
  }
});
