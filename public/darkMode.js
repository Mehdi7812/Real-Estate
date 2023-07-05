// document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
const sun = "/sun.svg";
const moon = "/moon.svg";

let theme = "dark";
// const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}

if(localStorage.getItem('darkMode') == 'true') {
  document.documentElement.classList.remove('dark')
  setDark()
  theme = "dark";
} else {
  document.documentElement.classList.add('dark')
  setLight()
  theme = "light";
}

function setLight() {
  container.classList.remove("shadow-dark");
  // themeIcon.classList.add("change");
  themeIcon.setAttribute('src', sun)
  // themeIcon.src = sun;
  // setTimeout(() => {
    container.classList.add("shadow-light");
    // themeIcon.classList.remove("change");
  // }, 100);
}
function setDark() {
  // root.style.setProperty("--bs-dark", "#212529");
  container.classList.remove("shadow-light");
  // themeIcon.classList.add("change");
  themeIcon.setAttribute('src', moon)
  // themeIcon.src = moon;
  // setTimeout(() => {
    container.classList.add("shadow-dark");
    // themeIcon.classList.remove("change");
  // }, 100);
}

function setWithApi (theme) {
  if(theme == 'سفید') {
    document.documentElement.classList.add('dark')
    setLight()
    theme = "light";
    localStorage.setItem('darkMode', 'false')
  } else if(theme == 'سیاه') {
    document.documentElement.classList.remove('dark')
    setDark()
    theme = "dark";
    localStorage.setItem('darkMode', 'true')
  }
}
