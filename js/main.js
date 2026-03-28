// Get all navigation buttons and all content sections.
const navButtons = document.querySelectorAll(".nav-button");
const contentSections = document.querySelectorAll(".content-section");
const projectTabButtons = document.querySelectorAll(".project-tab-button");
const projectPanels = document.querySelectorAll(".project-panel");
const galleryButtons = document.querySelectorAll(".gallery-button");
const galleryModal = document.getElementById("gallery-modal");
const galleryModalImage = document.getElementById("gallery-modal-image");
const galleryModalTitle = document.getElementById("gallery-modal-title");
const galleryModalCaption = document.getElementById("gallery-modal-caption");
const galleryCloseButton = document.getElementById("gallery-close-button");
const currentYear = document.getElementById("current-year");
const projectsSection = document.getElementById("projects");
const projectBackButton = document.getElementById("project-back-button");
const archiveGrid = document.querySelector(".archive-grid");
const archiveFigures = document.querySelectorAll(".archive-card__figure");

function setProjectViewState(hasActiveProject) {
  if (projectsSection) {
    projectsSection.classList.toggle("has-active-project", hasActiveProject);
  }
}

// This is the section we want to show first.
const defaultSectionId = "home";

function clearProjectSelection() {
  projectPanels.forEach(function (panel) {
    panel.classList.remove("is-active");
  });

  projectTabButtons.forEach(function (button) {
    button.classList.remove("is-active");
    button.setAttribute("aria-selected", "false");
  });

  setProjectViewState(false);
}

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

  if (sectionId === "projects") {
    clearProjectSelection();
  }
}

// Show one project inside the projects section and hide the others.
function showProject(projectId) {
  projectPanels.forEach(function (panel) {
    const isCurrentProject = panel.id === projectId + "-project";
    panel.classList.toggle("is-active", isCurrentProject);
  });

  projectTabButtons.forEach(function (button) {
    const isCurrentButton = button.dataset.project === projectId;
    button.classList.toggle("is-active", isCurrentButton);
    button.setAttribute("aria-selected", isCurrentButton);
  });

  setProjectViewState(true);
}

// Open the gallery modal with the selected preview information.
function openGalleryModal(button) {
  if (!galleryModal || !galleryModalImage || !galleryModalTitle || !galleryModalCaption) {
    return;
  }

  const previewImage = button.dataset.image;
  const previewAlt = button.dataset.alt;
  const previewTitle = button.dataset.title;
  const previewCaption = button.dataset.caption;

  galleryModalImage.src = previewImage;
  galleryModalImage.alt = previewAlt;
  galleryModalTitle.textContent = previewTitle;
  galleryModalCaption.textContent = previewCaption;

  galleryModal.classList.add("is-visible");
  galleryModal.setAttribute("aria-hidden", "false");
}

// Close the gallery modal.
function closeGalleryModal() {
  if (!galleryModal) {
    return;
  }

  galleryModal.classList.remove("is-visible");
  galleryModal.setAttribute("aria-hidden", "true");
}

// Add a click event to each button.
navButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedSectionId = button.dataset.section;
    showSection(selectedSectionId);
  });
});

// Add a click event to each project switcher button.
projectTabButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedProjectId = button.dataset.project;
    showProject(selectedProjectId);
  });
});

if (projectBackButton) {
  projectBackButton.addEventListener("click", function () {
    clearProjectSelection();

    if (projectTabButtons.length > 0) {
      projectTabButtons[0].focus();
    }
  });
}

if (archiveGrid) {
  const archiveCards = archiveGrid.querySelectorAll(".archive-card");

  if (archiveCards.length % 2 !== 0) {
    const placeholderCard = document.createElement("article");
    placeholderCard.className = "archive-card archive-card--placeholder";
    placeholderCard.setAttribute("aria-hidden", "true");
    archiveGrid.appendChild(placeholderCard);
  }
}

archiveFigures.forEach(function (figure) {
  figure.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  figure.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
});

// Add a click event to each gallery thumbnail.
galleryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    openGalleryModal(button);
  });
});

// Close the modal when the close button is clicked.
if (galleryCloseButton) {
  galleryCloseButton.addEventListener("click", function () {
    closeGalleryModal();
  });
}

// Close the modal when the dark backdrop is clicked.
if (galleryModal) {
  galleryModal.addEventListener("click", function (event) {
    if (event.target.dataset.closeModal === "true") {
      closeGalleryModal();
    }
  });
}

// Close the modal when the Escape key is pressed.
document.addEventListener("keydown", function (event) {
  if (galleryModal && event.key === "Escape" && galleryModal.classList.contains("is-visible")) {
    closeGalleryModal();
  }
});

// Show the default section when the page first loads.
showSection(defaultSectionId);

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
