
const btnInformes       = document.getElementById('btnInformes');
const dropdownInformes  = document.getElementById('dropdownInformes');

btnInformes.addEventListener('click', (e) => {
  e.stopPropagation();
  const abierto = dropdownInformes.classList.toggle('activo');
  btnInformes.querySelector('.dropdown-flecha').style.transform = abierto ? 'rotate(180deg)' : '';
});


document.addEventListener('click', () => {
  dropdownInformes.classList.remove('activo');
  btnInformes.querySelector('.dropdown-flecha').style.transform = '';
});


dropdownInformes.addEventListener('click', (e) => e.stopPropagation());



const btnCotizar    = document.getElementById('btnCotizar');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawer        = document.getElementById('drawer');
const drawerCerrar  = document.getElementById('drawerCerrar');
const drawerForm    = document.getElementById('drawerForm');
const drawerExito   = document.getElementById('drawerExito');
const drawerNueva   = document.getElementById('drawerNueva');

function abrirDrawer() {
  drawerOverlay.classList.add('activo');
  document.body.style.overflow = 'hidden';
}

function cerrarDrawer() {
  drawerOverlay.classList.remove('activo');
  document.body.style.overflow = '';
}

btnCotizar.addEventListener('click', abrirDrawer);

drawerCerrar.addEventListener('click', cerrarDrawer);

drawerOverlay.addEventListener('click', (e) => {
  if (e.target === drawerOverlay) cerrarDrawer();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarDrawer();
});

drawerForm.addEventListener('submit', (e) => {
  e.preventDefault(); // evita que recargue la página


  drawerForm.style.display  = 'none';
  drawerExito.style.display = 'flex';
});

drawerNueva.addEventListener('click', () => {
  drawerForm.reset();
  drawerForm.style.display  = 'flex';
  drawerExito.style.display = 'none';
});
