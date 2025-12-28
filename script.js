// Navbar
const navbarShitTriggerButton = document.getElementById(
  "navbar__sheet-trigger"
);
const navbarNavigation = document.getElementById("navbar__navigation");
const navLinks = document.querySelectorAll(".navbar__link");

console.log(navbarNavigation);
navbarShitTriggerButton.addEventListener("click", () => {
  navbarNavigation.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarNavigation.classList.remove("active");
  });
});

// Tabs
const tabButtons = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

function activateTab(tabName) {
  tabButtons.forEach((item) => {
    if (item.dataset.tab === tabName) {
      item.dataset.active = "true";
    } else {
      item.dataset.active = "false";
    }
  });

  tabContents.forEach((item) => {
    if (item.dataset.tab === tabName) {
      item.dataset.active = "true";
    } else {
      item.dataset.active = "false";
    }
  });
}

tabButtons.forEach((item) => {
  item.addEventListener("click", () => {
    const clickedTab = item.dataset.tab;
    activateTab(clickedTab);
  });
});

// Contact Form Validation
const contactForm = document.getElementById("contact-form");
const feedbackElement = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  feedbackElement.className = "form-feedback";

  if (!name || !email || !message) {
    feedbackElement.textContent = "Please fill in all fields.";
    feedbackElement.classList.add("error");
    return;
  }

  if (!isValidEmail(email)) {
    feedbackElement.textContent = "Please enter a valid email address.";
    feedbackElement.classList.add("error");
    return;
  }

  feedbackElement.textContent =
    "Thanks for reaching out! I’ll get back to you soon 😊";
  feedbackElement.classList.add("success");

  contactForm.reset();
});

function isValidEmail(email) {
  // Regex from: https://colinhacks.com/essays/reasonable-email-regex
  return /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_'+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i.test(
    email
  );
}

// Footer year
document.getElementById("footer-year").textContent = new Date().getFullYear();
