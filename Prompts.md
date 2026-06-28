# 🤖 AI Prompts Log — Sprint 3: Weather-Cast (Skyyy)
**Intern:** Arpit
**Sprint:** 3 — Live API Integration
**Tool Used:** Claude (Anthropic)

---

> This document logs AI prompts used during the development of Skyyy to speed up implementation, get boilerplate code, and clarify concepts during the build.

---

### Prompt 1
> "What is an API and how does it work in the context of a weather app? Just give me a quick explanation"

---

### Prompt 2
> "What is the DOM in JavaScript? Like when people say 'inject into the DOM' what does that actually mean and how do you do it?"

---

### Prompt 3
> "What is async/await in JavaScript and why do people use it instead of .then()? Give me a quick example with fetch"

---

### Prompt 4
> "Write me a JavaScript function that fetches live weather data from OpenWeatherMap for a hardcoded city 'London'. API key is stored as a const at the top. Use async/await. The base URL is `https://api.openweathermap.org/data/2.5/weather`. I want it to parse the JSON and log temperature, condition, and humidity"

---

### Prompt 5
> "Now extend that function to inject those values into the DOM. I have three elements with IDs: `temperature`, `condition`, `humidity`. Also pull the weather icon from `data.weather[0].icon` and set it as the src of an img tag with id `wx-icon`. The icon URL format is `https://openweathermap.org/img/wn/{icon}@2x.png`"

---

### Prompt 6
> "Add a search bar and Search button to my weather app. When the user types a city and hits Search or presses Enter, the function should rebuild the API URL dynamically with that city name, fetch fresh data, and update all the DOM elements. Wrap everything in try/catch. If API returns 404, show 'City not found. Please try again.' in a div with id `error-msg`"

---

### Prompt 7
> "What is debouncing in JavaScript? And write me a debounced city autocomplete feature using the OpenWeatherMap Geocoding API endpoint `https://api.openweathermap.org/geo/1.0/direct`. As the user types, after 120ms of no input, fetch up to 5 suggestions and display them in a dropdown div with id `suggestions`. Each item should show city name, state, and country. Clicking one should fill the input and trigger the weather fetch"

---

### Prompt 8
> "Write me the complete CSS for a glassmorphism weather card. I want semi-transparent frosted glass effect, rounded corners, a blurred background. Also give me a stats grid with 3 equal columns for humidity, feels like, and wind. All text should be white. Use CSS variables for the white opacity levels"

---

### Prompt 9
> "Write me CSS animated clouds that drift across the screen from left to right. I want 5 clouds of different sizes positioned at different heights. Make them using pure CSS shapes with border-radius and ::before ::after pseudo elements, no images. Give them different animation durations so they move at different speeds like a real sky"

---

### Prompt 10
> "Write me a JavaScript function `setSky(condition, id)` that takes the weather condition string and OWM weather id and updates the background gradient and triggers different particle animations. Conditions to handle: clear, clouds, rain, drizzle, thunderstorm, snow, mist/fog. For rain generate 140 raindrop divs dynamically with random positions, heights, speeds. For thunderstorm add rain + lightning bolt divs. For snow generate 90 snowflake divs. Each should use CSS classes drop, flake, bolt with existing keyframe animations"

---

### Prompt 11
> "Write me a cinematic splash screen in CSS and JS. A big icon should appear centered on screen, stay for about 1.5 seconds, then animate — shrinking down to tiny and flying upward off screen. At the same time the main app content should slide up from the bottom and fade in. Use cubic-bezier easing. After the splash is done remove it from view with a .done class"

---

### Prompt 12
> "Write the CSS for diagonal falling rain animation. The rain container should be slightly rotated to look like wind-blown rain. Each raindrop should be a thin vertical element with a gradient from transparent to light blue. Animate them falling from top to bottom with randomised duration, delay, and opacity"

---

### Prompt 13
> "Write me CSS keyframe animations for: 1) Lightning bolt flash — should flicker on and off briefly like real lightning with irregular timing. 2) Mist layer — a blurred ellipse at the bottom that slowly drifts left and right. 3) Snowflakes — should drift downward with slight sideways movement to simulate wind"

---

### Prompt 14
> "Refactor my entire app.js to be as compact as possible without removing any functionality. Use a `const $ = id => document.getElementById(id)` shortcut, combine related DOM references, use Array.from with .join for generating rain/snow/bolt HTML, and keep the whole file under 200 lines"

---

### Prompt 15
> "Write a complete professional README.md for my weather app called Skyyy. Include: project description, live demo link `https://prodesk-sprint-3.vercel.app/`, features list with emojis, tech stack table, folder structure, local setup steps including API key instructions, and a sprint checklist showing Phase 1 and Phase 2 completion. Author is Arpit, GitHub arpit7806"

---
