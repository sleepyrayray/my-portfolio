const archiveGrid = document.querySelector(".archive-grid");
const archiveFigures = document.querySelectorAll(".archive-card__figure");

function ensureClosedArchiveGrid(grid) {
  if (!grid || grid.querySelector(".archive-card--placeholder")) {
    return;
  }

  const archiveCards = Array.from(grid.children).filter(function (card) {
    return card.classList.contains("archive-card") && !card.classList.contains("archive-card--placeholder");
  });

  if (archiveCards.length % 2 === 0) {
    return;
  }

  const placeholderCard = document.createElement("article");

  placeholderCard.className = "archive-card archive-card--placeholder";
  placeholderCard.setAttribute("aria-hidden", "true");
  grid.appendChild(placeholderCard);
}

function lockFigureInteraction(figure) {
  figure.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  figure.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
}

ensureClosedArchiveGrid(archiveGrid);
archiveFigures.forEach(lockFigureInteraction);
