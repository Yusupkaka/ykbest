// Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
  dropdownMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  dropdownMenu.style.display = "none";
});

// Search Function
function searchPage() {
  const input = document.getElementById("pageSearch").value.toLowerCase().trim();

  switch (input) {
    case "home":
      window.location.href = "#home";
      break;
    case "about":
      window.location.href = "#about";
      break;
    case "projects":
      window.location.href = "#projects";
      break;
    case "service":
    case "services":
      window.location.href = "#services";
      break;
    case "resume":
    case "cv":
      window.location.href = "resume/yusuf_adamu_resume.pdf";
      break;
    case "blogs":
    case "blog":
      window.location.href = "#blogs";
      break;
    case "contact":
      window.location.href = "#contact";
      break;
    default:
      alert("Page not found. Try: about, blogs, contact, etc.");
  }
}

<script>
  // TIME DISPLAY
  function updateTime() {
    const timeBox = document.getElementById("timeBox");
    const now = new Date();
    const time = now.toLocaleTimeString();
    timeBox.textContent = time;
  }
  setInterval(updateTime, 1000);
  updateTime();

  // DARK/LIGHT TOGGLE
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
</script>