//for date of year that show in footer 
let currentYear = new Date();
document.getElementById("date").innerHTML = currentYear.getFullYear();


//for theme and toggle span between light and moon in button 
let themeButton = document.querySelector("#theme .close");

if (localStorage.getItem("darkMode") === "active") {
  document.body.classList.add("darkMode");
  themeButton.classList.add("darkMode-active")
}

function darkModeActive() {
  document.body.classList.toggle("darkMode");
  if (document.body.classList.contains("darkMode")) {
    localStorage.setItem("darkMode", "active");
    themeButton.classList.add("darkMode-active")
  } else {
    localStorage.removeItem("darkMode");
    themeButton.classList.remove("darkMode-active")
    
  }
}

document.getElementById("theme").addEventListener("click", darkModeActive);

