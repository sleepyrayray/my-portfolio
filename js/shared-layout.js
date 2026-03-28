const siteNavItems = [
  { key: "home", label: "Home", href: "index.html" },
  { key: "projects", label: "Projects", href: "projects.html" },
  { key: "contact", label: "Contact", href: "contact.html" },
];

function renderSiteNav(slot) {
  const currentPage = slot.dataset.current || document.body.dataset.page || "";
  const ariaLabel = slot.dataset.navLabel || "Site navigation";

  const navMarkup = siteNavItems
    .map(function (item, index) {
      const isCurrentPage = item.key === currentPage;
      const linkClass = isCurrentPage ? "hero-stage__action hero-stage__action--solid" : "hero-stage__action hero-stage__action--ghost";
      const currentAttribute = isCurrentPage ? ' aria-current="page"' : "";
      const dividerMarkup =
        index < siteNavItems.length - 1 ? '<span class="hero-stage__divider" aria-hidden="true"></span>' : "";

      return '<a class="' + linkClass + '" href="' + item.href + '"' + currentAttribute + ">" + item.label + "</a>" + dividerMarkup;
    })
    .join("");

  slot.outerHTML =
    '<nav class="hero-stage__actions hero-stage__actions--nav" aria-label="' +
    ariaLabel +
    '">' +
    navMarkup +
    "</nav>";
}

function renderSiteFooter(slot) {
  const currentYear = new Date().getFullYear();

  slot.outerHTML =
    '<footer class="site-footer" aria-label="Site footer">' +
    '<p class="site-footer-text">' +
    "<span>&copy; " +
    currentYear +
    " Ray Hernaez Portfolio.</span>" +
    '<span class="site-footer-fade">All Rights Reserved.</span>' +
    "</p>" +
    "</footer>";
}

document.querySelectorAll("[data-site-nav]").forEach(renderSiteNav);
document.querySelectorAll("[data-site-footer]").forEach(renderSiteFooter);
