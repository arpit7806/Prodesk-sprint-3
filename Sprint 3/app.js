/* ── CONFIG ── */
const K     = "7f5273c10ab2cc1aecffd0b19f8fdf15";
const W_URL = "https://api.openweathermap.org/data/2.5/weather";
const G_URL = "https://api.openweathermap.org/geo/1.0/direct";

let celsius = true, lastCity = null, timer = null;

/* ── DOM ── */
const $ = id => document.getElementById(id);
const cityIn = $("city-input"), searchBtn = $("search-btn"),
      errEl  = $("error-msg"),  loadEl    = $("loading"),
      card   = $("weather-card"), unitBtn = $("unit-btn"),
      appEl  = $("app"), logo  = $("logo-small"),
      sugg   = $("suggestions");

/* ── SKY ── */
const sky = {
  clouds : [$("c1"),$("c2"),$("c3"),$("c4"),$("c5")],
  rain   : $("rain-wrap"),
  snow   : $("snow-wrap"),
  bolt   : $("bolt-wrap"),
  mist   : $("mist")
};

/* ════════ SPLASH ════════ */
window.addEventListener("load", () => {
  setTimeout(() => {
    $("splash").classList.add("done");
    appEl.classList.add("visible");
    logo.classList.add("show");
    getWeather("London");
  }, 2600);
});

/* ════════ AUTOCOMPLETE ════════ */
cityIn.addEventListener("input", () => {
  clearTimeout(timer);
  const q = cityIn.value.trim();
  if (q.length < 2) { hideSugg(); return; }
  sugg.innerHTML = '<div class="si si-loading">Searching...</div>';
  sugg.style.display = "block";
  timer = setTimeout(() => getSugg(q), 120);
});

cityIn.addEventListener("keydown", e => {
  if (e.key === "Enter")  { hideSugg(); if (cityIn.value.trim()) getWeather(cityIn.value.trim()); }
  if (e.key === "Escape") hideSugg();
});
document.addEventListener("click", e => { if (!e.target.closest(".search-wrap")) hideSugg(); });

async function getSugg(q) {
  try {
    const r = await fetch(`${G_URL}?q=${encodeURIComponent(q)}&limit=5&appid=${K}`);
    const d = await r.json();
    if (!d.length) { hideSugg(); return; }
    sugg.innerHTML = d.map(c =>
      `<div class="si" onclick="pick('${c.name.replace(/'/g,"\\'")}')">
         <span class="si-city">${c.name}</span>
         <span class="si-country">${c.state ? c.state+", " : ""}${c.country}</span>
       </div>`
    ).join("");
    sugg.style.display = "block";
  } catch { hideSugg(); }
}

function pick(city) { cityIn.value = city; hideSugg(); getWeather(city); }
function hideSugg()  { sugg.style.display = "none"; sugg.innerHTML = ""; }

/* ════════ FETCH WEATHER ════════ */
async function getWeather(city) {
  showLoad(true); hideErr(); card.style.display = "none";
  try {
    const units = celsius ? "metric" : "imperial";
    const url   = W_URL + "?q=" + encodeURIComponent(city) + "&appid=" + K + "&units=" + units;
    const r     = await fetch(url);
    if (!r.ok) throw new Error(r.status === 404 ? "City not found. Please try again." : "Something went wrong. Try again.");
    const d = await r.json();
    lastCity = city;
    render(d);
    setSky(d.weather[0].main.toLowerCase(), d.weather[0].id);
  } catch(e) { showErr(e.message); }
  finally    { showLoad(false); }
}

function render(d) {
  const u = celsius ? "°C" : "°F", su = celsius ? "m/s" : "mph";
  $("city-name").textContent   = d.name;
  $("country-tag").textContent = d.sys?.country ?? "";
  $("temperature").textContent = Math.round(d.main.temp) + u;
  $("condition").textContent   = d.weather[0].description.replace(/\b\w/g, c => c.toUpperCase());
  $("humidity").textContent    = d.main.humidity + "%";
  $("feels-like").textContent  = Math.round(d.main.feels_like) + u;
  $("wind").textContent        = Math.round(d.wind.speed) + " " + su;
  $("wx-icon").src             = "https://openweathermap.org/img/wn/" + d.weather[0].icon + "@2x.png";
  card.style.display = "block";
}

/* ════════ SKY ENGINE ════════ */
function resetSky() {
  sky.clouds.forEach(c => { if (c) c.style.opacity = 0; });
  [sky.rain, sky.snow, sky.bolt].forEach(el => { el.style.display = "none"; el.innerHTML = ""; });
  sky.mist.style.display = "none";
}

function showClouds(opacities) {
  opacities.forEach((o, i) => {
    if (sky.clouds[i]) setTimeout(() => { sky.clouds[i].style.opacity = o; }, i * 120);
  });
}

function makeRain(n) {
  sky.rain.style.display = "block";
  sky.rain.innerHTML = Array.from({length: n}, () =>
    `<div class="drop" style="left:${Math.random()*105}%;height:${12+Math.random()*22}px;` +
    `animation-duration:${0.35+Math.random()*0.5}s;animation-delay:${Math.random()*1.2}s;` +
    `opacity:${0.55+Math.random()*0.35}"></div>`
  ).join("");
}

function makeSnow(n) {
  sky.snow.style.display = "block";
  sky.snow.innerHTML = Array.from({length: n}, () => {
    const s = 4 + Math.random() * 7;
    return `<div class="flake" style="left:${Math.random()*100}%;width:${s}px;height:${s}px;` +
           `animation-duration:${3+Math.random()*5}s;animation-delay:${Math.random()*4}s"></div>`;
  }).join("");
}

function makeBolts() {
  sky.bolt.style.display = "block";
  sky.bolt.innerHTML = Array.from({length: 4}, (_,i) =>
    `<div class="bolt" style="left:${10+Math.random()*75}%;height:${80+Math.random()*110}px;animation-delay:${i*1.4+Math.random()}s"></div>`
  ).join("");
}

function setSky(cond, id) {
  resetSky();
  const b = document.body;
  if (cond.includes("clear")) {
    b.style.background = "linear-gradient(160deg,#0b3d6e 0%,#1565a8 45%,#4aa8e8 100%)";
    showClouds([0.12, 0.08]);

  } else if (cond.includes("cloud") || (id >= 801 && id <= 804)) {
    b.style.background = "linear-gradient(160deg,#263545 0%,#3d5468 50%,#5d7a8c 100%)";
    showClouds([1, 0.95, 0.88, 0.82, 0.75]);

  } else if (cond.includes("drizzle") || (cond.includes("rain") && id < 502)) {
    b.style.background = "linear-gradient(160deg,#161e2a 0%,#243040 50%,#354555 100%)";
    showClouds([0.75, 0.65, 0.8]);
    makeRain(70);

  } else if (cond.includes("rain") || (id >= 500 && id < 600)) {
    b.style.background = "linear-gradient(160deg,#0c1420 0%,#172030 50%,#243040 100%)";
    showClouds([0.65, 0.55, 0.75, 0.6]);
    makeRain(140);

  } else if (cond.includes("thunderstorm") || (id >= 200 && id < 300)) {
    b.style.background = "linear-gradient(160deg,#080d14 0%,#111825 50%,#1c2535 100%)";
    showClouds([0.55, 0.45, 0.65, 0.5]);
    makeRain(160);
    makeBolts();

  } else if (cond.includes("snow") || (id >= 600 && id < 700)) {
    b.style.background = "linear-gradient(160deg,#8aafc8 0%,#b0cade 50%,#cddde8 100%)";
    showClouds([0.5, 0.4, 0.55]);
    makeSnow(90);

  } else if (id >= 700 && id < 800) {
    b.style.background = "linear-gradient(160deg,#3d4f5f 0%,#5a6e7e 50%,#7a8e9e 100%)";
    showClouds([0.4, 0.3, 0.45]);
    sky.mist.style.display = "block";

  } else {
    b.style.background = "linear-gradient(160deg,#0f4c81 0%,#1a78c2 40%,#5bb8f5 100%)";
  }
}

/* ════════ HELPERS ════════ */
function showLoad(s) { loadEl.style.display = s ? "block" : "none"; }
function hideErr()   { errEl.style.display  = "none"; }
function showErr(m)  { errEl.textContent = m; errEl.style.display = "block"; }

searchBtn.addEventListener("click", () => {
  hideSugg();
  const c = cityIn.value.trim();
  if (c) getWeather(c);
});

unitBtn.addEventListener("click", () => {
  celsius = !celsius;
  unitBtn.textContent = celsius ? "Switch to °F" : "Switch to °C";
  if (lastCity) getWeather(lastCity);
});