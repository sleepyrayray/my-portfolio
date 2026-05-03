const projectOverlay = document.querySelector(".project-detail-overlay");
const projectOverlayTrigger = document.querySelector("[data-project-overlay-open]");
const projectOverlayCloseControls = document.querySelectorAll("[data-project-overlay-close]");
const projectFigures = document.querySelectorAll(".project-detail__figure");

function setProjectOverlayState(isOpen) {
  if (!projectOverlay || !projectOverlayTrigger) {
    return;
  }

  projectOverlay.hidden = !isOpen;
  projectOverlay.classList.toggle("is-visible", isOpen);
  projectOverlayTrigger.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("has-project-overlay", isOpen);
}

function lockFigureInteraction(figure) {
  const image = figure.querySelector("img");

  if (image) {
    image.setAttribute("draggable", "false");
  }

  figure.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  figure.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
}

function initializeProjectOverlay() {
  if (!projectOverlay || !projectOverlayTrigger) {
    return;
  }

  projectOverlayTrigger.addEventListener("click", function () {
    setProjectOverlayState(true);
  });

  projectOverlayCloseControls.forEach(function (control) {
    control.addEventListener("click", function () {
      setProjectOverlayState(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !projectOverlay.hidden) {
      setProjectOverlayState(false);
    }
  });
}

initializeProjectOverlay();
projectFigures.forEach(lockFigureInteraction);
