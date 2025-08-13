/* =====================================================
 * QUIZ HORIZONTAL – scroll paso a paso con flecha
 * Estructura mínima en HTML:
 * <div id="quizViewport"><div id="quizTrack"></div></div>
 * <button id="arrowNext" class="arrow" aria-disabled="true" disabled>→</button>
 * ===================================================== */

const preguntas = [
    { 
        numero: "1",
        pregunta: "¿Qué es la acera?",
        opciones: [
            "A. Parte de la vía destinada al tránsito de peatones.",
            "B. Parte de la vía destinada al tránsito de vehículos.",
            "C. Zona verde ubicada al costado de la calzada."
        ],
        correcta: 0,
        mensaje: [
            "¡Correcto! La acera es la zona exclusiva para peatones.",
            "¡Incorrecto! Esa es la calzada o pista.",
            "¡Incorrecto! Esa es una berma o jardín."
        ],
        ilustracion: "../img/bg-pregunta-1.png?v2"  
    },
    { 
        numero: "2",
        pregunta: "¿Qué es la calzada?",
        opciones: [
            "A. Parte de la vía por donde circulan los vehículos. ",
            "B. Zona de descanso para peatones.",
            "C. Área donde se colocan señales verticales."
        ],
        correcta: 0,
        mensaje: [
            "¡Correcto! La calzada es para la circulación de vehículos.",
            "¡Incorrecto! La zona peatonal es la acera o vereda.",
            "¡Incorrecto! Las señales verticales no se colocan en la calzada."
        ],
        ilustracion: "../img/bg-pregunta-2.png?v2" 
    },
    { 
        numero: "3",
        pregunta: "¿Qué es la berma?",
        opciones: [
            "A. Espacio lateral de la vía, que puede ser peatonal o con vegetación.",
            "B. Área exclusiva para estacionar autos.",
            "C. Línea blanca que separa carriles."
        ],
        correcta: 0,
        mensaje: [
            "¡Correcto! Es un espacio lateral, no una parte de la calzada principal.",
            "¡Incorrecto! No definen la berma. No es para estacionar vehículos. Tampoco es una línea, sino un espacio para peatones o plantas.",
            "¡Incorrecto! No definen la berma. No es para estacionar vehículos. Tampoco es una línea, sino un espacio para peatones o plantas."
        ],
        ilustracion: "../img/bg-pregunta-2.png?v2"  
    },
    { 
        numero: "4",
        pregunta: "¿Qué es un crucero peatonal?",
        opciones: [
            "A. Puente sobre el río para peatones.",
            "B. Zona marcada en la calzada para cruzar.",
            "C. Calle exclusiva para caminar."
        ],
        correcta: 1,
        mensaje: [
            "¡Incorrecto! Un crucero peatonal no es un puente.",
            "¡Correcto! Es una serie de franjas pintadas para cruzar.",
            "¡Incorrecto! Un crucero peatonal no es una calle, sino un espacio para cruzar la pista."
        ],
        ilustracion: "../img/bg-pregunta-4.png?v2"  
    },
    { 
        numero: "5",
        pregunta: "¿Qué debe hacer el peatón si el semáforo peatonal está en rojo?",
        opciones: [
            "A. Cruzar rápido antes que pasen los autos.",
            "B. Esperar en la acera hasta que cambie a verde.",
            "C. Cruzar solo si no hay autos cerca."
        ],
        correcta: 1,
        mensaje: [
            "¡Incorrecto! Cruzar intentando ganarle al semáforo es peligroso.",
            "¡Correcto! La luz roja es alto total al tránsito peatonal.",
            "¡Incorrecto! Hacer eso es una infracción."
        ],
        ilustracion: "../img/bg-pregunta-5.png?v2"
    },
    { 
        numero: "6",
        pregunta: "¿Dónde debe caminar el peatón si no hay acera?",
        opciones: [
            "A. Por el borde izquierdo de la calzada, de frente al tránsito.",
            "B. Por el centro de la vía.",
            "C. Por cualquier lado que prefiera"
        ],
        correcta: 0,
        mensaje: [
            "¡Correcto! Por seguridad, el peatón debe poder ver venir los vehículos.",
            "¡Incorrecto! Además de ser una infracción al tránsito peatonal, también es una conducta peligrosa.",
            "¡Incorrecto! Está acción podría generar un accidente."
        ],
         ilustracion: "../img/bg-pregunta-6.png?v2"
    },
    { 
        numero: "7",
        pregunta: "¿Cómo debe cruzar un peatón en una vía rápida?",
        opciones: [
            "A. Por un puente o paso peatonal elevado.",
            "B. Corriendo entre los autos.",
            "C. Por cualquier hueco en el tráfico."
        ],
        correcta: 0,
        mensaje: [
            "¡Correcto! Por seguridad se usan pasos a desnivel o puentes elevados para cruzar.",
            "¡Incorrecto! Muchas personas han resultado heridas o fallecidas por cometer esta infracción.",
            "¡Incorrecto! Es una práctica peligrosa e ilegal."
        ],
         ilustracion: "../img/bg-pregunta-7.png?v2"
    },
    { 
        numero: "8",
        pregunta: "¿Qué debe hacer un peatón antes de cruzar una calle sin semáforo?",
        opciones: [
            "A. Mirar a ambos lados y asegurarse de que puede pasar.",
            "B. Caminar sin mirar, confiando en los conductores.",
            "C. Gritar para que los autos se detengan."
        ],
        correcta: 0,
        mensaje: [
            "¡Correcto! La observación es clave para la seguridad.",
            "¡Incorrecto! No tener contacto visual con choferes y otros peatones puede ser riesgoso.",
            "¡Incorrecto! Gritar no salvará tu vida en caso un vehículo este próximo a atropellarte."
        ],
         ilustracion: "../img/bg-pregunta-8.png?v2" 
    },
    { 
        numero: "9",
        pregunta: "¿Qué significa una señal con figura de peatón cruzando?",
        opciones: [
            "A. Prohibido el paso de peatones.",
            "B. Precaución: zona de cruce peatonal.",
            "C. Velocidad máxima 30 km/h."
        ],
        correcta: 1,
        mensaje: [
            "¡Incorrecto! Todo lo contrario: la señal advierte a los choferes sobre la presencia de peatones.",
            "¡Correcto! Advierte cruce cercano.",
            "¡Incorrecto! No necesariamente una zona con flujo de peatones tiene un límite de 30 km/h."
        ],
         ilustracion: "../img/bg-pregunta-9.png?v2" 
    },
    { 
        numero: "10",
        pregunta: "¿Es correcto caminar por ciclovías?",
        opciones: [
            "A. Sí, si no vienen bicicletas.",
            "B. No, salvo que sea necesario para cruzar.",
            "C. Sí, siempre."
        ],
        correcta: 1,
        mensaje: [
            "¡Incorrecto! Puede ocasionar un accidente.",
            "¡Correcto! Solo es para cruzar, no para circular por ellas.",
            "¡Incorrecto! Puede generar un impacto entre el ciclista y el peatón."
        ],
        ilustracion: "../img/bg-pregunta-10.png?v2"
    },
    { 
        numero: "11",
        pregunta: "¿Qué debe hacer un peatón si el semáforo peatonal está en verde parpadeando?",
        opciones: [
            "A. Empezar a cruzar de inmediato.",
            "B. No iniciar el cruce y esperar la siguiente luz verde.",
            "C. Correr lo más rápido posible."
        ],
        correcta: 1,
        mensaje: [
            "¡Incorrecto! Podría cambiar a rojo generando un riesgo de accidente.",
            "¡Correcto! El verde parpadeante indica que está por cambiar a rojo.",
            "¡Incorrecto! Además de ser una infracción, hay riesgo de atropello o choque."
        ],
         ilustracion: "../img/bg-pregunta-11.png?v2" 
    },
    { 
        numero: "12",
        pregunta: "¿Dónde debe esperar el peatón para cruzar una calle?",
        opciones: [
            "A. En la acera, antes de la calzada.",
            "B. En la calzada, junto a los autos.",
            "C. En el crucero peatonal, pero ya parado en la pista."
        ],
        correcta: 0,
        mensaje: [
            "¡Correcto! Siempre esperar en la acera.",
            "¡Incorrecto! Permanecer de pie en la pista es riesgoso.",
            "¡Incorrecto! Además de ser una infracción, podría ocasionar un accidente."
        ],
        ilustracion: "../img/bg-pregunta-12.png?v2" 
    },
    { 
        numero: "13",
        pregunta: "¿Qué debe hacer un peatón al bajar de un taxi en plena vía?",
        opciones: [
            "A. Abrir la puerta sin mirar.",
            "B. Verificar que no vengan vehículos y salir por el lado de la acera.",
            "C. Bajar por el lado de la pista."
        ],
        correcta: 1,
        mensaje: [
            "¡Incorrecto! Está mala costumbre genera accidentes y daños al vehículo.",
            "¡Correcto! Para el peatón, salir por la acera reduce riesgo.",
            "¡Incorrecto! Esta acción puede producir un atropello de otros vehículos circulando."
        ],
        ilustracion: "../img/bg-pregunta-13.png?v2" 
    },
    { 
        numero: "14",
        pregunta: "¿Qué significa una señal con un niño corriendo?",
        opciones: [
            "A. Advertencia de zona escolar o de juego.",
            "B. Prohibición de jugar en la calle.",
            "C. Paso peatonal cerrado."
        ],
        correcta: 0,
        mensaje: [
            "¡Correcto! Está señal indica presencia frecuente de niños.",
            "¡Incorrecto! La señal no tiene nada que ver con niños jugando.",
            "¡Incorrecto! La señal no significa cierre de vía peatonal."
        ],
        ilustracion: "../img/bg-pregunta-14.png?v2"
    },
    { 
        numero: "15",
        pregunta: "¿Existen infracciones de tránsito para peatones en el Perú?",
        opciones: [
            "A. No, solo los conductores pueden recibir multas.",
            "B. Sí, si no respetan las normas de tránsito.",
            "C. Sí, pero solo en avenidas."
        ],
        correcta: 1,
        mensaje: [
            "¡Incorrecto! Los municipios aplican multas a peatones por medio de la policía.",
            "¡Correcto! Si. Reglamento Nacional de Tránsito también sanciona a peatones.",
            "¡Incorrecto! Las multas aplican para todas las vías."
        ],
        ilustracion: "../img/bg-pregunta-15.png?v2"
    },
    { 
        numero: "16",
        pregunta: "¿Puede ser multado un peatón por cruzar fuera de la zona de cruce?",
        opciones: [
            "A. Sí, porque pone en riesgo su seguridad y la de otros.",
            "B. No, porque es su responsabilidad personal.",
            "C. Solo si hay policías cerca."
        ],
        correcta: 0,
        mensaje: [
            "¡Correcto!  El cruce fuera de zona señalizada es infracción.",
            "¡Incorrecto! Cruzar es responsabilidad del peatón.",
            "¡Incorrecto! No solo debemos cumplir las normas cuando hay policías."
        ],
        ilustracion: "../img/bg-pregunta-16.png?v2"
    },
    { 
        numero: "17",
        pregunta: "¿Qué pasa si un peatón provoca un accidente por imprudencia?",
        opciones: [
            "A. No pasa nada, el conductor siempre es culpable.",
            "B. Puede ser sancionado e incluso denunciado.",
            "C. Solo recibe una advertencia."
        ],
        correcta: 1,
        mensaje: [
            "¡Incorrecto! El peatón sí tiene responsabilidad.",
            "¡Correcto! El peatón puede recibir sanciones administrativas y responsabilidades civiles.",
            "¡Incorrecto! El peatón no se salva de ser denunciado si genera un accidente."
        ],
        ilustracion: "../img/bg-pregunta-17.png?v2"
    }
];

let respuestasCorrectas = 0;
let currentIndex = 0; // slide visible

function renderQuiz() {
  const track = document.getElementById('quizTrack');
  if (!track) {
    console.error('Falta el contenedor #quizTrack');
    return;
  }
  track.innerHTML = '';

  preguntas.forEach((q, idx) => {
    // contenedor a pantalla completa (para centrado)
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.dataset.index = String(idx);
    slide.dataset.answered = '0';

    // tarjeta centrada
    const card = document.createElement('section');
    card.className = 'quiz-card';

    // badge de número (editable via q.numero)
    const badge = document.createElement('div');
    badge.className = 'q-badge';
    badge.textContent = (q.numero ?? (idx + 1));
    card.appendChild(badge);

    // pregunta
    const h = document.createElement('h2');
    h.textContent = q.pregunta;
    card.appendChild(h);

    // imagen superior (opcional) — si la usas como ícono/emoji de la pregunta
    if (q.imagen) {
      const img = document.createElement('img');
      img.src = q.imagen;
      img.alt = 'Imagen de la pregunta';
      img.style.display = 'block';
      img.style.margin = '0 auto 10px';
      img.style.maxWidth = '80px';
      img.style.height = 'auto';
      card.appendChild(img);
    }

    // opciones
    const optionsWrap = document.createElement('div');
    optionsWrap.className = 'opciones';

    q.opciones.forEach((txt, i) => {
      const b = document.createElement('button');
      b.className = 'opcion';
      b.type = 'button';

      // extraer la letra antes del punto (ej: "A." -> "A")
      const letra = txt.trim().charAt(0);
      const textoOpcion = txt.replace(/^[A-Z]\.\s*/, '');

      b.innerHTML = `<span class="opcion-letra">${letra}</span> ${textoOpcion}`;
      b.addEventListener('click', () => handleSelect(slide, b, i));

      // desde la 2da pregunta en adelante, desactivadas hasta responder la anterior
      if (idx > 0) b.disabled = true;

      optionsWrap.appendChild(b);
    });

    // meter opciones en la card
    card.appendChild(optionsWrap);

    // Añadir la card al slide (queda arriba, junto al número)
    slide.appendChild(card);

    // === Bloque inferior: ilustración + mensaje ===
    const feedbackRow = document.createElement('div');
    feedbackRow.className = 'feedback-row';

    // Ilustración debajo (según tu ejemplo)
    if (q.ilustracion) {
      const fig = document.createElement('figure');
      fig.className = 'feedback-fig';
      const imgUnder = document.createElement('img');
      imgUnder.className = 'feedback-illustration';
      imgUnder.src = q.ilustracion;
      imgUnder.alt = 'Ilustración de apoyo';
      fig.appendChild(imgUnder);
      feedbackRow.appendChild(fig);
    }

    // Mensaje dashed (inicia vacío)
    const msg = document.createElement('p');
    msg.className = 'mensaje';
    msg.textContent = '';
    feedbackRow.appendChild(msg);

    // Añadir bloque inferior al slide
    slide.appendChild(feedbackRow);

    // Por último, agregar el slide al track
    track.appendChild(slide);
  });

  // ir a la primera y bloquear flecha
  goToIndex(0, false);
  setArrowEnabled(false);
}

function handleSelect(slide, button, optionIndex) {
  if (slide.dataset.answered === '1') return; // no doble respuesta

  const idx = parseInt(slide.dataset.index, 10);
  const correct = preguntas[idx].correcta;
  const isCorrect = optionIndex === correct;

  // colorear selección
  if (isCorrect) {
    button.classList.add('is-correct');
    respuestasCorrectas += 1;
  } else {
    button.classList.add('is-wrong');
  }

  // bloquear todas las opciones de esta tarjeta
  const all = slide.querySelectorAll('button.opcion');
  all.forEach(b => (b.disabled = true));

  // feedback (fuera de la card)
  const p = slide.querySelector('.mensaje');
  p.textContent = preguntas[idx].mensaje[optionIndex] || '';
  p.classList.toggle('msg-correcto', isCorrect);
  p.classList.toggle('msg-incorrecto', !isCorrect);

  slide.dataset.answered = '1';

  // 🔹 Scroll suave hacia el mensaje si estamos en pantallas pequeñas
if (window.innerWidth <= 768) {
  setTimeout(() => {
    const offset = 120; // píxeles desde el top
    const elementTop = p.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementTop - offset,
      behavior: 'smooth'
    });
  }, 150);
}

  // activar flecha para avanzar
  setArrowEnabled(true);

  // habilitar la siguiente pregunta solo si existe y aún no fue contestada
  const nextSlide = slide.nextElementSibling;
  if (nextSlide && nextSlide.dataset.answered !== '1') {
    const nextOptions = nextSlide.querySelectorAll('button.opcion');
    nextOptions.forEach(b => (b.disabled = false));
  }
}

function setArrowEnabled(enabled) {
  const arrow = document.getElementById('arrowNext');
  if (!arrow) return;
  arrow.disabled = !enabled;
  arrow.setAttribute('aria-disabled', String(!enabled));
  arrow.classList.toggle('is-active', enabled);
}

function goToIndex(index, smooth = true) {
  const track = document.getElementById('quizTrack');
  const slides = track ? track.children : [];
  if (!track || index < 0 || index >= slides.length) return;

  currentIndex = index;
  const target = slides[index];
  target.scrollIntoView({
    behavior: smooth ? 'smooth' : 'auto',
    inline: 'start',
    block: 'nearest'
  });

  // flecha depende de si la actual ya fue respondida
  const answered = target.dataset.answered === '1';
  setArrowEnabled(answered);
}

function nextCard() {
  const track = document.getElementById('quizTrack');
  if (!track) return;
  const total = track.children.length;

  if (currentIndex >= total - 1) {
    showResult();
    return;
  }
  goToIndex(currentIndex + 1, true);
}

// Helper: construye el mensaje final según rangos
function getResultMessage(correctas, total) {
  // Rangos calculados por porcentaje para que sirva con cualquier total
  const t1 = Math.floor(total * 0.30); // ~30%  -> con 17 => 5
  const t2 = Math.floor(total * 0.60); // ~60%  -> con 17 => 10
  const t3 = Math.floor(total * 0.85); // ~85%  -> con 17 => 14

  if (correctas <= t1) {
    return "Eres un ciudadano en proceso de aprender. ¡Sigue practicando!";
  } else if (correctas <= t2) {
    return "Eres un ciudadano que sabe un poco más, vas por buen camino.";
  } else if (correctas <= t3) {
    return "¡Muy bien! Eres un ciudadano responsable y bien informado.";
  } else {
    return "¡Excelente! Eres un ciudadano ejemplar. ¡Aplausos!";
  }
}

function showResult() {
  const track = document.getElementById('quizTrack');
  const total = preguntas.length;

  const slide = document.createElement('div');
  slide.className = 'slide';

  const card = document.createElement('section');
  card.className = 'quiz-card';

  const h = document.createElement('h2');
  h.textContent = 'Test finalizado';

  const p = document.createElement('p');
  p.textContent = `Respuestas correctas: ${respuestasCorrectas} de ${total}`;

  // Mensaje personalizado
  const pMsg = document.createElement('p');
  pMsg.className = 'resultado-mensaje';
  pMsg.textContent = getResultMessage(respuestasCorrectas, total);

  const btn = document.createElement('button');
  btn.id = 'reset';
  btn.type = 'button';
  btn.textContent = 'Reiniciar Test';
  btn.addEventListener('click', resetQuiz);

  card.append(h, p, pMsg, btn);
  slide.appendChild(card);
  track.appendChild(slide);

  goToIndex(track.children.length - 1, true);
  setArrowEnabled(false);
}

function resetQuiz() {
  respuestasCorrectas = 0;
  currentIndex = 0;
  renderQuiz();
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuiz();

  const arrow = document.getElementById('arrowNext');
  if (arrow) arrow.addEventListener('click', nextCard);

  // re-ubicar al redimensionar (mantiene alineación exacta)
  window.addEventListener('resize', () => {
    goToIndex(currentIndex, false);
  });
});
