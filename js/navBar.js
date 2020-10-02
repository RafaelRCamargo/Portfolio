window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li a");
  let i = false;

  //Toggle Nav
  burguer.addEventListener("click", () => {
    if (i == true) {
      nav.style.transform = "translateX(100%)";
      document.querySelector(".logo").style.color = "#cdcdcd";
      document.querySelector(".line1").style.backgroundColor = "#cdcdcd";
      document.querySelector(".line2").style.backgroundColor = "#cdcdcd";
      document.querySelector(".line3").style.backgroundColor = "#cdcdcd";
      i = false;
    } else {
      nav.style.transform = "translateX(0%)";
      document.querySelector(".logo").style.color = "#262626";
      document.querySelector(".line1").style.backgroundColor = "#262626";
      document.querySelector(".line2").style.backgroundColor = "#262626";
      document.querySelector(".line3").style.backgroundColor = "#262626";
      i = true;
    }

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1.3s ease forwards ${index / 5 + .4}s`;
      }
    });

    //Close nav on click link
    navLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        if (nav.style.transform == "translateX(0%)") {
          nav.style.transform = "translateX(100%)";
          document.querySelector(".logo").style.color = "#cdcdcd";
          document.querySelector(".line1").style.backgroundColor = "#cdcdcd";
          document.querySelector(".line2").style.backgroundColor = "#cdcdcd";
          document.querySelector(".line3").style.backgroundColor = "#cdcdcd";
        }
      })
    })

    //Burguer Animation
    if (burguer.classList == "burguer toggle") {
      burguer.classList.remove("toggle")
    } else {
      burguer.classList.toggle("toggle")
    }

  });

};

navSlide();
