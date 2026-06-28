# ⛅ Skyyy — Live Weather App
### Prodesk IT | Frontend Internship | Sprint 3

A cinematic, real-time weather web application built with vanilla HTML, CSS, and JavaScript. Skyyy fetches live weather data from the OpenWeatherMap API and renders it with dynamic sky animations that react to actual weather conditions.

🔗 **Live Demo:** [https://prodesk-sprint-3.vercel.app/](https://prodesk-sprint-3.vercel.app/)

---

## 🚀 Features

- 🌍 **Live Weather Data** — Real-time temperature, condition, humidity, feels like & wind speed
- 🔍 **City Autocomplete** — Smart suggestions powered by OWM Geocoding API as you type
- 🎬 **Cinematic Splash Screen** — App icon zooms in and transitions to reveal the UI
- 🌦️ **Dynamic Sky Animations** — Background and particle effects change based on actual weather:
  - ☀️ Clear → bright blue gradient sky
  - ☁️ Cloudy → drifting cloud layers
  - 🌧️ Rain → diagonal falling raindrops
  - ⛈️ Thunderstorm → heavy rain + lightning bolts
  - ❄️ Snow → floating snowflakes
  - 🌫️ Mist/Fog → floating mist layer
- 🌡️ **°C / °F Toggle** — Switch units on the fly
- ⚠️ **Graceful Error Handling** — User-friendly messages for invalid cities or network failures

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (animations, glassmorphism, flexbox, grid) |
| Logic | Vanilla JavaScript (ES6+) |
| API | [OpenWeatherMap](https://openweathermap.org/api) — Current Weather + Geocoding |
| Fonts | Space Grotesk, Syne (Google Fonts) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
skyyy/
├── index.html      # App structure & inline SVG icon
├── style.css       # All styles, animations & sky effects
└── app.js          # API logic, DOM rendering, sky engine
```

---

## ⚙️ Setup & Run Locally

**1. Clone the repo**
```bash
git clone https://github.com/arpit7806/prodesk-sprint-3.git
cd prodesk-sprint-3
```

**2. Get a free API key**
- Sign up at [openweathermap.org](https://openweathermap.org/api)
- Go to **My Profile → API Keys** and copy your key
- Keys activate within ~10 minutes of signup

**3. Add your API key**

Open `app.js` and replace the key on line 2:
```js
const K = "YOUR_API_KEY_HERE";
```

**4. Run locally**

Open `index.html` in VS Code and use the **Live Server** extension, or run:
```bash
python -m http.server 5500
```
Then visit `http://localhost:5500`

---

## ✅ Sprint Checklist

### Phase 1 — Base MVP (P0) ✅
- [x] Registered OpenWeatherMap API key
- [x] Used native `fetch()` API for live data
- [x] Async/Await syntax — zero `.then()` chains
- [x] DOM injection: Temperature, Condition, Humidity
- [x] API key stored as a `const` variable, not inline

### Phase 2 — Dynamic Input & Error Handling ✅
- [x] Search bar + Search button implemented
- [x] API URL dynamically reconstructed per search
- [x] `try/catch` wrapping all fetch logic
- [x] 404 → "City not found. Please try again."
- [x] Dynamic weather icon extracted from API payload

---

## 🔑 API Reference

| Endpoint | Purpose |
|----------|---------|
| `api.openweathermap.org/data/2.5/weather` | Current weather by city |
| `api.openweathermap.org/geo/1.0/direct` | City name autocomplete |

---

## 👨‍💻 Author

**Arpit** — Frontend Intern @ Prodesk IT
GitHub: [@arpit7806](https://github.com/arpit7806)
