///////////////////////////////////////////////////////////
// Set current year in the footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation (for browsers that doesn't support it from html)
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href === "#experience" || href === "#certificates") {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (href === "#skills" || href === "#tech-stack" || href === "#misc") {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-about");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// THE MODAL
// Open the modal with the clicked image
function openModal(imageSrc) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = imageSrc;

  // Add a class to hide the sticky navigation
  document.body.classList.add("modal-open");
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";

  // Remove the class to show the sticky navigation
  document.body.classList.remove("modal-open");
}

// Close the modal when clicking outside of the image
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
};

///////////////////////////////////////////////////////////
// Open the link by clicking on icon
function openLink(url) {
  window.open(url, "_blank");
}
