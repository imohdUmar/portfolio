// Typed Text
var typed = new Typed('#typed', {
  strings: ['MERN Stack Developer.', 'Full-Stack Web Developer.', 'Engineer.'],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// AOS Animation
AOS.init({
  duration: 500,
  once: false,
});

// Scroll Progress & Back to Top
let ticking = false;

function onScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("scroll-progress").style.transform = `scaleX(${scrolled / 100})`;

  const backToTop = document.getElementById("backToTop");
  backToTop.style.display = scrollTop > 300 ? "block" : "none";

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxPDhWJXQ9FaIl4lbcLk6qB0GgD3H4R-G95mMU-Ar52-zpTBIoIYD7MwkP581ybTlf4/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
const loader = document.getElementById("loader");

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show loader
  loader.classList.remove("hidden");

  fetch(scriptURL, { method: 'POST', body: new FormData(form) });

  // After short delay, hide loader and show message
  setTimeout(() => {
    loader.classList.add("hidden");
    msg.innerHTML = "Message sent successfully!";
    msg.classList.remove("hidden");
    msg.classList.remove("opacity-0");
    msg.classList.add("opacity-100");
    form.reset();

    // Fade out message after 3 seconds
    setTimeout(() => {
      msg.classList.remove("opacity-100");
      msg.classList.add("opacity-0");
    }, 3000);
  }, 800);
});


// Tab Switcher
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content-block");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const tabName = btn.getAttribute("data-tab");

    tabBtns.forEach(b => {
      b.classList.remove("text-white", "border-b-2", "border-[#ce1840]");
      b.classList.add("text-gray-400");
    });

    btn.classList.remove("text-gray-400");
    btn.classList.add("text-white", "border-b-2", "border-[#ce1840]");

    tabContents.forEach(tc => tc.classList.add("hidden"));
    document.getElementById(tabName).classList.remove("hidden");
  });
});

// Project Card Clicker
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    projectCards.forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.project-card')) {
    projectCards.forEach(c => c.classList.remove('active'));
  }
});

// Hamburger Menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

function closeMenu() {
  mobileMenu.classList.remove("open");
}

// Close on window resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.remove("open");
  }
});