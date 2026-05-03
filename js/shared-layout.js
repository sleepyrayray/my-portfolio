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
      "RAY HERNAEZ" +
    "</a>" +
    '<p class="site-topbar__availability">AVAILABLE FOR WORK</p>';

  if (document.body.classList.contains("home-page")) {
    topbar.querySelector(".site-home-link").setAttribute("aria-current", "page");
  }

  document.body.insertAdjacentElement("afterbegin", topbar);
}

const projectArchiveItems = [
  {
    slug: "spirit-camper.html",
    title: "Spirit Camper",
    category: "GAME",
    image: "../assets/images/spirit-camper/0.webp",
    alt: "Spirit Camper cover image"
  },
  {
    slug: "evil.html",
    title: "E.V.I.L.",
    category: "GAME",
    image: "../assets/images/evil/2.webp",
    alt: "E.V.I.L. cover image"
  },
  {
    slug: "the-heavy-20s.html",
    title: "The Heavy 20s",
    category: "VISUAL",
    image: "../assets/images/the-heavy-20s/0.webp",
    alt: "The Heavy 20s cover image"
  },
  {
    slug: "sheldon.html",
    title: "Sheldon",
    category: "PHYSICAL",
    image: "../assets/images/sheldon/0.webp",
    alt: "Sheldon cover image"
  },
  {
    slug: "when-the-night-cant-breathe.html",
    title: "When the Night Can't Breathe",
    category: "INTERACTIVE",
    image: "../assets/images/when-the-night-cant-breathe/0.webp",
    alt: "When the Night Can't Breathe cover image"
  },
  {
    slug: "frottage.html",
    title: "Frottage",
    category: "VISUAL",
    image: "../assets/images/frottage/0.webp",
    alt: "Frottage cover image"
  },
  {
    slug: "vampire-slayer.html",
    title: "Vampire Slayer",
    category: "PHYSICAL",
    image: "../assets/images/vampire-slayer/0.webp",
    alt: "Vampire Slayer cover image"
  }
];

function shuffledItems(items) {
  return items
    .map(function (item) {
      return {
        item: item,
        sort: Math.random()
      };
    })
    .sort(function (first, second) {
      return first.sort - second.sort;
    })
    .map(function (entry) {
      return entry.item;
    });
}

function renderProjectArchiveCard(project) {
  return (
    '<article class="archive-card project-other-works__card">' +
      '<div class="archive-card__figure">' +
        '<a class="archive-card__media-link" href="' +
          project.slug +
          '" aria-label="Open ' +
          project.title +
          ' project page">' +
          '<img loading="lazy" decoding="async" class="archive-card__image" src="' +
            project.image +
            '" alt="' +
            project.alt +
            '" draggable="false" />' +
        "</a>" +
      "</div>" +
      '<div class="archive-card__caption">' +
        '<a class="archive-card__name-link" href="' +
          project.slug +
          '">' +
          project.title +
        "</a>" +
        '<span class="archive-card__category">' +
          project.category +
        "</span>" +
      "</div>" +
    "</article>"
  );
}

function renderProjectOtherWorksSection() {
  const projectMain = document.querySelector(".project-detail-page__main");

  if (!projectMain || projectMain.querySelector(".project-other-works")) {
    return;
  }

  const currentSlug = window.location.pathname.split("/").pop();
  const selectedProjects = shuffledItems(
    projectArchiveItems.filter(function (project) {
      return project.slug !== currentSlug;
    })
  ).slice(0, 3);

  if (!selectedProjects.length) {
    return;
  }

  projectMain.insertAdjacentHTML(
    "beforeend",
    '<section class="project-other-works" aria-labelledby="project-other-works-heading">' +
      '<h2 id="project-other-works-heading" class="about-stage__title project-other-works__title">OTHER WORKS</h2>' +
      '<div class="project-other-works__grid">' +
        selectedProjects.map(renderProjectArchiveCard).join("") +
      "</div>" +
    "</section>"
  );
}

function renderProjectContactSection() {
  const projectMain = document.querySelector(".project-detail-page__main");

  if (!projectMain || projectMain.querySelector(".project-contact")) {
    return;
  }

  projectMain.insertAdjacentHTML(
    "beforeend",
    '<section class="project-contact" aria-labelledby="project-contact-heading">' +
      '<h2 id="project-contact-heading" class="about-stage__title project-contact__title">GET IN TOUCH</h2>' +
      '<div class="about-stage__reach project-contact__reach">' +
        '<p class="about-stage__bio project-contact__copy">' +
          "Reach out if you want to talk about a project, a collaboration, or an opportunity. We can discuss " +
          "what you need, what I can help with, and the best way to move forward." +
        "</p>" +
        '<p class="about-stage__note">EMAIL</p>' +
        '<div class="about-stage__email-row project-contact__email-row">' +
          '<button class="about-stage__email" type="button" data-copy-email="rayhernaez@icloud.com" title="CLICK TO COPY" aria-label="CLICK TO COPY">' +
            "RAYHERNAEZ@ICLOUD.COM" +
          "</button>" +
          '<p class="contact-stage__copy-status about-stage__copy-status" aria-live="polite"></p>' +
        "</div>" +
      "</div>" +
    "</section>"
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
  const emailButtons = document.querySelectorAll("[data-copy-email]");

  if (!emailButtons.length) {
    return;
  }

  emailButtons.forEach(function (emailButton) {
    const emailRow = emailButton.closest(".about-stage__email-row") || emailButton.parentElement;
    const status = emailRow ? emailRow.querySelector(".contact-stage__copy-status") : null;
    let resetTimer = null;

    if (!status) {
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
  });
}

renderSiteTopbar();
renderProjectOtherWorksSection();
renderProjectContactSection();
document.querySelectorAll("[data-site-footer]").forEach(renderSiteFooter);
setupSiteClock();
setupCustomCursor();
setupContentLockdown();
setupCopyEmail();
