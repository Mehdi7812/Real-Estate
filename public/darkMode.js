// document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
const sun = "/sun.svg";
const moon = "/moon.svg";


var theme = "dark";
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
    // root.style.setProperty(
    //   "--bs-dark",
    //   "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    // );
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }
  function setDark() {
    // root.style.setProperty("--bs-dark", "#212529");
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
  }

  function setWithApi (theme) {
    console.log(theme);
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

  