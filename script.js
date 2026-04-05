document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.querySelector(".theme-toggle");

  toggleBtn.addEventListener("click", function () {

    // Toggle LIGHT mode (your CSS uses this)
    document.body.classList.toggle("light");

    // Save theme
    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙"; // show dark icon
    } else {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️"; // show light icon
    }

  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "🌙";
  } else {
    toggleBtn.textContent = "☀️";
  }

});
