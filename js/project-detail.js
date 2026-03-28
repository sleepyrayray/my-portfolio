const projectOverlay = document.querySelector(".project-detail-overlay");
const overlayOpenButton = document.querySelector("[data-project-overlay-open]");
const overlayCloseButtons = document.querySelectorAll("[data-project-overlay-close]");

function setProjectOverlayState(isOpen) {
  if (!projectOverlay || !overlayOpenButton) {
    return;
  }

  projectOverlay.hidden = !isOpen;
  projectOverlay.classList.toggle("is-visible", isOpen);
  overlayOpenButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("has-project-overlay", isOpen);
}

if (projectOverlay && overlayOpenButton) {
  overlayOpenButton.addEventListener("click", function () {
    setProjectOverlayState(true);
  });

  overlayCloseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setProjectOverlayState(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !projectOverlay.hidden) {
      setProjectOverlayState(false);
    }
  });
}
