document.addEventListener("DOMContentLoaded", () => {
  const projectImages = document.querySelectorAll(".project-card img");

  projectImages.forEach((img) => {
    img.addEventListener("click", () => {
      openLightbox(img.src, img.alt);
    });
  });

  function openLightbox(src, alt) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.className = "close-btn";
    closeBtn.onclick = () => document.body.removeChild(lightbox);

    lightbox.appendChild(closeBtn);
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        document.body.removeChild(lightbox);
      }
    });
  }
});

/*document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("form-message");

  if (name && email && message) {
    formMsg.style.display = "block";
    formMsg.textContent = "Thanks for reaching out! 🚀";
    formMsg.style.color = "green";
    this.reset();
  } else {
    formMsg.style.display = "block";
    formMsg.textContent = "Please fill out all fields.";
    formMsg.style.color = "red";
  }
});*/

const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => {
  observer.observe(el);
  const serviceElements = document.querySelectorAll('.fade-in-service');

const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      serviceObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

serviceElements.forEach(el => {
  serviceObserver.observe(el);
});

});


const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('navLinks');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navMenu.classList.toggle('show');
  body.classList.toggle('lock-scroll');
});



const whyCards = document.querySelectorAll('.fade-in-why');

const whyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      whyObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

whyCards.forEach(el => {
  whyObserver.observe(el);
});


document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});


