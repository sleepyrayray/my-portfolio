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

const createImage = (src, alt, className = "") => {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";
  if (className) {
    image.className = className;
  }
  return image;
};

const getYouTubeEmbedUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.replace("/", "");
    } else if (parsedUrl.searchParams.get("v")) {
      videoId = parsedUrl.searchParams.get("v");
    }

    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : "";
  } catch (error) {
    return "";
  }
};

const renderHero = () => {
  $("[data-brand]").textContent = siteContent.name;
  $("[data-brand-footer]").textContent = siteContent.name;
  $("[data-hero-eyebrow]").textContent = siteContent.hero.eyebrow;
  $("[data-hero-role]").textContent = siteContent.role;
  $("[data-hero-title]").textContent = siteContent.hero.title;
  $("[data-hero-copy]").textContent = siteContent.hero.copy;

  const statsContainer = $("[data-hero-stats]");
  siteContent.hero.stats.forEach((stat) => {
    const statCard = createElement("div", "stat-card");
    statCard.append(createElement("span", "stat-value", stat.value));
    statCard.append(createElement("span", "stat-label", stat.label));
    statsContainer.append(statCard);
  });

  const previewContainer = $("[data-hero-preview]");
  siteContent.projects.slice(0, 4).forEach((project) => {
    const card = createElement("a", "hero-preview-card");
    card.href = `#project-${project.slug}`;
    card.style.setProperty("--accent", project.color);
    card.append(createImage(project.cover.src, project.cover.alt));

    const caption = createElement("div", "hero-preview-caption");
    caption.append(createElement("span", "hero-preview-title", project.title));
    caption.append(createElement("span", "hero-preview-meta", project.kicker));
    card.append(caption);

    previewContainer.append(card);
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

    const media = createElement("a", "project-card-media");
    media.href = `#project-${project.slug}`;
    media.append(createImage(project.cover.src, project.cover.alt));

    const mediaFlags = createElement("div", "project-media-flags");
    mediaFlags.append(
      createElement(
        "span",
        "media-flag",
        `${project.gallery.length + 1} image${project.gallery.length ? "s" : ""}`
      )
    );
    if (project.videoUrl) {
      mediaFlags.append(createElement("span", "media-flag", "video"));
    }
    media.append(mediaFlags);

    const body = createElement("div", "project-card-body");
    body.append(createElement("p", "project-kicker", project.kicker));
    body.append(createElement("h3", "project-title", project.title));
    body.append(createElement("p", "project-summary", project.summary));

    const meta = createElement("div", "project-meta");
    meta.append(createElement("span", "meta-chip", project.medium));
    meta.append(createElement("span", "meta-chip", project.date));
    meta.append(createElement("span", "meta-chip", project.status));

    const tags = createElement("div", "project-tags");
    project.focus.forEach((focus) => {
      tags.append(createElement("span", "tag", focus));
    });

    const footer = createElement("div", "project-card-footer");
    const spotlightLink = createElement("a", "text-link", "View case study");
    spotlightLink.href = `#project-${project.slug}`;
    footer.append(spotlightLink);

    if (project.videoUrl) {
      const videoLink = createElement("a", "text-link muted", project.videoLabel);
      videoLink.href = project.videoUrl;
      videoLink.target = "_blank";
      videoLink.rel = "noreferrer";
      footer.append(videoLink);
    }

    article.append(media, body, meta, tags, footer);
    grid.append(article);
  });
};

const renderFacts = (project) => {
  const facts = createElement("dl", "project-facts");
  [
    ["Medium", project.medium],
    ["Date", project.date],
    ["Role", project.role],
    ["Scope", project.status],
  ].forEach(([label, value]) => {
    const wrapper = createElement("div", "fact-row");
    wrapper.append(createElement("dt", "fact-label", label));
    wrapper.append(createElement("dd", "fact-value", value));
    facts.append(wrapper);
  });
  return facts;
};

const renderGallery = (project) => {
  const block = createElement("section", "spotlight-block");
  block.append(createElement("h4", "spotlight-heading", "Gallery"));

  const gallery = createElement("div", "gallery-grid");
  project.gallery.forEach((item) => {
    const figure = createElement("figure", `gallery-item is-${item.ratio || "landscape"}`);
    const link = createElement("a", "gallery-link");
    link.href = item.src;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.append(createImage(item.src, item.alt));

    figure.append(link);
    if (item.caption) {
      figure.append(createElement("figcaption", "gallery-caption", item.caption));
    }
    gallery.append(figure);
  });

  block.append(gallery);
  return block;
};

const renderVideo = (project) => {
  if (!project.videoUrl) {
    return null;
  }

  const block = createElement("section", "video-card");
  const header = createElement("div", "video-card-header");
  header.append(createElement("h4", "spotlight-heading", "Walkthrough"));

  const youtubeLink = createElement("a", "text-link", "Open on YouTube");
  youtubeLink.href = project.videoUrl;
  youtubeLink.target = "_blank";
  youtubeLink.rel = "noreferrer";
  header.append(youtubeLink);

  const frame = createElement("div", "video-frame");
  const iframe = document.createElement("iframe");
  iframe.src = getYouTubeEmbedUrl(project.videoUrl);
  iframe.title = `${project.title} video walkthrough`;
  iframe.loading = "lazy";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  frame.append(iframe);
  block.append(header, frame);
  return block;
};

const renderSpotlights = () => {
  const container = $("[data-project-spotlights]");

  siteContent.projects.forEach((project, index) => {
    const article = createElement("article", "spotlight");
    article.id = `project-${project.slug}`;
    article.dataset.reveal = "";
    article.style.setProperty("--accent", project.color);
    article.style.setProperty("--delay", `${index * 80}ms`);

    const shell = createElement("div", "spotlight-shell");

    const sidebar = createElement("div", "spotlight-sidebar");
    const cover = createElement("figure", "spotlight-cover");
    cover.append(createImage(project.cover.src, project.cover.alt));

    const intro = createElement("div", "spotlight-intro");
    intro.append(createElement("p", "project-kicker", project.kicker));
    intro.append(createElement("h3", "spotlight-title", project.title));
    intro.append(createElement("p", "project-summary large", project.summary));

    const tags = createElement("div", "project-tags");
    project.focus.forEach((focus) => {
      tags.append(createElement("span", "tag", focus));
    });

    const actions = createElement("div", "spotlight-actions");
    const backLink = createElement("a", "button button-secondary compact", "Back to projects");
    backLink.href = "#projects";
    actions.append(backLink);

    if (project.videoUrl) {
      const videoLink = createElement("a", "button button-primary compact", project.videoLabel);
      videoLink.href = project.videoUrl;
      videoLink.target = "_blank";
      videoLink.rel = "noreferrer";
      actions.append(videoLink);
    }

    sidebar.append(cover, intro, renderFacts(project), tags, actions);

    const main = createElement("div", "spotlight-main");

    const contributionsBlock = createElement("section", "spotlight-block");
    contributionsBlock.append(createElement("h4", "spotlight-heading", "Contribution"));
    const contributionsList = createElement("ul", "spotlight-listing");
    project.contributions.forEach((item) => {
      contributionsList.append(createElement("li", "", item));
    });
    contributionsBlock.append(contributionsList);

    const processBlock = createElement("section", "spotlight-block");
    processBlock.append(createElement("h4", "spotlight-heading", "Process"));
    const processItems = createElement("div", "process-stack");
    project.process.forEach((item) => {
      const processCard = createElement("div", "process-card");
      processCard.append(createElement("p", "panel-label", item.title));
      processCard.append(createElement("p", "body-copy", item.text));
      processItems.append(processCard);
    });
    processBlock.append(processItems);

    const takeawayBlock = createElement("section", "spotlight-block");
    takeawayBlock.append(createElement("h4", "spotlight-heading", "Takeaways"));
    const takeawayList = createElement("ul", "spotlight-listing");
    project.takeaways.forEach((item) => {
      takeawayList.append(createElement("li", "", item));
    });
    takeawayBlock.append(takeawayList);

    main.append(contributionsBlock);

    const videoBlock = renderVideo(project);
    if (videoBlock) {
      main.append(videoBlock);
    }

    if (project.gallery.length) {
      main.append(renderGallery(project));
    }

    main.append(processBlock, takeawayBlock);
    shell.append(sidebar, main);
    article.append(shell);
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
    { threshold: 0.12 }
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
