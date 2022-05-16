// Navbar fixed
window.onscroll = function() {
  const header = document.querySelector("header");
  const fixedNavBar = header.offsetTop;
  const gotop = document.querySelector("#go-top");
  if (window.pageYOffset > fixedNavBar) {
    header.classList.add("navbar-fixed");
    gotop.classList.remove("hidden");
    gotop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    gotop.classList.add("hidden");
    gotop.classList.remove("flex");
  }
}

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("hamburger-active")
  navMenu.classList.toggle("hidden");
})

// Contact form!
const scriptURL = "https://script.google.com/macros/s/AKfycbyBPkZ5NiKPp-8YbKvJgF5ZOS69NrUCUFDiUMnyfwGFEqrpar99rbC3nmOq1TeXRDZX/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    })
    .then((response) => {
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// clock outside hamburger
window.addEventListener("click", function(e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkmode switch

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.setItem("theme", 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
