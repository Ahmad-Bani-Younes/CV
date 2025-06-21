// Typing effect
const typingText = "Full Stack Developer | ASP.NET | Angular | SQL Server";
let i = 0;
function type() {
  if (i < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();

// Dark mode
document.getElementById("toggle-dark").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Form message (fake handling)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-message").style.display = "block";
  this.reset();
});
