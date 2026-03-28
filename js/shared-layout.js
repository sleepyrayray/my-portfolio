function renderSiteFooter(slot) {
  const currentYear = new Date().getFullYear();

  slot.setAttribute("aria-label", "Site footer");
  slot.innerHTML =
    '<p class="site-footer-text">' +
    "<span>&copy; " +
    currentYear +
    " Ray Hernaez Portfolio.</span>" +
    '<span class="site-footer-fade">All Rights Reserved.</span>' +
    "</p>";
}

function renderProjectPageHeader() {
  const projectMain = document.querySelector(".project-detail-page__main");
  const projectNav = projectMain ? projectMain.querySelector(".hero-stage__actions--nav") : null;

  if (!projectMain || !projectNav || projectMain.querySelector(".project-detail-page__header")) {
    return;
  }

  projectNav.insertAdjacentHTML(
    "afterend",
    '<div class="project-detail-page__header" aria-hidden="true">' +
      '<div class="project-detail-page__brand hero-stage__name">' +
        '<span class="hero-stage__name-accent">ray</span><span class="hero-stage__name-main">hernaez</span>' +
      "</div>" +
      '<p class="hero-stage__kicker projects-stage__label project-detail-page__label">Projects</p>' +
    "</div>"
  );
}

function setupCustomCursor() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return;
  }

  const cursor = document.createElement("div");

  cursor.className = "custom-cursor";
  cursor.setAttribute("aria-hidden", "true");
  document.body.appendChild(cursor);
  document.body.classList.add("has-custom-cursor");

  document.addEventListener("pointermove", function (event) {
    if (event.pointerType !== "mouse") {
      return;
    }

    cursor.style.setProperty("--cursor-x", event.clientX + "px");
    cursor.style.setProperty("--cursor-y", event.clientY + "px");
    cursor.classList.add("is-visible");
  });

  document.addEventListener("mouseout", function (event) {
    if (event.relatedTarget) {
      return;
    }

    cursor.classList.remove("is-visible");
  });

  window.addEventListener("blur", function () {
    cursor.classList.remove("is-visible");
  });
}

document.querySelectorAll("[data-site-footer]").forEach(renderSiteFooter);
renderProjectPageHeader();
setupCustomCursor();
