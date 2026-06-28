# ⛅ Skyyy — Live Weather App
### Prodesk IT | Frontend Internship | Sprint 3

A cinematic, real-time weather web application built with vanilla HTML, CSS, and JavaScript. Skyyy fetches live weather data from the OpenWeatherMap API and renders it with dynamic sky animations that react to actual weather conditions.

🔗 **Live Demo:** [https://prodesk-sprint-3.vercel.app/](https://prodesk-sprint-3.vercel.app/)
<img width="1917" height="1151" alt="Screenshot 2026-06-28 210916" src="https://github.com/user-attachments/assets/7da7543f-8fe9-4df9-94f0-cfc15cc6b7a8" />


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
