const archiveFigures = document.querySelectorAll(".archive-card__figure");

function lockFigureInteraction(figure) {
  figure.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  figure.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
}

archiveFigures.forEach(lockFigureInteraction);
