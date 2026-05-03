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

function renderSiteTopbar() {
  if (document.querySelector(".site-topbar")) {
    return;
  }

  const isProjectDetail = window.location.pathname.indexOf("/projects/") !== -1;
  const homeHref = isProjectDetail ? "../index.html" : "index.html";
  const topbar = document.createElement("header");

  topbar.className = "site-topbar";
  topbar.setAttribute("aria-label", "Site status");
  topbar.innerHTML =
    '<p class="site-topbar__clock" aria-label="Current time in Montreal, QC">' +
      '<span class="site-topbar__clock-time" data-site-time>00:00:00</span>' +
      '<span class="site-topbar__separator" aria-hidden="true">&bull;</span>' +
      '<span class="site-topbar__clock-location">MONTREAL, QC</span>' +
    "</p>" +
    '<a class="site-home-link" href="' +
      homeHref +
      '" aria-label="Home">' +
      '<span class="site-home-link__accent">RAY</span>' +
      '<span class="site-home-link__main">HERNAEZ</span>' +
    "</a>" +
    '<p class="site-topbar__availability">AVAILABLE FOR WORK</p>';

  if (document.body.classList.contains("home-page")) {
    topbar.querySelector(".site-home-link").setAttribute("aria-current", "page");
  }

  document.body.insertAdjacentElement("afterbegin", topbar);
}

function renderProjectPageHeader() {
  const projectMain = document.querySelector(".project-detail-page__main");

  if (!projectMain || projectMain.querySelector(".project-detail-page__header")) {
    return;
  }

  projectMain.insertAdjacentHTML(
    "afterbegin",
      '<div class="project-detail-page__header" aria-hidden="true">' +
      '<div class="project-detail-page__brand hero-stage__name">' +
        '<span class="hero-stage__name-accent">RAY</span><span class="hero-stage__name-main">HERNAEZ</span>' +
      "</div>" +
      '<p class="hero-stage__kicker projects-stage__label project-detail-page__label">Projects</p>' +
    "</div>"
  );
}

function setupSiteClock() {
  const clocks = document.querySelectorAll("[data-site-time]");
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  if (!clocks.length) {
    return;
  }

  function updateClocks() {
    const currentTime = formatter.format(new Date());

    clocks.forEach(function (clock) {
      clock.textContent = currentTime;
    });
  }

  updateClocks();
  window.setInterval(updateClocks, 1000);
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
        status.textContent = "COPIED";

        if (resetTimer) {
          window.clearTimeout(resetTimer);
        }

        resetTimer = window.setTimeout(function () {
          status.textContent = "";
        }, 1600);
      })
      .catch(function () {
        status.textContent = "COPY FAILED";

        if (resetTimer) {
          window.clearTimeout(resetTimer);
        }

        resetTimer = window.setTimeout(function () {
          status.textContent = "";
        }, 1600);
      });
  });
}

renderSiteTopbar();
document.querySelectorAll("[data-site-footer]").forEach(renderSiteFooter);
renderProjectPageHeader();
setupSiteClock();
setupCustomCursor();
setupContentLockdown();
setupCopyEmail();
