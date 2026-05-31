
const preguntasRecomendador = [
  {
    id: 'uso',
    pregunta: '¿Para qué usarás principalmente tu auto?',
    opciones: [
      { texto: '🏙️ Ciudad y commute diario',  pesos: { electricos: 3, hibridos: 2, autos: 1, camionetas: 0 } },
      { texto: '🛣️ Viajes largos y carretera', pesos: { electricos: 1, hibridos: 2, autos: 3, camionetas: 2 } },
      { texto: '👨‍👩‍👧 Familia y espacio',          pesos: { electricos: 1, hibridos: 2, autos: 1, camionetas: 3 } },
      { texto: '🏎️ Placer y deportividad',     pesos: { electricos: 2, hibridos: 1, autos: 3, camionetas: 0 } },
    ]
  },
  {
    id: 'presupuesto',
    pregunta: '¿Cuál es tu rango de presupuesto?',
    opciones: [
      { texto: 'Hasta $700,000',          pesos: { electricos: 2, hibridos: 3, autos: 2, camionetas: 0 } },
      { texto: '$700,000 — $1,200,000',   pesos: { electricos: 3, hibridos: 2, autos: 2, camionetas: 1 } },
      { texto: '$1,200,000 — $2,000,000', pesos: { electricos: 2, hibridos: 2, autos: 2, camionetas: 3 } },
      { texto: 'Más de $2,000,000',       pesos: { electricos: 2, hibridos: 1, autos: 3, camionetas: 2 } },
    ]
  },
  {
    id: 'prioridad',
    pregunta: '¿Qué es lo más importante para ti?',
    opciones: [
      { texto: '🌱 Bajo consumo y ecología', pesos: { electricos: 3, hibridos: 3, autos: 0, camionetas: 0 } },
      { texto: '💎 Lujo y confort',          pesos: { electricos: 2, hibridos: 2, autos: 3, camionetas: 2 } },
      { texto: '⚡ Potencia y velocidad',    pesos: { electricos: 2, hibridos: 1, autos: 3, camionetas: 1 } },
      { texto: '🔧 Practicidad y espacio',   pesos: { electricos: 1, hibridos: 2, autos: 1, camionetas: 3 } },
    ]
  }
];

const nombresCategoria = {
  electricos:  { label: 'Eléctricos',  emoji: '⚡' },
  hibridos:    { label: 'Híbridos',    emoji: '🌿' },
  autos:       { label: 'Autos',       emoji: '🏎️' },
  camionetas:  { label: 'Camionetas',  emoji: '🚙' },
};


let preguntaActual = 0;
let puntajes = { electricos: 0, hibridos: 0, autos: 0, camionetas: 0 };

// Referencia al contenedor de la encuesta 1
const encuesta1 = document.getElementById('encuesta1');
if (encuesta1) {
  renderPregunta();
}

function renderPregunta() {
  const datos = preguntasRecomendador[preguntaActual];
  const total = preguntasRecomendador.length;

  encuesta1.innerHTML = `
    <div class="encuesta-progreso">
      <div class="encuesta-barra">
        <div class="encuesta-barra-fill" style="width: ${((preguntaActual) / total) * 100}%"></div>
      </div>
      <span class="encuesta-paso">${preguntaActual + 1} / ${total}</span>
    </div>
    <p class="encuesta-pregunta">${datos.pregunta}</p>
    <div class="encuesta-opciones">
      ${datos.opciones.map((op, i) => `
        <button class="encuesta-opcion" data-index="${i}">${op.texto}</button>
      `).join('')}
    </div>
  `;


  encuesta1.querySelectorAll('.encuesta-opcion').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      const opcion = datos.opciones[idx];

      
      for (const cat in opcion.pesos) {
        puntajes[cat] += opcion.pesos[cat];
      }

      
      btn.classList.add('seleccionada');

      setTimeout(() => {
        preguntaActual++;
        if (preguntaActual < total) {
          renderPregunta();
        } else {
          mostrarResultado();
        }
      }, 300);
    });
  });
}

function mostrarResultado() {
  
  const recomendada = Object.entries(puntajes).sort((a, b) => b[1] - a[1])[0][0];
  const info = nombresCategoria[recomendada];

  encuesta1.innerHTML = `
    <div class="encuesta-resultado">
      <span class="resultado-emoji">${info.emoji}</span>
      <p class="resultado-label">Tu recomendación es</p>
      <h3 class="resultado-titulo">${info.label}</h3>
      <p class="resultado-desc">Basándonos en tus respuestas, esta categoría se adapta perfectamente a lo que buscas.</p>
      <div class="resultado-acciones">
        <button class="btn-primary" id="btnVerCategoria" data-cat="${recomendada}">
          Ver ${info.label} →
        </button>
        <button class="encuesta-reiniciar" id="btnReiniciar">Volver a responder</button>
      </div>
    </div>
  `;

  
  document.querySelectorAll('.tarjeta[data-categoria]').forEach(t => {
    t.classList.remove('tarjeta-recomendada');
  });
  const tarjetaRecomendada = document.querySelector(`.tarjeta[data-categoria="${recomendada}"]`);
  if (tarjetaRecomendada) {
    tarjetaRecomendada.classList.add('tarjeta-recomendada');
  }

  // Botón: abrir modal de la categoría recomendada
  document.getElementById('btnVerCategoria').addEventListener('click', () => {
    if (typeof abrirModal === 'function') abrirModal(recomendada);
  });

  // Botón: reiniciar encuesta
  document.getElementById('btnReiniciar').addEventListener('click', () => {
    preguntaActual = 0;
    puntajes = { electricos: 0, hibridos: 0, autos: 0, camionetas: 0 };
    document.querySelectorAll('.tarjeta[data-categoria]').forEach(t => t.classList.remove('tarjeta-recomendada'));
    renderPregunta();
  });
}


const encuesta2 = document.getElementById('encuesta2');
if (encuesta2) {
  let estrellaSeleccionada = 0;

  const mensajesPorEstrellas = {
    1: { titulo: 'Lamentamos tu experiencia', texto: 'Tu opinión nos ayuda a mejorar. Nos pondremos en contacto contigo pronto.' },
    2: { titulo: 'Gracias por tu honestidad', texto: 'Toma nota de tus comentarios para ofrecerte un mejor servicio.' },
    3: { titulo: '¡Gracias por calificarnos!', texto: 'Seguiremos trabajando para darte una experiencia de 5 estrellas.' },
    4: { titulo: '¡Muy buena calificación!', texto: 'Nos alegra que tu experiencia haya sido positiva. ¡Trabajamos para el 5!' },
    5: { titulo: '¡Excelente! Muchas gracias 🙌', texto: 'Es un honor contar con tu satisfacción. ¡Hasta la próxima!' },
  };

  encuesta2.innerHTML = `
    <p class="encuesta-pregunta">¿Cómo calificarías tu experiencia con nosotros?</p>
    <div class="estrellas" id="estrellas">
      ${[1,2,3,4,5].map(n => `<button class="estrella" data-val="${n}" aria-label="${n} estrellas">★</button>`).join('')}
    </div>
    <div class="encuesta-comentario-wrap" id="comentarioWrap" style="display:none">
      <textarea class="encuesta-comentario" id="comentarioTexto" placeholder="Cuéntanos más sobre tu experiencia (opcional)..." rows="3"></textarea>
      <button class="btn-primary" id="btnEnviarEval">Enviar evaluación</button>
    </div>
  `;

  const estrellas = encuesta2.querySelectorAll('.estrella');

  // Hover: iluminar estrellas
  estrellas.forEach(est => {
    est.addEventListener('mouseenter', () => {
      const val = parseInt(est.dataset.val);
      estrellas.forEach(e => {
        e.classList.toggle('activa', parseInt(e.dataset.val) <= val);
      });
    });
  });

  // Mouse fuera: volver al estado seleccionado
  encuesta2.querySelector('#estrellas').addEventListener('mouseleave', () => {
    estrellas.forEach(e => {
      e.classList.toggle('activa', parseInt(e.dataset.val) <= estrellaSeleccionada);
    });
  });

  // Clic en estrella
  estrellas.forEach(est => {
    est.addEventListener('click', () => {
      estrellaSeleccionada = parseInt(est.dataset.val);
      estrellas.forEach(e => {
        e.classList.toggle('activa', parseInt(e.dataset.val) <= estrellaSeleccionada);
      });
      document.getElementById('comentarioWrap').style.display = 'block';
    });
  });


  encuesta2.querySelector('#btnEnviarEval').addEventListener('click', () => {
    if (estrellaSeleccionada === 0) return;
    const comentario = document.getElementById('comentarioTexto').value.trim();
    const msg = mensajesPorEstrellas[estrellaSeleccionada];

    encuesta2.innerHTML = `
      <div class="encuesta-resultado">
        <div class="resultado-estrellas">
          ${'★'.repeat(estrellaSeleccionada)}<span style="color:var(--border)">${'★'.repeat(5 - estrellaSeleccionada)}</span>
        </div>
        <h3 class="resultado-titulo">${msg.titulo}</h3>
        <p class="resultado-desc">${msg.texto}</p>
        ${comentario ? `<blockquote class="resultado-comentario">"${comentario}"</blockquote>` : ''}
      </div>
    `;
  });
}
