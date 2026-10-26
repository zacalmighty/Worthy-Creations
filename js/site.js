// Worthy Creations: tax-season notice, mobile menu, contact topic, footer year.

// Tax-season notice: shown Jan 1 through Apr 15. Add ?tax to the URL to preview it.
const TAX_SEASON = { start: [0, 1], end: [3, 15] }; // [month (0 = Jan), day]
const notice = document.getElementById("tax-notice");
if (notice) {
  const now = new Date();
  const y = now.getFullYear();
  const start = new Date(y, TAX_SEASON.start[0], TAX_SEASON.start[1]);
  const end = new Date(y, TAX_SEASON.end[0], TAX_SEASON.end[1], 23, 59, 59);
  const preview = new URLSearchParams(location.search).has("tax");
  let dismissed = false;
  try {
    dismissed = localStorage.getItem("wc-tax-notice") === String(y);
  } catch {}
  if (preview || (now >= start && now <= end && !dismissed)) notice.hidden = false;
  notice.querySelector(".tax-notice__close")?.addEventListener("click", () => {
    notice.hidden = true;
    try {
      localStorage.setItem("wc-tax-notice", String(y));
    } catch {}
  });
}

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

// Links like "Book a tax appointment" pick the matching topic in the contact form.
const topic = document.getElementById("topic");
document.querySelectorAll("[data-topic]").forEach((link) => {
  link.addEventListener("click", () => {
    if (topic) topic.value = link.dataset.topic;
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
