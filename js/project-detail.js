const projectOverlay = document.querySelector(".project-detail-overlay");
const projectOverlayTrigger = document.querySelector("[data-project-overlay-open]");
const projectOverlayCloseControls = document.querySelectorAll("[data-project-overlay-close]");
const projectFigures = document.querySelectorAll(".project-detail__figure");
let imageOverlay = null;
let imageOverlayImg = null;
let imageOverlayCaption = null;
let imageOverlayCloseButton = null;
let previousImageTrigger = null;

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

function renderImageOverlay() {
  if (imageOverlay || !projectFigures.length) {
    return;
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    '<div class="project-image-overlay" id="project-image-overlay" hidden>' +
      '<div class="project-image-overlay__backdrop" data-project-image-close></div>' +
      '<div class="project-image-overlay__panel" role="dialog" aria-modal="true" aria-label="Project image preview">' +
        '<button class="project-image-overlay__close" type="button" aria-label="Close" data-project-image-close>X</button>' +
        '<figure class="project-image-overlay__media">' +
          '<div class="project-image-overlay__frame">' +
            '<img class="project-image-overlay__image" src="" alt="" draggable="false" />' +
            '<span class="project-image-overlay__watermark" aria-hidden="true"></span>' +
          "</div>" +
          '<figcaption class="project-image-overlay__caption"></figcaption>' +
        "</figure>" +
      "</div>" +
    "</div>"
  );

  imageOverlay = document.querySelector(".project-image-overlay");
  imageOverlayImg = imageOverlay ? imageOverlay.querySelector(".project-image-overlay__image") : null;
  imageOverlayCaption = imageOverlay ? imageOverlay.querySelector(".project-image-overlay__caption") : null;
  imageOverlayCloseButton = imageOverlay ? imageOverlay.querySelector(".project-image-overlay__close") : null;
}

function setImageOverlayState(isOpen, image, trigger) {
  if (!imageOverlay || !imageOverlayImg || !imageOverlayCaption || !imageOverlayCloseButton) {
    return;
  }

  if (isOpen && image) {
    previousImageTrigger = trigger || document.activeElement;
    imageOverlayImg.src = image.currentSrc || image.src;
    imageOverlayImg.alt = image.alt || "";
    imageOverlayCaption.textContent = image.dataset.caption || image.alt || "";
  }

  imageOverlay.hidden = !isOpen;
  imageOverlay.classList.toggle("is-visible", isOpen);
  document.body.classList.toggle("has-project-image-overlay", isOpen);

  if (isOpen) {
    imageOverlayCloseButton.focus({ preventScroll: true });
    return;
  }

  imageOverlayImg.removeAttribute("src");
  imageOverlayImg.alt = "";
  imageOverlayCaption.textContent = "";

  if (previousImageTrigger && typeof previousImageTrigger.focus === "function") {
    previousImageTrigger.focus({ preventScroll: true });
  }
}

function initializeImageOverlay() {
  renderImageOverlay();

  if (!imageOverlay) {
    return;
  }

  imageOverlay.querySelectorAll("[data-project-image-close]").forEach(function (control) {
    control.addEventListener("click", function () {
      setImageOverlayState(false);
    });
  });

  imageOverlay.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  imageOverlay.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });

  projectFigures.forEach(function (figure) {
    const image = figure.querySelector("img");

    if (!image) {
      return;
    }

    figure.setAttribute("role", "button");
    figure.setAttribute("tabindex", "0");
    figure.setAttribute("aria-label", "Open larger image preview");

    figure.addEventListener("click", function () {
      setImageOverlayState(true, image, figure);
    });

    figure.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      setImageOverlayState(true, image, figure);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !imageOverlay.hidden) {
      setImageOverlayState(false);
    }
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
initializeImageOverlay();
