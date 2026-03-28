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

document.querySelectorAll("[data-site-footer]").forEach(renderSiteFooter);
