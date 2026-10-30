const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const darkModeOn = document.body.classList.contains("dark-mode");
  themeToggle.textContent = darkModeOn ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    darkModeOn ? "Switch to light theme" : "Switch to dark theme"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();

// Demo form: validates fields and displays a message, but does not send an email.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const visitorName = document.getElementById("name").value.trim();
  formMessage.textContent = `Thanks, ${visitorName}! Your message is ready, but email sending needs a backend or form service.`;
  contactForm.reset();
});
