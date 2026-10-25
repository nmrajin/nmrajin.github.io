"use strict";

// Content and navigation remain available without JavaScript.
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const navigation = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = navigation
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of navigation) {
          if (link.getAttribute("href") === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-15% 0px -50% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

// Progressive enhancement: all projects remain visible without JavaScript.
const filterGroup = document.querySelector(".work-filters");
const projectCards = [...document.querySelectorAll(".project-card")];
const projectCount = document.getElementById("project-count");
if (filterGroup && projectCards.length && projectCount) {
  filterGroup.hidden = false;
  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button || !filterGroup.contains(button)) return;
    const category = button.dataset.filter;
    let visible = 0;
    for (const card of projectCards) {
      card.hidden = category !== "all" && card.dataset.category !== category;
      if (!card.hidden) visible += 1;
    }
    for (const filter of filterGroup.querySelectorAll("button")) {
      filter.setAttribute("aria-pressed", String(filter === button));
    }
    projectCount.textContent = `${visible} ${visible === 1 ? "project" : "projects"}`;
  });
}

// Interaction-gated obfuscation deters basic HTML harvesters, not browser automation.
const revealEmail = document.getElementById("reveal-email");
const contactEmail = document.getElementById("contact-email");
const emailStatus = document.getElementById("email-status");
if (revealEmail && contactEmail && emailStatus) {
  revealEmail.hidden = false;
  emailStatus.hidden = false;
  revealEmail.addEventListener(
    "click",
    () => {
      const address = [
        41, 58, 49, 50, 53, 107, 109, 106, 98, 27, 60, 54, 58, 50, 55, 117, 56,
        52, 54,
      ]
        .map((value) => String.fromCharCode(value ^ 91))
        .join("");
      contactEmail.textContent = address;
      contactEmail.href = `mailto:${address}`;
      contactEmail.hidden = false;
      revealEmail.hidden = true;
      emailStatus.textContent =
        "Email revealed. Select the address to open your email app.";
      contactEmail.focus();
    },
    { once: true },
  );
}
