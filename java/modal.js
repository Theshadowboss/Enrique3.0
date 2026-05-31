
const catalogo = {

  electricos: {
    titulo: 'Eléctricos',
    eyebrow: 'Movilidad del futuro',
    autos: [
      { nombre: 'Tesla Model 3', marca: 'Tesla', precio: '$749,000', km: '0 km', descripcion: 'Sedán eléctrico con 560 km de autonomía y Autopilot incluido.', imagen: 'autos/electricos/tesla-model3.avif' },
      { nombre: 'Tesla Model Y', marca: 'Tesla', precio: '$989,000', km: '0 km', descripcion: 'SUV eléctrica, la más vendida del mundo. Amplio espacio y gran rendimiento.', imagen: 'autos/electricos/tesla-model-Y.avif' },
      { nombre: 'BMW iX', marca: 'BMW', precio: '$1,850,000', km: '0 km', descripcion: 'SUV eléctrica premium con hasta 630 km de autonomía y tecnología de punta.', imagen: 'autos/electricos/bmwix.jpg' },
      { nombre: 'Audi e-tron GT', marca: 'Audi', precio: '$2,100,000', km: '12,000 km', descripcion: 'Gran turismo eléctrico con 390 km de autonomía y diseño escultural.', imagen: 'autos/electricos/egt.avif' },
      { nombre: 'Porsche Taycan', marca: 'Porsche', precio: '$2,450,000', km: '5,000 km', descripcion: 'El deportivo eléctrico por excelencia. 0-100 km/h en 2.8 segundos.', imagen: 'autos/electricos/taycan.jpg' },
      { nombre: 'BMW i4', marca: 'BMW', precio: '$1,290,000', km: '8,500 km', descripcion: 'Gran Coupé eléctrico con 590 km de autonomía y deportividad innata.', imagen: 'autos/electricos/bmwi4.jpg' },
    ]
  },

  hibridos: {
    titulo: 'Híbridos',
    eyebrow: 'Eficiencia inteligente',
    autos: [
      { nombre: 'Toyota RAV4 Hybrid', marca: 'Toyota', precio: '$680,000', km: '0 km', descripcion: 'SUV híbrida con 40 km/l en ciudad. Confiabilidad Toyota garantizada.', imagen: 'autos/hibridos/auto1.jpg' },
      { nombre: 'Lexus UX 250h', marca: 'Lexus', precio: '$790,000', km: '0 km', descripcion: 'Crossover híbrido de lujo compacto con acabados premium y bajo consumo.', imagen: 'autos/hibridos/auto2.avif' },
      { nombre: 'BMW 330e', marca: 'BMW', precio: '$1,050,000', km: '15,000 km', descripcion: 'Sedán híbrido enchufable con 60 km en modo eléctrico puro.', imagen: 'autos/hibridos/auto3.webp' },
      { nombre: 'Audi Q5 55 TFSI e', marca: 'Audi', precio: '$1,320,000', km: '7,200 km', descripcion: 'SUV híbrida enchufable con tecnología quattro y 40 km en modo eléctrico.', imagen: 'autos/hibridos/auto4.avif' },
      { nombre: 'Porsche Cayenne E-Hybrid', marca: 'Porsche', precio: '$1,980,000', km: '3,000 km', descripcion: 'SUV híbrida de alto rendimiento con 47 km en modo eléctrico.', imagen: 'autos/hibridos/auto5.webp' },
      { nombre: 'Lexus NX 450h+', marca: 'Lexus', precio: '$1,150,000', km: '0 km', descripcion: 'SUV híbrida enchufable con 87 km eléctricos y tecnología de seguridad avanzada.', imagen: 'autos/hibridos/auto6.avif' },
    ]
  },

  autos: {
    titulo: 'Autos',
    eyebrow: 'Clásicos y deportivos',
    autos: [
      { nombre: 'Porsche 911 Carrera', marca: 'Porsche', precio: '$2,890,000', km: '0 km', descripcion: 'El ícono deportivo por excelencia. Motor de 385 hp y puro placer al volante.', imagen: 'autos/auto/auto1.webp' },
      { nombre: 'BMW M3 Competition', marca: 'BMW', precio: '$1,750,000', km: '4,500 km', descripcion: 'Sedán deportivo con 510 hp y tracción trasera. Para los que disfrutan conducir.', imagen: 'autos/auto/auto2.jpg' },
      { nombre: 'Audi A6 55 TFSI', marca: 'Audi', precio: '$1,180,000', km: '11,000 km', descripcion: 'Sedán ejecutivo con tecnología mild-hybrid, 340 hp y gran confort.', imagen: 'autos/auto/auto3.webp' },
      { nombre: 'Mercedes-Benz C 200', marca: 'Mercedes-Benz', precio: '$890,000', km: '0 km', descripcion: 'Sedán de lujo compacto rediseñado, con interiores de nivel superior.', imagen: 'autos/auto/auto4.jpg' },
      { nombre: 'Audi A4 40 TFSI', marca: 'Audi', precio: '$720,000', km: '18,000 km', descripcion: 'Sedán compacto premium con tecnología quattro y diseño atemporal.', imagen: 'autos/auto/auto5.jpg' },
      { nombre: 'BMW Serie 5 530i', marca: 'BMW', precio: '$1,380,000', km: '9,000 km', descripcion: 'El sedán ejecutivo más completo de BMW. Confort, tecnología y deportividad.', imagen: 'autos/auto/auto6.webp' },
    ]
  },

  camionetas: {
    titulo: 'Camionetas',
    eyebrow: 'Potencia y versatilidad',
    autos: [
      { nombre: 'Porsche Cayenne GTS', marca: 'Porsche', precio: '$2,250,000', km: '0 km', descripcion: 'SUV deportiva con 460 hp. Combina lujo extremo con capacidad todoterreno.', imagen: 'autos/camionetas/auto1.jpg' },
      { nombre: 'BMW X5 xDrive40i', marca: 'BMW', precio: '$1,650,000', km: '6,000 km', descripcion: 'SUV premium con 340 hp, tracción total y 7 asientos opcionales.', imagen: 'autos/camionetas/auto2.webp' },
      { nombre: 'Audi Q7 55 TFSI', marca: 'Audi', precio: '$1,490,000', km: '14,000 km', descripcion: 'SUV de 7 plazas con quattro, 340 hp y tecnología de asistencia al conductor.', imagen: 'autos/camionetas/auto3.jpg' },
      { nombre: 'BMW X7 M60i', marca: 'BMW', precio: '$2,890,000', km: '2,500 km', descripcion: 'El SUV más grande de BMW. V8 de 530 hp y lujo en todas sus formas.', imagen: 'autos/camionetas/auto4.webp' },
      { nombre: 'Audi Q8 S line', marca: 'Audi', precio: '$1,980,000', km: '0 km', descripcion: 'Coupé-SUV de gran tamaño con diseño impactante y tecnología mild-hybrid.', imagen: 'autos/camionetas/auto5.jpg' },
      { nombre: 'Porsche Macan T', marca: 'Porsche', precio: '$1,290,000', km: '8,000 km', descripcion: 'SUV compacta deportiva con agilidad de coupé y practicidad diaria.', imagen: 'autos/camionetas/auto6.jpg' },
    ]
  }

};


const overlay    = document.getElementById('modalOverlay');
const modal      = document.getElementById('modal');
const modalGrid  = document.getElementById('modalGrid');
const modalTitulo  = document.getElementById('modalTitulo');
const modalEyebrow = document.getElementById('modalEyebrow');
const btnCerrar  = document.getElementById('modalCerrar');


document.querySelectorAll('.tarjeta[data-categoria]').forEach(tarjeta => {
  tarjeta.addEventListener('click', () => {
    const categoria = tarjeta.dataset.categoria;
    abrirModal(categoria);
  });
});

function abrirModal(categoria) {
  const data = catalogo[categoria];
  if (!data) return;


  modalTitulo.textContent  = data.titulo;
  modalEyebrow.textContent = data.eyebrow;

  
  modalGrid.innerHTML = '';

  data.autos.forEach((auto, index) => {
    const card = document.createElement('div');
    card.classList.add('modal-tarjeta');
    card.style.animationDelay = `${index * 0.06}s`;

    card.innerHTML = `
      <div class="modal-tarjeta-img">
        <img src="${auto.imagen}" alt="${auto.nombre}">
      </div>
      <div class="modal-tarjeta-info">
        <span class="modal-tarjeta-marca">${auto.marca}</span>
        <h4 class="modal-tarjeta-nombre">${auto.nombre}</h4>
        <p class="modal-tarjeta-desc">${auto.descripcion}</p>
        <div class="modal-tarjeta-footer">
          <span class="modal-tarjeta-precio">${auto.precio}</span>
          <span class="modal-tarjeta-km">${auto.km}</span>
        </div>
        <button class="modal-tarjeta-btn">Solicitar información</button>
      </div>
    `;

    modalGrid.appendChild(card);
  });

  overlay.classList.add('activo');
  document.body.style.overflow = 'hidden'; 
}

function cerrarModal() {
  overlay.classList.remove('activo');
  document.body.style.overflow = '';
}


btnCerrar.addEventListener('click', cerrarModal);


overlay.addEventListener('click', (e) => {
  if (e.target === overlay) cerrarModal();
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarModal();
});
