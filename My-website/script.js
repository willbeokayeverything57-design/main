// Show or hide the navigation menu on small screens.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("show");
});

// Close the mobile menu after choosing a section.
const navLinks = document.querySelectorAll("#mainNav a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("show");
  });
});

// Demonstration feedback form: adds feedback to the page only.
// It does not send information to a server or save it permanently.
const feedbackForm = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("visitorName").value.trim();
  const rating = document.getElementById("rating").value;
  const message = document.getElementById("message").value.trim();

  if (name === "" || rating === "" || message === "") {
    alert("Please complete all fields.");
    return;
  }

  // Create elements safely and display the submitted feedback.
  const item = document.createElement("div");
  item.className = "feedback-item";

  const heading = document.createElement("strong");
  heading.textContent = name + " · " + rating;

  const paragraph = document.createElement("p");
  paragraph.textContent = message;

  item.appendChild(heading);
  item.appendChild(paragraph);

  const emptyMessage = feedbackList.querySelector(".empty-message");
  if (emptyMessage) {
    emptyMessage.remove();
  }

  feedbackList.prepend(item);
  feedbackForm.reset();
});

// The download links are placeholders until you add your own class files.
document.querySelectorAll(".download-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Add your PDF or PPT file to this folder, then update this link's href in index.html.");
    }
  });
});
