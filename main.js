const navbar = document.querySelector(".nav");
const home = document.querySelector(".home");
const work = document.querySelector(".work");
const contact = document.querySelector(".contact");
const socialMedia = document.querySelector(".social-media");

const NAVBAR_LINKS = {
  home: home,
  work: work,
  contact: contact,
};

var currentActive = home;

// Manage Routing
document.querySelector(".nav").addEventListener("click", (e) => {
  if (currentActive != NAVBAR_LINKS[e.target.id]) {
    NAVBAR_LINKS[e.target.id].classList.toggle("hidden");
    currentActive.classList.toggle("hidden");
    currentActive = NAVBAR_LINKS[e.target.id];
  }
});

// EmailJS Api
emailjs.init("EdXLAfs82PETRVAAb");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "default_service";
  const templateID = "template_04e4vn6";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      swal({
        icon: "success",
        title: "Email Sent!",
        button: "Got it",
      });
    },
    (err) => {
      swal({
        icon: "error",
        title: "Delivery failed!",
        button: "Ok",
      });
    }
  );
  event.target.reset();
});
