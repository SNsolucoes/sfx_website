// =========================================
// SFX Transportation - Main JavaScript
// =========================================

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // =========================================
  // Mobile Navigation Toggle
  // =========================================
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      // Update icon
      if (navLinks.classList.contains("active")) {
        navToggle.textContent = "✕";
      } else {
        navToggle.textContent = "☰";
      }
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove("active");
          navToggle.textContent = "☰";
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav = navLinks.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);

      if (
        !isClickInsideNav &&
        !isClickOnToggle &&
        navLinks.classList.contains("active")
      ) {
        navLinks.classList.remove("active");
        navToggle.textContent = "☰";
      }
    });
  }

  // =========================================
  // Smooth Scrolling for Navigation Links
  // =========================================
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only prevent default for same-page anchors
      if (href !== "#" && href.startsWith("#")) {
        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // =========================================
  // Scroll Animations
  // =========================================
  const animateElements = document.querySelectorAll(".scroll-animate");

  if (animateElements.length > 0) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    animateElements.forEach((element) => {
      observer.observe(element);
    });
  }

  // =========================================
  // Header Background on Scroll
  // =========================================
  const header = document.querySelector(".header");

  if (header) {
    let lastScroll = 0;

    window.addEventListener("scroll", function () {
      const currentScroll = window.pageYOffset;

      // Add shadow when scrolled
      if (currentScroll > 50) {
        header.style.boxShadow = "var(--shadow-md)";
      } else {
        header.style.boxShadow = "var(--shadow-sm)";
      }

      lastScroll = currentScroll;
    });
  }

  // =========================================
  // Feature Cards Stagger Animation
  // =========================================
  const featureCards = document.querySelectorAll(".feature-card");

  if (featureCards.length > 0) {
    featureCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }
});

// =========================================
// Utility: Debounce Function
// =========================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// =========================================
// Handle Resize Events (Debounced)
// =========================================
window.addEventListener(
  "resize",
  debounce(function () {
    const navLinks = document.getElementById("navLinks");
    const navToggle = document.getElementById("navToggle");

    // Close mobile menu if window is resized to desktop size
    if (
      window.innerWidth > 768 &&
      navLinks &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");
      if (navToggle) {
        navToggle.textContent = "☰";
      }
    }
  }, 250)
);
