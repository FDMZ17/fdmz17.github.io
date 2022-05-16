const sentences = [
  "I'm a Student and a Developer",
  "I'm currently learning NodeJS & CSS",
  "Hi , I'm FDMZ17",
  "Welcome to my website!",
  "Welcome to my portfolio website!",
  "Hello there!",
  "I'm currently learning CSS & Javascript",
  "Hi, I'am FDMZ17 ordinary students"

];
var sentence = Math.floor(Math.random() * sentences.length);
document.querySelector(".sentence").innerText = sentences[sentence];
console.log("Random sentence selector working!, Using sentence number: " + sentence);

// init aos script
AOS.init();

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyBPkZ5NiKPp-8YbKvJgF5ZOS69NrUCUFDiUMnyfwGFEqrpar99rbC3nmOq1TeXRDZX/exec";
const form = document.forms["fdmz17-contact-submit"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const SubmitAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Ketika tombol submit di click
  // tampilkan tombol loading dan bilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    })
    .then((response) => {
      // tampilkan tombol kirim dan hilangkan tombol kirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      SubmitAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Back to top page
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//  Disable image right click and 
window.onload = function() {
  var images = document.getElementsByTagName('img');
  for (var i = 0; img = images[i++];) {
    img.oncontextmenu = function() {
        return false;
      },
      img.ondragstart = function() {
        return false;
      };
  };
}
