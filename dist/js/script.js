// Navbar fixed
window.onscroll = function() {
  const header = document.querySelector("header");
  const fixedNavBar = header.offsetTop;

  if(window.pageYOffset > fixedNavBar) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed")
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
