let switches = document.getElementsByClassName("switch");

let style = localStorage.getItem("style");

if (style == null) {
  setTheme("light");
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener("click", function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == "normal") {
    document.getElementById("switcher-id").href = "css/styles.css";
  } else if (theme == "sky") {
    document.getElementById("switcher-id").href = "css/sky.css";
  } else if (theme == "purple") {
    document.getElementById("switcher-id").href = "css/purple.css";
  } else if (theme == "dark") {
    document.getElementById("switcher-id").href = "css/dark.css";
  }
  localStorage.setItem("style", theme);
}
