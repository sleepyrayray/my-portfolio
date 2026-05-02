function renderSiteFooter(slot) {
  const currentYear = new Date().getFullYear();

  slot.setAttribute("aria-label", "Site footer");
  slot.innerHTML =
    '<p class="site-footer-text">' +
    "<span>&copy; " +
    currentYear +
    " Ray Hernaez.</span>" +
    '<span class="site-footer-fade">All Rights Reserved.</span>' +
    "</p>";
}

function renderHomeBrandLink() {
  if (document.querySelector(".site-home-link")) {
    return;
  }

  const isProjectDetail = window.location.pathname.indexOf("/projects/") !== -1;
  const homeHref = isProjectDetail ? "../index.html" : "index.html";
  const homeLink = document.createElement("a");

  homeLink.className = "site-home-link";
  homeLink.href = homeHref;
  homeLink.setAttribute("aria-label", "Home");
  homeLink.innerHTML =
    '<span class="site-home-link__accent">RAY</span>' +
    '<span class="site-home-link__main">HERNAEZ</span>';

  if (document.body.classList.contains("home-page")) {
    homeLink.setAttribute("aria-current", "page");
  }

  document.body.insertAdjacentElement("afterbegin", homeLink);
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
        '<span class="hero-stage__name-accent">RAY</span><span class="hero-stage__name-main">HERNAEZ</span>' +
      "</div>" +
      '<p class="hero-stage__kicker projects-stage__label project-detail-page__label">Projects</p>' +
    "</div>"
  );
}

function renderContactOverlay() {
  if (document.querySelector(".contact-overlay")) {
    return;
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    '<div class="contact-overlay" id="contact-overlay" hidden>' +
      '<div class="contact-overlay__backdrop" data-contact-overlay-close></div>' +
      '<div class="contact-overlay__panel" role="dialog" aria-modal="true" aria-labelledby="contact-overlay-title">' +
        '<button class="contact-overlay__close" type="button" aria-label="Close" data-contact-overlay-close>X</button>' +
        '<div class="contact-overlay__content">' +
          '<h2 id="contact-overlay-title" class="sr-only">About + Contact</h2>' +
          '<p class="contact-overlay__bio contact-stage__bio">' +
            "I&rsquo;m a Montreal-based student at Concordia studying Computation Arts with a minor in Film and Moving " +
            "Image Studies, and I enjoy creating work around games, digital art, cinematic visuals, and storytelling." +
          "</p>" +
          '<div class="contact-overlay__reach contact-stage__reach">' +
            '<p class="contact-stage__note">You can reach me at:</p>' +
            '<button class="contact-stage__email" type="button" data-copy-email="rayhernaez@icloud.com" title="Click email to copy">rayhernaez@icloud.com</button>' +
            '<p class="contact-stage__copy-status" aria-live="polite"></p>' +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>"
  );
}

function setupContactOverlay() {
  const overlay = document.querySelector(".contact-overlay");
  const closeButton = overlay ? overlay.querySelector(".contact-overlay__close") : null;
  const closeButtons = overlay ? overlay.querySelectorAll("[data-contact-overlay-close]") : [];
  const copyStatus = overlay ? overlay.querySelector(".contact-stage__copy-status") : null;
  let previousActiveElement = null;

  if (!overlay || !closeButton) {
    return;
  }

  function isContactLink(element) {
    if (!element || !element.getAttribute) {
      return false;
    }

    const href = element.getAttribute("href");

    if (!href) {
      return false;
    }

    return new URL(href, window.location.href).pathname.endsWith("/contact.html");
  }

  function setContactOverlayState(isOpen, triggerElement) {
    overlay.hidden = !isOpen;
    overlay.classList.toggle("is-visible", isOpen);
    document.body.classList.toggle("has-contact-overlay", isOpen);

    if (copyStatus) {
      copyStatus.textContent = "";
    }

    if (isOpen) {
      previousActiveElement = triggerElement || document.activeElement;
      closeButton.focus({ preventScroll: true });
      return;
    }

    if (previousActiveElement && typeof previousActiveElement.focus === "function") {
      previousActiveElement.focus({ preventScroll: true });
    }
  }

  document.addEventListener("click", function (event) {
    const trigger = event.target.closest("a[href]");

    if (!isContactLink(trigger)) {
      return;
    }

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || trigger.target === "_blank") {
      return;
    }

    event.preventDefault();
    setContactOverlayState(true, trigger);
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setContactOverlayState(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !overlay.hidden) {
      setContactOverlayState(false);
    }
  });

  if (new URLSearchParams(window.location.search).get("contact") === "1") {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.delete("contact");
    window.history.replaceState({}, "", nextUrl.pathname + nextUrl.search + nextUrl.hash);
    setContactOverlayState(true);
  }
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

function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(value);
  }

  return new Promise(function (resolve, reject) {
    const fallbackField = document.createElement("textarea");

    fallbackField.value = value;
    fallbackField.setAttribute("readonly", "");
    fallbackField.style.position = "fixed";
    fallbackField.style.top = "-9999px";
    fallbackField.style.left = "-9999px";
    document.body.appendChild(fallbackField);
    fallbackField.select();

    try {
      document.execCommand("copy");
      resolve();
    } catch (error) {
      reject(error);
    } finally {
      document.body.removeChild(fallbackField);
    }
  });
}

function setupContentLockdown() {
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  document.addEventListener("copy", function (event) {
    event.preventDefault();
  });

  document.addEventListener("cut", function (event) {
    event.preventDefault();
  });
}

function setupCopyEmail() {
  const emailButton = document.querySelector("[data-copy-email]");
  const status = document.querySelector(".contact-stage__copy-status");
  let resetTimer = null;

  if (!emailButton || !status) {
    return;
  }

  emailButton.addEventListener("click", function () {
    copyText(emailButton.dataset.copyEmail)
      .then(function () {
        status.textContent = "✓ copied";

        if (resetTimer) {
          window.clearTimeout(resetTimer);
        }

        resetTimer = window.setTimeout(function () {
          status.textContent = "";
        }, 1600);
      })
      .catch(function () {
        status.textContent = "Copy failed";

        if (resetTimer) {
          window.clearTimeout(resetTimer);
        }

        resetTimer = window.setTimeout(function () {
          status.textContent = "";
        }, 1600);
      });
  });
}

renderHomeBrandLink();
document.querySelectorAll("[data-site-footer]").forEach(renderSiteFooter);
renderProjectPageHeader();
renderContactOverlay();
setupContactOverlay();
setupCustomCursor();
setupContentLockdown();
setupCopyEmail();
