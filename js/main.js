// Get all navigation buttons and all content sections.
const navButtons = document.querySelectorAll(".nav-button");
const contentSections = document.querySelectorAll(".content-section");

// This is the section we want to show first.
const defaultSectionId = "home";

// Show one section and hide the others.
function showSection(sectionId) {
  contentSections.forEach(function (section) {
    const isCurrentSection = section.id === sectionId;
    section.classList.toggle("is-active", isCurrentSection);
  });

  navButtons.forEach(function (button) {
    const isCurrentButton = button.dataset.section === sectionId;
    button.classList.toggle("is-active", isCurrentButton);
    button.setAttribute("aria-selected", isCurrentButton);
  });
}

// Add a click event to each button.
navButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedSectionId = button.dataset.section;
    showSection(selectedSectionId);
  });
});

// Show the default section when the page first loads.
showSection(defaultSectionId);
