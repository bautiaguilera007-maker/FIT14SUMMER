
  
const $ = (selector) => document.querySelector(selector);

const plan = [
  {
    name: "Educación Física / recuperación",
    tag: "Suave",
    icon: "🏫",
    duration: "Actividad escolar · sin carga extra",
    desc: "La clase de Educación Física cuenta como actividad. No agregues otra sesión intensa.",
    type: "rest",
    steps: []
  },
  {
    name: "Técnica de fútbol",
    tag: "Técnica",
    icon: "⚽",
    duration: "20–25 minutos",
    desc: "Trabajo suave con pelota: conducción, control orientado y pases. Sin exigirte al máximo.",
    type: "technical",
    steps: [
      { name: "Calentamiento suave", seconds: 180, hint: "Mové articulaciones y trotá suavemente." },
      { name: "Conducción con pelota", seconds: 180, hint: "Usá ambos pies y mantené el control." },
      { name: "Cambios de dirección", seconds: 120, hint: "Girá con control, sin frenar bruscamente." },
      { name: "Pases contra una pared", seconds: 180, hint: "Alterná ambos perfiles." },
      { name: "Control orientado", seconds: 180, hint: "Recibí y orientá el primer toque." },
      { name: "Vuelta a la calma", seconds: 180, hint: "Caminá y respir á tranquilamente." }
    ]
  },
  {
    name: "Recuperación activa",
    tag: "Recuperación",
    icon: "🌿",
    duration: "15–20 minutos",
    desc: "Movilidad y recuperación. Si estás cansado, descansá.",
    type: "recovery",
    steps: [
      { name: "Caminata suave", seconds: 240, hint: "Mantené un ritmo cómodo." },
      { name: "Movilidad de tobillos", seconds: 120, hint: "Mové los tobillos sin forzar." },
      { name: "Movilidad de cadera", seconds: 120, hint: "Movimientos lentos y controlados." },
      { name: "Movilidad de hombros", seconds: 120, hint: "Hacé círculos suaves." },
      { name: "Respiración tranquila", seconds: 120, hint: "Respirá con calma." }
    ]
  },
  {
    name: "Velocidad y coordinación",
    tag: "Entrenamiento",
    icon: "⚡",
    duration: "25–30 minutos",
    desc: "Aceleraciones cortas y coordinación. Solo si estás descansado, sin dolor y tenés un espacio seguro.",
    type: "speed",
    steps: [
      { name: "Calentamiento", seconds: 300, hint: "Caminata, trote suave y movilidad." },
      { name: "Coordinación de pies", seconds: 120, hint: "Pasos cortos y controlados." },
      { name: "Aceleración corta", seconds: 10, hint: "Acelerá progresivamente, sin competir contra el cansancio." },
      { name: "Descanso", seconds: 80, hint: "Caminá y recuperá el aire." },
      { name: "Aceleración corta", seconds: 10, hint: "Mantené una técnica cómoda." },
      { name: "Descanso", seconds: 80, hint: "Recuperación completa." },
      { name: "Aceleración corta", seconds: 10, hint: "No busques tu velocidad máxima." },
      { name: "Vuelta a la calma", seconds: 300, hint: "Caminá y soltá las piernas." }
    ]
  },
  {
    name: "Movilidad y control corporal",
    tag: "Suave",
    icon: "🧘",
    duration: "15–20 minutos",
    desc: "Sesión tranquila para mejorar movilidad, equilibrio y control.",
    type: "recovery",
    steps: [
      { name: "Movilidad general", seconds: 240, hint: "Mové todo el cuerpo suavemente." },
      { name: "Equilibrio sobre una pierna", seconds: 60, hint: "Alterná piernas y mantené el control." },
      { name: "Puente de glúteos", seconds: 60, hint: "Elevá la cadera sin arquear la espalda." },
      { name: "Bird dog", seconds: 90, hint: "Extendé brazo y pierna contrarios." },
      { name: "Movilidad de cadera", seconds: 120, hint: "Sin rebotes ni movimientos bruscos." },
      { name: "Respiración", seconds: 120, hint: "Terminá relajado." }
    ]
  },
  {
    name: "Fuerza general",
    tag: "Entrenamiento",
    icon: "💪",
    duration: "25–30 minutos",
    desc: "Fuerza con el peso corporal y elementos livianos. Priorizá la técnica y no llegues al fallo.",
    type: "strength",
    steps: [
      { name: "Calentamiento", seconds: 300, hint: "Movilidad y movimientos suaves." },
      { name: "Sentadillas controladas", seconds: 30, hint: "Mantené la espalda cómoda y las rodillas alineadas." },
      { name: "Descanso", seconds: 60, hint: "Recuperá antes de continuar." },
      { name: "Flexiones adaptadas", seconds: 30, hint: "Usá una variante que puedas controlar." },
      { name: "Descanso", seconds: 60, hint: "Respirá tranquilamente." },
      { name: "Remo con banda", seconds: 30, hint: "Tirá suavemente y controlá el regreso." },
      { name: "Descanso", seconds: 60, hint: "No apures la recuperación." },
      { name: "Puente de glúteos", seconds: 30, hint: "Movimiento controlado." },
      { name: "Descanso", seconds: 60, hint: "Tomá agua si lo necesitás." },
      { name: "Bird dog", seconds: 60, hint: "Mantené estable el tronco." },
      { name: "Vuelta a la calma", seconds: 240, hint: "Caminá y relajá los músculos." }
    ]
  },
  {
    name: "Descanso",
    tag: "Descanso",
    icon: "😴",
    duration: "Recuperación",
    desc: "Día para recuperar energía. Podés caminar suavemente si te apetece.",
    type: "rest",
    steps: []
  },
  {
    name: "Técnica y reacción",
    tag: "Técnica",
    icon: "⚽",
    duration: "20–25 minutos",
    desc: "Practicá control, reacción y cambios de orientación. Mantené una intensidad cómoda.",
    type: "technical",
    steps: [
      { name: "Calentamiento", seconds: 240, hint: "Movilidad y caminata." },
      { name: "Conducción con ambos pies", seconds: 180, hint: "Controlá la pelota con ambos perfiles." },
      { name: "Cambios de dirección", seconds: 120, hint: "Girá sin movimientos bruscos." },
      { name: "Pases y recepción", seconds: 180, hint: "Orientá el primer toque." },
      { name: "Reacción", seconds: 120, hint: "Respondé a señales visuales o auditivas." },
      { name: "Vuelta a la calma", seconds: 180, hint: "Caminá suavemente." }
    ]
  },
  {
    name: "Resistencia suave",
    tag: "Entrenamiento",
    icon: "🏃",
    duration: "20–25 minutos",
    desc: "Mejorá tu capacidad aeróbica con un ritmo que te permita hablar.",
    type: "endurance",
    steps: [
      { name: "Caminata de calentamiento", seconds: 240, hint: "Empezá muy suave." },
      { name: "Trote cómodo", seconds: 180, hint: "Ritmo conversacional, sin agotarte." },
      { name: "Caminata", seconds: 120, hint: "Recuperá el aire." },
      { name: "Trote cómodo", seconds: 180, hint: "Mantené un ritmo estable." },
      { name: "Caminata", seconds: 120, hint: "Recuperación." },
      { name: "Vuelta a la calma", seconds: 240, hint: "Caminá y relajá las piernas." }
    ]
  },
  {
    name: "Recuperación activa",
    tag: "Recuperación",
    icon: "🌿",
    duration: "15–20 minutos",
    desc: "Movilidad, caminata suave y recuperación.",
    type: "recovery",
    steps: [
      { name: "Caminata suave", seconds: 240, hint: "Ritmo cómodo." },
      { name: "Movilidad de tobillos", seconds: 120, hint: "Movimientos suaves." },
      { name: "Movilidad de cadera", seconds: 120, hint: "Sin forzar." },
      { name: "Movilidad de espalda", seconds: 120, hint: "Movimientos lentos." },
      { name: "Respiración", seconds: 120, hint: "Relajate." }
    ]
  },
  {
    name: "Fuerza y estabilidad",
    tag: "Entrenamiento",
    icon: "💪",
    duration: "25–30 minutos",
    desc: "Trabajá estabilidad y fuerza general con movimientos controlados.",
    type: "strength",
    steps: [
      { name: "Calentamiento", seconds: 300, hint: "Movilidad general." },
      { name: "Sentadillas controladas", seconds: 30, hint: "Sin peso o con una carga muy liviana si dominás la técnica." },
      { name: "Descanso", seconds: 60, hint: "Recuperá." },
      { name: "Flexiones adaptadas", seconds: 30, hint: "Elegí una variante cómoda." },
      { name: "Descanso", seconds: 60, hint: "Respirá." },
      { name: "Remo con banda", seconds: 30, hint: "Controlá el movimiento." },
      { name: "Descanso", seconds: 60, hint: "Recuperación." },
      { name: "Plancha adaptada", seconds: 20, hint: "Mantené el cuerpo alineado." },
      { name: "Descanso", seconds: 60, hint: "No fuerces la postura." },
      { name: "Puente de glúteos", seconds: 30, hint: "Movimiento suave." },
      { name: "Vuelta a la calma", seconds: 240, hint: "Caminá suavemente." }
    ]
  },
  {
    name: "Descanso y evaluación",
    tag: "Descanso",
    icon: "⭐",
    duration: "Día tranquilo",
    desc: "Recuperá y observá cómo te sentís. No hace falta realizar pruebas máximas.",
    type: "rest",
    steps: []
  },
  {
    name: "Técnica de media punta",
    tag: "Técnica",
    icon: "🎯",
    duration: "20–25 minutos",
    desc: "Trabajá recepción, giro, conducción y pase, habilidades importantes para tu posición.",
    type: "technical",
    steps: [
      { name: "Calentamiento", seconds: 240, hint: "Movilidad y caminata." },
      { name: "Control orientado", seconds: 180, hint: "Recibí y orientá hacia un espacio." },
      { name: "Giros con pelota", seconds: 180, hint: "Alterná ambos perfiles." },
      { name: "Pases", seconds: 180, hint: "Priorizá precisión." },
      { name: "Conducción", seconds: 180, hint: "Levantá la cabeza mientras conducís." },
      { name: "Vuelta a la calma", seconds: 180, hint: "Caminá suavemente." }
    ]
  },
  {
    name: "Velocidad y coordinación",
    tag: "Entrenamiento",
    icon: "⚡",
    duration: "25 minutos",
    desc: "Aceleraciones progresivas y coordinación, solamente si estás recuperado y sin molestias.",
    type: "speed",
    steps: [
      { name: "Calentamiento", seconds: 300, hint: "Prepará el cuerpo." },
      { name: "Coordinación", seconds: 120, hint: "Pasos cortos y suaves." },
      { name: "Aceleración progresiva", seconds: 10, hint: "Aumentá la velocidad gradualmente." },
      { name: "Descanso", seconds: 90, hint: "Recuperación completa." },
      { name: "Aceleración progresiva", seconds: 10, hint: "Mantené el control." },
      { name: "Descanso", seconds: 90, hint: "No continúes si estás fatigado." },
      { name: "Vuelta a la calma", seconds: 300, hint: "Caminá tranquilamente." }
    ]
  },
  {
    name: "Cierre del primer bloque",
    tag: "Recuperación",
    icon: "🏁",
    duration: "15–20 minutos",
    desc: "Cerrá estos 14 días con movilidad y una revisión de cómo te sentís. El objetivo es construir constancia.",
    type: "recovery",
    steps: [
      { name: "Caminata suave", seconds: 240, hint: "Ritmo cómodo." },
      { name: "Movilidad general", seconds: 240, hint: "Sin forzar ninguna articulación." },
      { name: "Respiración", seconds: 120, hint: "Relajá el cuerpo." }
    ]
  }
];

const defaultState = {
  done: [],
  history: [],
  feel: "",
  start: "",
  meals: [],
  pains: [],
  football: []
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("fit14state") || "{}");
    return { ...defaultState, ...saved };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem("fit14state", JSON.stringify(state));
}

function todayIndex() {
  return Math.min(state.done.length, plan.length - 1);
}

function getCurrentDay() {
  return Math.min(todayIndex(), 13);
}

function getTodayDate() {
  return new Date().toLocaleDateString("es-AR");
}

function getTodayPain() {
  return state.pains.find(item => item.date === getTodayDate());
}

function getTodayFootball() {
  return state.football.filter(item => item.date === getTodayDate());
}

function hasPainWarning() {
  const pain = getTodayPain();
  return pain && pain.intensity >= 2;
}

function hasIntenseFootball() {
  return getTodayFootball().some(item => item.effort >= 4 || item.minutes >= 60);
}

function showTab(tabName) {
  document.querySelectorAll(".tab").forEach(button => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active", page.id === tabName);
  });

  if (tabName === "stats") renderStats();
  if (tabName === "calendar") renderCalendar();
  if (tabName === "food") renderMeals();
  if (tabName === "feeling") renderPains();
}

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => showTab(button.dataset.tab));
});

function renderToday() {
  const index = getCurrentDay();
  const day = plan[index];

  $("#dayPill").textContent = `DÍA ${index + 1} / 14`;
  $("#todayIcon").textContent = day.icon;
  $("#todayTitle").textContent = day.name;
  $("#todayTag").textContent = day.tag.toUpperCase();
  $("#todayDesc").textContent = day.desc;
  $("#todayDuration").textContent = day.duration;

  const progress = Math.round((state.done.length / 14) * 100);
  $("#progressLabel").textContent = `${progress}%`;
  $("#overallProgress").style.width = `${progress}%`;

  $("#todayWorkout").innerHTML = "";

  if (day.steps.length) {
    const heading = document.createElement("h3");
    heading.textContent = "Actividades de hoy";
    $("#todayWorkout").appendChild(heading);

    day.steps.forEach(step => {
      const item = document.createElement("div");
      item.className = "exercise-item";
      item.textContent = `${step.name} · ${formatTime(step.seconds)}`;
      $("#todayWorkout").appendChild(item);
    });
  } else {
    const message = document.createElement("p");
    message.textContent = "Hoy no hay una sesión guiada obligatoria. Priorizá la recuperación.";
    $("#todayWorkout").appendChild(message);
  }

  $("#startSession").disabled = !day.steps.length || hasPainWarning() || hasIntenseFootball();
  $("#startSession").textContent = hasPainWarning()
    ? "Priorizar recuperación"
    : hasIntenseFootball()
      ? "Hoy ya hiciste actividad intensa"
      : day.steps.length ? "Comenzar entrenamiento" : "Día sin sesión guiada";

  $("#completeDay").textContent = state.done.includes(index)
    ? "Día completado"
    : "Marcar día como completado";

  $("#completeDay").disabled = state.done.includes(index);

  renderDailyAdvice();
  renderFoodSuggestions();
}

function renderDailyAdvice() {
  const pain = getTodayPain();

  if (pain) {
    $("#dailyAdvice").textContent =
      `Registraste una molestia en ${pain.zone}. Evitá ejercicios que la provoquen. Si persiste, empeora o es intensa, hablalo con un adulto y consulten a un profesional.`;
    return;
  }

  if (hasIntenseFootball()) {
    $("#dailyAdvice").textContent =
      "Registraste fútbol intenso. Hoy conviene recuperar y no sumar otra sesión exigente.";
    return;
  }

  if (state.feel === "tired") {
    $("#dailyAdvice").textContent =
      "Si estás cansado, reducí la actividad o descansá. La recuperación también forma parte del progreso.";
  } else if (state.feel === "sore") {
    $("#dailyAdvice").textContent =
      "Si sentís molestias, no fuerces la zona. Si hay dolor, evitá la sesión y contáselo a un adulto.";
  } else if (state.feel === "good") {
    $("#dailyAdvice").textContent =
      "¡Bien! Seguí el plan con una intensidad cómoda, cuidando la técnica y escuchando a tu cuerpo.";
  } else {
    $("#dailyAdvice").textContent =
      "Elegí cómo te sentís para recibir una recomendación.";
  }
}

document.querySelectorAll(".feeling").forEach(button => {
  button.addEventListener("click", () => {
    state.feel = button.dataset.feel;
    saveState();

    document.querySelectorAll(".feeling").forEach(item => {
      item.classList.toggle("selected", item === button);
    });

    renderDailyAdvice();
  });
});

$("#completeDay").addEventListener("click", () => {
  const index = getCurrentDay();

  if (state.done.includes(index)) return;

  if (!confirm("¿Querés marcar este día como completado?")) return;

  state.done.push(index);
  state.history.push({
    date: getTodayDate(),
    activity: plan[index].name,
    type: "Plan"
  });

  saveState();
  renderAll();

  alert("¡Día registrado! Seguí priorizando la constancia y la recuperación.");
});

$("#startSession").addEventListener("click", () => {
  if (hasPainWarning()) {
    alert("Registraste una molestia. No comiences una sesión exigente. Si hay dolor, hablalo con un adulto.");
    return;
  }

  if (hasIntenseFootball()) {
    alert("Ya registraste fútbol intenso hoy. Priorizá la recuperación.");
    return;
  }

  const steps = plan[getCurrentDay()].steps;
  if (!steps.length) return;

  startTimer(steps);
});

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

let timerSteps = [];
let timerIndex = 0;
let timerRemaining = 0;
let timerInterval = null;
let timerPaused = false;

function startTimer(steps) {
  timerSteps = steps;
  timerIndex = 0;
  timerPaused = false;

  $("#timerModal").hidden = false;
  $("#pauseTimer").textContent = "Pausar";
  loadTimerStep();
}

function loadTimerStep() {
  if (timerIndex >= timerSteps.length) {
    finishTimer();
    return;
  }

  const step = timerSteps[timerIndex];
  timerRemaining = step.seconds;

  $("#timerTitle").textContent = step.name;
  $("#timerStep").textContent = `Actividad ${timerIndex + 1} de ${timerSteps.length}`;
  $("#timerHint").textContent = step.hint;
  $("#timerDisplay").textContent = formatTime(timerRemaining);
  $("#timerProgress").style.width = "0%";

  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (timerPaused) return;

  timerRemaining--;

  const total = timerSteps[timerIndex].seconds;
  const elapsed = total - timerRemaining;
  const progress = Math.min(100, Math.max(0, elapsed / total * 100));

  $("#timerDisplay").textContent = formatTime(Math.max(0, timerRemaining));
  $("#timerProgress").style.width = `${progress}%`;

  if (timerRemaining <= 0) {
    clearInterval(timerInterval);
    timerIndex++;
    loadTimerStep();
  }
}

$("#pauseTimer").addEventListener("click", () => {
  timerPaused = !timerPaused;
  $("#pauseTimer").textContent = timerPaused ? "Continuar" : "Pausar";
});

$("#nextTimer").addEventListener("click", () => {
  timerIndex++;
  loadTimerStep();
});

$("#closeTimer").addEventListener("click", closeTimer);
$("#timerModal").addEventListener("click", event => {
  if (event.target.id === "timerModal") closeTimer();
});

function closeTimer() {
  clearInterval(timerInterval);
  $("#timerModal").hidden = true;
}

function finishTimer() {
  clearInterval(timerInterval);
  $("#timerTitle").textContent = "¡Sesión terminada!";
  $("#timerStep").textContent = "Completaste la sesión guiada.";
  $("#timerDisplay").textContent = "✓";
  $("#timerHint").textContent = "Hidratate y recuperá tranquilamente.";
  $("#timerProgress").style.width = "100%";
  $("#nextTimer").textContent = "Cerrar";
  $("#nextTimer").onclick = () => {
    $("#nextTimer").onclick = null;
    $("#nextTimer").textContent = "Siguiente";
    closeTimer();
  };
}

function renderCalendar() {
  const grid = $("#calendarGrid");
  grid.innerHTML = "";

  const weekdays = ["S", "D", "L", "M", "X", "J", "V"];

  weekdays.forEach(day => {
    const cell = document.createElement("div");
    cell.className = "calendar-weekday";
    cell.textContent = day;
    grid.appendChild(cell);
  });

  // El programa comienza visualmente en sábado.
  const offset = 6;

  for (let i = 0; i < offset; i++) {
    const blank = document.createElement("div");
    blank.className = "calendar-empty";
    grid.appendChild(blank);
  }

  plan.forEach((day, index) => {
    const cell = document.createElement("button");
    cell.className = "calendar-day";
    cell.type = "button";

    if (state.done.includes(index)) cell.classList.add("completed");
    if (index === getCurrentDay()) cell.classList.add("current");

    cell.innerHTML = `<strong>${index + 1}</strong><span>${day.icon}</span>`;
    cell.title = day.name;

    cell.addEventListener("click", () => {
      alert(`Día ${index + 1}: ${day.name}\n${day.desc}`);
    });

    grid.appendChild(cell);
  });
}

function renderStats() {
  $("#completedStat").textContent = state.done.length;
  $("#footballStat").textContent = state.football.length;

  const footballMinutes = state.football.reduce((sum, item) => sum + item.minutes, 0);
  $("#minutesStat").textContent = footballMinutes;

  let streak = 0;
  for (let i = state.done.length - 1; i >= 0; i--) {
    if (state.done.includes(i)) streak++;
    else break;
  }
  $("#streakStat").textContent = streak;

  const history = $("#historyList");
  history.innerHTML = "";

  const entries = [
    ...state.history.map(item => ({ ...item })),
    ...state.football.map(item => ({
      date: item.date,
      activity: `${item.type} · ${item.minutes} min`,
      type: "Fútbol"
    }))
  ].reverse();

  if (!entries.length) {
    history.textContent = "Todavía no hay actividad registrada.";
    return;
  }

  entries.slice(0, 30).forEach(item => {
    const row = document.createElement("div");
    row.className = "history-item";

    const title = document.createElement("strong");
    title.textContent = item.activity;

    const date = document.createElement("span");
    date.textContent = `${item.type} · ${item.date}`;

    row.append(title, date);
    history.appendChild(row);
  });
}

$("#footballForm").addEventListener("submit", event => {
  event.preventDefault();

  const type = document.querySelector('input[name="footballType"]:checked')?.value || "Partido";
  const minutes = Number($("#footballMinutes").value);
  const effort = Number($("#footballEffort").value);

  if (!Number.isFinite(minutes) || minutes < 1 || minutes > 300) {
    alert("Ingresá una duración válida entre 1 y 300 minutos.");
    return;
  }

  state.football.push({
    type,
    minutes,
    effort,
    date: getTodayDate()
  });

  saveState();

  $("#footballMinutes").value = "";
  $("#footballAdvice").innerHTML = `
    <h3>Actividad registrada</h3>
    <p>Registraste ${minutes} minutos de ${type.toLowerCase()}. ${effort >= 4 || minutes >= 60
      ? "Fue una actividad exigente: priorizá la recuperación y evitá sumar otra sesión intensa."
      : "Ajustá el resto del día según cómo te sientas."}</p>
  `;

  renderAll();
  alert("¡Actividad de fútbol registrada!");
});

const foodIdeas = {
  Desayuno: "Leche o yogur, avena o tostadas, fruta y algún alimento con proteínas.",
  Almuerzo: "Combiná verduras, arroz o pasta, y legumbres, huevo o queso.",
  Merienda: "Yogur o leche con fruta, tostadas o un sándwich.",
  Cena: "Una comida completa con verduras, alguna fuente de proteínas y cereales o tubérculos.",
  Colación: "Fruta, yogur, frutos secos o un sándwich pequeño."
};

function renderFoodSuggestions() {
  const container = $("#foodSuggestions");
  if (!container) return;

  container.innerHTML = "";

  Object.entries(foodIdeas).forEach(([meal, idea]) => {
    const item = document.createElement("div");
    item.className = "food-suggestion";

    const title = document.createElement("strong");
    title.textContent = meal;

    const text = document.createElement("p");
    text.textContent = idea;

    item.append(title, text);
    container.appendChild(item);
  });
}

$("#mealForm").addEventListener("submit", event => {
  event.preventDefault();

  const type = $("#mealType").value;
  const description = $("#mealDescription").value.trim();

  if (!description) return;

  state.meals.push({
    type,
    description,
    date: getTodayDate(),
    timestamp: Date.now()
  });

  saveState();

  $("#mealDescription").value = "";
  $("#mealFeedback").textContent = getMealFeedback(description);

  renderMeals();
});

function getMealFeedback(description) {
  const text = description.toLowerCase();
  const suggestions = [];

  if (/fruta|manzana|banana|naranja|pera|frutilla/.test(text)) {
    suggestions.push("Incluiste fruta, que aporta vitaminas y fibra.");
  }

  if (/huevo|leche|yogur|queso|lenteja|garbanzo|poroto|soja/.test(text)) {
    suggestions.push("Incluiste una fuente de proteínas.");
  }

  if (/arroz|pasta|fideo|pan|avena|papa|batata/.test(text)) {
    suggestions.push("Incluiste alimentos que aportan energía.");
  }

  if (!suggestions.length) {
    suggestions.push("Gracias por registrar tu comida. Podés complementar tus comidas con frutas, verduras y distintas fuentes de proteínas.");
  }

  return suggestions.join(" ") + " Recordá mantener comidas variadas y suficientes para tu crecimiento y actividad.";
}

function renderMeals() {
  const container = $("#mealHistory");
  if (!container) return;

  container.innerHTML = "";

  if (!state.meals.length) {
    container.textContent = "Todavía no hay comidas registradas.";
    return;
  }

  [...state.meals].reverse().slice(0, 30).forEach(meal => {
    const item = document.createElement("div");
    item.className = "history-item";

    const title = document.createElement("strong");
    title.textContent = meal.type;

    const description = document.createElement("p");
    description.textContent = meal.description;

    const date = document.createElement("span");
    date.textContent = meal.date;

    item.append(title, description, date);
    container.appendChild(item);
  });
}

$("#painIntensity").addEventListener("input", () => {
  $("#painIntensityValue").textContent = $("#painIntensity").value;
});

$("#painForm").addEventListener("submit", event => {
  event.preventDefault();

  const pain = {
    zone: $("#painZone").value,
    type: $("#painType").value,
    intensity: Number($("#painIntensity").value),
    when: $("#painWhen").value,
    notes: $("#painNotes").value.trim(),
    date: getTodayDate()
  };

  if (!pain.zone || !pain.type || !pain.when) {
    alert("Completá los campos obligatorios.");
    return;
  }

  state.pains.push(pain);
  saveState();

  $("#painNotes").value = "";
  $("#painAdvice").textContent = pain.intensity >= 3
    ? "La molestia que registraste merece atención. No realices ejercicios que la provoquen. Contáselo a un adulto y consulten a un profesional, especialmente si persiste o empeora."
    : "Evitá los movimientos que generen molestias. Observá cómo evoluciona y contáselo a un adulto si continúa o empeora.";

  renderPains();
  renderToday();
});

function renderPains() {
  const container = $("#painHistory");
  if (!container) return;

  container.innerHTML = "";

  if (!state.pains.length) {
    container.textContent = "Todavía no hay registros.";
    return;
  }

  [...state.pains].reverse().slice(0, 30).forEach(pain => {
    const item = document.createElement("div");
    item.className = "history-item";

    const title = document.createElement("strong");
    title.textContent = `${pain.zone} · ${pain.type}`;

    const description = document.createElement("p");
    description.textContent = `Intensidad: ${pain.intensity}/5 · ${pain.when}`;

    const date = document.createElement("span");
    date.textContent = `${pain.date}${pain.notes ? " · " + pain.notes : ""}`;

    item.append(title, description, date);
    container.appendChild(item);
  });
}

$("#resetData").addEventListener("click", () => {
  const accepted = confirm("¿Seguro que querés borrar todo tu progreso, comidas y registros de molestias? Esta acción no se puede deshacer.");

  if (!accepted) return;

  localStorage.removeItem("fit14state");
  state = { ...defaultState, done: [], history: [], meals: [], pains: [], football: [] };

  saveState();
  renderAll();
  showTab("today");
});

function renderAll() {
  renderToday();
  renderCalendar();
  renderStats();
  renderMeals();
  renderPains();
}

let installPrompt = null;

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  $("#installBtn").hidden = false;
});

$("#installBtn").addEventListener("click", async () => {
  if (!installPrompt) return;

  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  $("#installBtn").hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(error => {
      console.error("No se pudo registrar el service worker:", error);
    });
  });
}

renderAll();
