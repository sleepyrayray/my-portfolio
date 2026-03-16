const $ = (selector) => document.querySelector(selector);

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
};

const renderHero = () => {
  $("[data-brand]").textContent = siteContent.name;
  $("[data-brand-footer]").textContent = siteContent.name;
  $("[data-hero-eyebrow]").textContent = siteContent.hero.eyebrow;
  $("[data-hero-title]").textContent = siteContent.hero.title;
  $("[data-hero-copy]").textContent = siteContent.hero.copy;

  const statsContainer = $("[data-hero-stats]");
  siteContent.hero.stats.forEach((stat) => {
    const statCard = createElement("div", "stat-card");
    statCard.append(createElement("span", "stat-value", stat.value));
    statCard.append(createElement("span", "stat-label", stat.label));
    statsContainer.append(statCard);
  });

  const focusContainer = $("[data-hero-focus]");
  siteContent.hero.focus.forEach((item) => {
    focusContainer.append(createElement("span", "focus-chip", item));
  });
};

const renderAbout = () => {
  $("[data-about-eyebrow]").textContent = siteContent.about.eyebrow;
  $("[data-about-title]").textContent = siteContent.about.title;

  const aboutCopy = $("[data-about-copy]");
  siteContent.about.paragraphs.forEach((paragraph) => {
    aboutCopy.append(createElement("p", "body-copy", paragraph));
  });

  const aboutPoints = $("[data-about-points]");
  siteContent.about.points.forEach((point, index) => {
    const card = createElement("article", "about-card");
    card.dataset.reveal = "";
    card.style.setProperty("--delay", `${index * 70}ms`);
    card.append(createElement("p", "panel-label", point.title));
    card.append(createElement("p", "body-copy", point.text));
    aboutPoints.append(card);
  });
};

const renderProjectCards = () => {
  $("[data-projects-eyebrow]").textContent = siteContent.projectsIntro.eyebrow;
  $("[data-projects-title]").textContent = siteContent.projectsIntro.title;
  $("[data-projects-intro]").textContent = siteContent.projectsIntro.intro;

  const grid = $("[data-project-grid]");
  siteContent.projects.forEach((project, index) => {
    const article = createElement("article", "project-card");
    article.dataset.reveal = "";
    article.style.setProperty("--accent", project.color);
    article.style.setProperty("--delay", `${index * 75}ms`);

    const top = createElement("div", "project-card-top");
    top.append(createElement("p", "project-kicker", project.kicker));
    top.append(createElement("h3", "project-title", project.title));
    top.append(createElement("p", "project-summary", project.summary));

    const meta = createElement("div", "project-meta");
    meta.append(createElement("span", "meta-chip", project.medium));
    meta.append(createElement("span", "meta-chip", project.date));

    const tags = createElement("div", "project-tags");
    project.focus.forEach((focus) => {
      tags.append(createElement("span", "tag", focus));
    });

    const link = createElement("a", "text-link", "View Spotlight");
    link.href = `#project-${project.slug}`;

    article.append(top, meta, tags, link);
    grid.append(article);
  });
};

const renderSpotlights = () => {
  const container = $("[data-project-spotlights]");

  siteContent.projects.forEach((project, index) => {
    const article = createElement("article", "spotlight");
    article.id = `project-${project.slug}`;
    article.dataset.reveal = "";
    article.style.setProperty("--accent", project.color);
    article.style.setProperty("--delay", `${index * 80}ms`);

    const media = createElement("div", "spotlight-media");
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.alt;
    image.loading = "lazy";
    media.append(image);
    media.append(createElement("p", "media-note", project.mediaNote));

    const content = createElement("div", "spotlight-content");
    content.append(createElement("p", "project-kicker", project.kicker));
    content.append(createElement("h3", "spotlight-title", project.title));
    content.append(createElement("p", "project-summary large", project.summary));

    const facts = createElement("dl", "project-facts");
    [
      ["Medium", project.medium],
      ["Date", project.date],
      ["Role", project.role],
    ].forEach(([label, value]) => {
      const wrapper = createElement("div", "fact-row");
      wrapper.append(createElement("dt", "fact-label", label));
      wrapper.append(createElement("dd", "fact-value", value));
      facts.append(wrapper);
    });

    const contributionsBlock = createElement("div", "spotlight-block");
    contributionsBlock.append(createElement("h4", "spotlight-heading", "Contribution"));
    const contributionsList = createElement("ul", "spotlight-listing");
    project.contributions.forEach((item) => {
      contributionsList.append(createElement("li", "", item));
    });
    contributionsBlock.append(contributionsList);

    const processBlock = createElement("div", "spotlight-block");
    processBlock.append(createElement("h4", "spotlight-heading", "Process"));
    const processItems = createElement("div", "process-stack");
    project.process.forEach((item) => {
      const processCard = createElement("div", "process-card");
      processCard.append(createElement("p", "panel-label", item.title));
      processCard.append(createElement("p", "body-copy", item.text));
      processItems.append(processCard);
    });
    processBlock.append(processItems);

    const takeawayBlock = createElement("div", "spotlight-block");
    takeawayBlock.append(createElement("h4", "spotlight-heading", "Takeaways"));
    const takeawayList = createElement("ul", "spotlight-listing");
    project.takeaways.forEach((item) => {
      takeawayList.append(createElement("li", "", item));
    });
    takeawayBlock.append(takeawayList);

    const backLink = createElement("a", "text-link", "Back to project list");
    backLink.href = "#projects";

    content.append(facts, contributionsBlock, processBlock, takeawayBlock, backLink);
    article.append(media, content);
    container.append(article);
  });
};

const renderContact = () => {
  $("[data-contact-eyebrow]").textContent = siteContent.contact.eyebrow;
  $("[data-contact-title]").textContent = siteContent.contact.title;
  $("[data-contact-body]").textContent = siteContent.contact.body;

  const emailLink = $("[data-contact-email]");
  emailLink.textContent = siteContent.contact.email;
  emailLink.href = `mailto:${siteContent.contact.email}`;

  $("[data-contact-location]").textContent = siteContent.contact.location;

  const linksContainer = $("[data-contact-links]");
  siteContent.contact.links.forEach((link) => {
    const anchor = createElement("a", "contact-link", link.label);
    anchor.href = link.url;
    if (!link.url.startsWith("#")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
    linksContainer.append(anchor);
  });
};

const setupNavigation = () => {
  const button = $(".nav-toggle");
  const nav = $("#site-nav");

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
};

const setupReveal = () => {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
};

const setYear = () => {
  $("[data-year]").textContent = new Date().getFullYear();
};

renderHero();
renderAbout();
renderProjectCards();
renderSpotlights();
renderContact();
setupNavigation();
setupReveal();
setYear();
