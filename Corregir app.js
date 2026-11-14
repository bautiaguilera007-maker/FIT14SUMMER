
const $ = s => document.querySelector(s);

const plan = [
  {name:"Educación Física / recuperación",tag:"Suave",icon:"🏫",duration:"Actividad escolar · sin carga extra",desc:"La clase de Educación Física cuenta como actividad. No agregues otra sesión intensa.",type:"rest",steps:[]},
  {name:"Técnica de fútbol opcional",tag:"Opcional",icon:"⚽",duration:"15–20 min",desc:"Si tenés tiempo y estás recuperado, practicá técnica suave. Si no, descansá.",type:"tech",steps:[["Calentamiento","Marcha activa + movilidad de tobillos y cadera",60],["Conducción","Conducí suave con ambos pies",180],["Cambios de dirección","Giros amplios y controlados",120],["Pases","Pases cortos contra una pared, si es seguro",180],["Vuelta a la calma","Caminata y respiración tranquila",120]]},
  {name:"Recuperación",tag:"Descanso",icon:"🌿",duration:"Descanso · 5–8 min opcionales",desc:"Día con contraturno. Priorizá descanso; movilidad solo si te hace bien.",type:"rest",steps:[]},
  {name:"Movilidad suave",tag:"Suave",icon:"🧘",duration:"5–8 min opcionales",desc:"Sin entrenamiento exigente. Movete suavemente si estás rígido.",type:"mobility",steps:[["Movilidad de hombros","Círculos suaves de brazos",30],["Movilidad de cadera","Círculos controlados de cadera",30],["Tobillos","Círculos de tobillo, ambos lados",30],["Respiración","Respirá lento y relajá",60]]},
  {name:"Velocidad y coordinación",tag:"Principal",icon:"⚡",duration:"20–25 min",desc:"Solo si estás descansado, sin dolor y tenés un espacio seguro. Aceleraciones cortas, sin competir contra el cansancio.",type:"speed",steps:[["Calentamiento","Marcha activa y movilidad",90],["Activación","Rodillas arriba suave y talones a glúteos",60],["Aceleraciones","4 × 10 m progresivas; descansá 60–90 s entre cada una",240],["Coordinación","Desplazamientos laterales suaves",120],["Vuelta a la calma","Caminá y respirás tranquilo",120]]},
  {name:"Fuerza general",tag:"Principal",icon:"💪",duration:"20–25 min",desc:"Fuerza básica con técnica cómoda, sin llegar al fallo. Si tenés agujetas o jugaste intenso, pasá a recuperación.",type:"strength",steps:[["Calentamiento","Marcha activa + movilidad",120],["Sentadillas","2 × 8–10 repeticiones, cómodas",120],["Flexiones","2 × 6–10; apoyá rodillas si hace falta",120],["Remo / dominadas asistidas","2 × 3–5 solo si podés hacerlo con control y asistencia segura",120],["Puente de glúteos","2 × 10 repeticiones",90],["Plancha","2 × 15–20 segundos",90],["Vuelta a la calma","Caminata suave y estiramientos breves",180]]},
  {name:"Recuperación",tag:"Descanso",icon:"🌤️",duration:"Descanso",desc:"Descanso o paseo suave. No necesitás entrenar todos los días.",type:"rest",steps:[]},
  {name:"Educación Física / recuperación",tag:"Suave",icon:"🏫",duration:"Actividad escolar · sin carga extra",desc:"Contá Educación Física como actividad. No sumes una sesión intensa.",type:"rest",steps:[]},
  {name:"Técnica de fútbol opcional",tag:"Opcional",icon:"⚽",duration:"15–20 min",desc:"Práctica técnica ligera si estás recuperado. No hagas series intensas si jugaste recientemente.",type:"tech",steps:[["Calentamiento","Marcha activa + movilidad",60],["Conducción","Toques suaves con ambos pies",180],["Control orientado","Controlá y salí hacia un lado",180],["Pases","Pases cortos y precisos",180],["Vuelta a la calma","Caminata tranquila",120]]},
  {name:"Recuperación",tag:"Descanso",icon:"🌿",duration:"Descanso",desc:"Día ocupado. Priorizá sueño, comida e hidratación.",type:"rest",steps:[]},
  {name:"Movilidad suave",tag:"Suave",icon:"🧘",duration:"5–8 min opcionales",desc:"Movilidad cómoda, sin forzar rangos ni buscar dolor.",type:"mobility",steps:[["Hombros","Círculos suaves",30],["Cadera","Movimientos controlados",30],["Tobillos","Movilidad de tobillo",30],["Respiración","Respiración tranquila",60]]},
  {name:"Velocidad y coordinación",tag:"Principal",icon:"⚡",duration:"20–25 min",desc:"Repetí la sesión solo si estás recuperado. No aumentes el número de aceleraciones por tu cuenta.",type:"speed",steps:[["Calentamiento","Marcha activa y movilidad",90],["Activación","Rodillas arriba suave",60],["Aceleraciones","4 × 10 m progresivas con descanso completo",240],["Coordinación","Desplazamientos laterales controlados",120],["Vuelta a la calma","Caminata tranquila",120]]},
  {name:"Fuerza general",tag:"Principal",icon:"💪",duration:"20–25 min",desc:"Mantené la misma cantidad de series; buscá mejor control, no más carga. Si estás cansado, descansá.",type:"strength",steps:[["Calentamiento","Marcha activa + movilidad",120],["Sentadillas","2 × 8–10 repeticiones",120],["Flexiones","2 × 6–10 repeticiones cómodas",120],["Remo / dominadas asistidas","2 × 3–5 con control y asistencia segura",120],["Puente de glúteos","2 × 10 repeticiones",90],["Plancha","2 × 15–20 segundos",90],["Vuelta a la calma","Caminata y estiramientos breves",180]]},
  {name:"Recuperación y revisión",tag:"Suave",icon:"🌤️",duration:"5–10 min opcionales",desc:"Cerrá las dos semanas descansando y revisando cómo te sentiste. No hagas una prueba máxima.",type:"rest",steps:[]}
];

const state = JSON.parse(localStorage.getItem("fit14state")||'{"done":[],"history":[],"feel":{},"start":null}');
let selectedDay = 0, currentSteps=[], stepIndex=0, seconds=0, interval=null, paused=false, deferredPrompt=null;

const save=()=>localStorage.setItem("fit14state",JSON.stringify(state));
const todayIndex=()=>{if(!state.start)return 0;return Math.max(0,Math.min(13,Math.floor((Date.now()-state.start)/86400000)))};

function setTab(id){
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===id));
  document.querySelectorAll(".panel").forEach(p=>p.classList.toggle("active",p.id===id));
}

document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>setTab(b.dataset.tab)));

function renderDay(i){
  selectedDay=i;
  const d=plan[i];
  $("#dayPill").textContent=`Día ${i+1} de 14`;
  $("#todayTitle").textContent=`Día ${i+1} · ${d.name}`;
  $("#todayTag").textContent=d.tag;
  $("#todayIcon").textContent=d.icon;
  $("#todayWorkout").textContent=d.name;
  $("#todayDesc").textContent=d.desc;
  $("#todayDuration").textContent=d.duration;

  const steps=d.steps;
  let html="";

  if(d.type==="rest"){
    html='<p class="muted">Hoy no hay una sesión exigente programada. El descanso también forma parte del entrenamiento.</p>';
  } else {
    html='<div class="warmup-title">Antes: calentamiento dinámico</div><ul class="exercise-list"><li>Marcha activa — 1 minuto</li><li>Círculos de brazos y movilidad de cadera/tobillos — 1 minuto</li><li>Movimientos progresivos específicos de la sesión — 2 minutos</li></ul><div class="warmup-title">Sesión</div><ul class="exercise-list">'+steps.map(s=>`<li><b>${s[0]}:</b> ${s[1]}</li>`).join("")+'</ul><div class="warmup-title">Después: estiramientos suaves</div><ul class="exercise-list"><li>Cuádriceps — 20 s por lado</li><li>Parte posterior de piernas — 20 s por lado</li><li>Gemelos — 20 s por lado</li><li>Hombros — 20 s por lado</li></ul>';
  }

  $("#sessionContent").innerHTML=html;
  $("#startSession").disabled=steps.length===0;
  $("#startSession").textContent=steps.length?"Comenzar sesión guiada":"Hoy no hay sesión exigente";
  $("#completeDay").textContent=state.done.includes(i)?"Día realizado ✓":"Marcar día como realizado";

  const feel=state.feel[i];
  document.querySelectorAll(".feeling").forEach(b=>b.classList.toggle("selected",b.dataset.feel===feel));

  updateAdvice();
  renderCalendar();
  renderStats();
}

function updateAdvice(){
  const f=state.feel[selectedDay];
  const d=plan[selectedDay];
  let msg="Elegí cómo te sentís para ver tu recomendación.";

  if(f==="good")msg=d.type==="rest"?"Aunque te sientas bien, hoy está previsto recuperar. Si querés moverte, elegí una caminata suave.":"Podés hacer la sesión prevista a intensidad cómoda, siempre que no hayas jugado fuerte recientemente.";
  if(f==="tired")msg="Hoy reducí la sesión o descansá. No intentes compensar mañana.";
  if(f==="sore")msg="No hagas la sesión si hay dolor. Avisale a un adulto y consultá a un profesional si el dolor persiste o es importante.";

  $("#dailyAdvice").textContent=msg;
}

document.querySelectorAll(".feeling").forEach(b=>b.addEventListener("click",()=>{
  state.feel[selectedDay]=b.dataset.feel;
  save();
  renderDay(selectedDay);
}));

function renderCalendar(){
  const grid=$("#calendarGrid");
  grid.innerHTML="";
  plan.forEach((d,i)=>{
    const b=document.createElement("button");
    b.className="day-card"+(i===selectedDay?" current":"")+(state.done.includes(i)?" done":"");
    b.innerHTML=`<strong>DÍA ${i+1}${state.done.includes(i)?" · ✓":""}</strong><span>${d.icon} ${d.name}</span><small>${d.duration}</small>`;
    b.onclick=()=>{renderDay(i);setTab("today")};
    grid.appendChild(b);
  });
  const done=state.done.length;
  $("#overallProgress").style.width=(done/14*100)+"%";
  $("#progressLabel").textContent=`${done} de 14 días completados`;
}

$("#completeDay").addEventListener("click",()=>{
  if(!state.done.includes(selectedDay))state.done.push(selectedDay);
  save();
  renderDay(selectedDay);
});

function beginSession(){
  currentSteps=plan[selectedDay].steps.map(x=>({name:x[0],hint:x[1],duration:x[2]}));
  if(!currentSteps.length)return;
  stepIndex=0;
  paused=false;
  $("#timerModal").classList.add("open");
  $("#timerModal").setAttribute("aria-hidden","false");
  showStep();
}

function showStep(){
  clearInterval(interval);
  if(stepIndex>=currentSteps.length){
    $("#timerStep").textContent="¡Sesión terminada!";
    $("#timerDisplay").textContent="✓";
    $("#timerHint").textContent="Hacé la vuelta a la calma si todavía no la completaste.";
    $("#nextTimer").textContent="Finalizar";
    $("#pauseTimer").disabled=true;
    return;
  }

  const s=currentSteps[stepIndex];
  seconds=s.duration;
  $("#timerTitle").textContent=plan[selectedDay].name;
  $("#timerStep").textContent=`${stepIndex+1} de ${currentSteps.length} · ${s.name}`;
  $("#timerDisplay").textContent=fmt(seconds);
  $("#timerHint").textContent=s.hint;
  $("#nextTimer").textContent="Siguiente";
  $("#pauseTimer").disabled=false;
  tick();
}

function fmt(n){
  return String(Math.floor(n/60)).padStart(2,"0")+":"+String(n%60).padStart(2,"0");
}

function tick(){
  clearInterval(interval);
  interval=setInterval(()=>{
    if(paused)return;
    if(seconds>0){
      seconds--;
      $("#timerDisplay").textContent=fmt(seconds);
    }else{
      clearInterval(interval);
      $("#timerHint").textContent="Tiempo cumplido. Pasá al siguiente paso cuando estés listo.";
    }
  },1000);
}

$("#startSession").addEventListener("click",beginSession);

$("#nextTimer").addEventListener("click",()=>{
  if(stepIndex>=currentSteps.length){
    finishSession();
    return;
  }
  stepIndex++;
  showStep();
});

$("#pauseTimer").addEventListener("click",()=>{
  paused=!paused;
  $("#pauseTimer").textContent=paused?"Continuar":"Pausar";
});

function finishSession(){
  clearInterval(interval);
  $("#timerModal").classList.remove("open");
  $("#timerModal").setAttribute("aria-hidden","true");
  state.history.unshift({type:"Plan",name:plan[selectedDay].name,minutes:plan[selectedDay].steps.reduce((a,s)=>a+s[2],0)/60,date:new Date().toLocaleString("es-AR")});
  if(!state.done.includes(selectedDay))state.done.push(selectedDay);
  save();
  renderDay(selectedDay);
}

$("#closeTimer").addEventListener("click",()=>{
  clearInterval(interval);
  $("#timerModal").classList.remove("open");
  $("#timerModal").setAttribute("aria-hidden","true");
});

$("#logFootball").addEventListener("click",()=>{
  const type=document.querySelector('input[name="footballType"]:checked').value;
  const mins=Math.max(5,Math.min(180,Number($("#footballMinutes").value)||20));
  const effort=$("#footballEffort").value;
  const name=type==="game"?"Partido / fútbol intenso":type==="light"?"Fútbol suave":"Técnica individual";

  state.history.unshift({type:"Fútbol",name,minutes:mins,effort,date:new Date().toLocaleString("es-AR")});

  if(effort==="hard"||type==="game"){
    state.feel[selectedDay]="tired";
  }

  save();
  renderDay(selectedDay);
  renderStats();
  alert("Fútbol registrado. Si fue intenso, evitá sumar velocidad o fuerza hoy y priorizá la recuperación.");
});

function renderStats(){
  const h=state.history;
  $("#completedStat").textContent=state.done.length;
  $("#footballStat").textContent=h.filter(x=>x.type==="Fútbol").length;
  $("#minutesStat").textContent=Math.round(h.reduce((a,x)=>a+(x.minutes||0),0));
  $("#streakStat").textContent=state.done.length?Math.min(state.done.length,14):0;
  $("#historyList").innerHTML=h.length?h.slice(0,8).map(x=>`<div class="history-item"><b>${x.name}</b> · ${Math.round(x.minutes)} min<small>${x.type} · ${x.date}</small></div>`).join(""):"Todavía no hay sesiones registradas.";
}

$("#resetData").addEventListener("click",()=>{
  if(confirm("¿Seguro que querés borrar el progreso guardado en este dispositivo?")){
    localStorage.removeItem("fit14state");
    location.reload();
  }
});

if(!state.start){
  state.start=Date.now();
  save();
}

selectedDay=todayIndex();
renderDay(selectedDay);
renderStats();

window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();
  deferredPrompt=e;
  $("#installBtn").hidden=false;
});

$("#installBtn").addEventListener("click",async()=>{
  if(!deferredPrompt)return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null;
  $("#installBtn").hidden=true;
});

if("serviceWorker" in navigator && location.protocol.startsWith("http")){
  navigator.serviceWorker.register("./sw.js").catch(()=>{});
}
