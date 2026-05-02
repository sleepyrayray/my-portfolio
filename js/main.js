const archiveFigures = document.querySelectorAll(".archive-card__figure");
const fitTitles = document.querySelectorAll("[data-fit-title]");

function fitDisplayTitle(title) {
  const container = title.closest(".projects-stage__header") || title.closest(".hero-stage");

  if (!container) {
    return;
  }

  const targetWidth = container.clientWidth;

  if (!targetWidth) {
    return;
  }

  let minSize = 24;
  let maxSize = title.classList.contains("projects-stage__title") ? 58 : 108;

  title.style.fontSize = minSize + "px";

  for (let index = 0; index < 14; index += 1) {
    const testSize = (minSize + maxSize) / 2;

    title.style.fontSize = testSize + "px";

    if (title.scrollWidth <= targetWidth) {
      minSize = testSize;
    } else {
      maxSize = testSize;
    }
  }

  title.style.fontSize = Math.floor(minSize) + "px";
}

function fitDisplayTitles() {
  fitTitles.forEach(fitDisplayTitle);
}

function lockFigureInteraction(figure) {
  figure.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  figure.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
}

archiveFigures.forEach(lockFigureInteraction);
fitDisplayTitles();

if (document.fonts) {
  document.fonts.ready.then(fitDisplayTitles);
}

window.addEventListener("resize", fitDisplayTitles);
