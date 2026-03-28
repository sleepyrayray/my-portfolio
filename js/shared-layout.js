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
setupCustomCursor();
