/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let ul = document.getElementById("navbar__list");
let numberOfSection = document.querySelectorAll("section").length;
let sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (let i = 0; i < numberOfSection; i++) {
  let li = document.createElement("li");
  let link = document.createElement("a");
  link.classList.add("menu__link");
  let linkText = document.createTextNode(sections[i].getAttribute("data-nav"));
  link.appendChild(linkText);
  li.appendChild(link);
  ul.appendChild(li);
}
// Helper Function

sections.forEach(function (ele) {
  ele.classList.remove("your-active-class");
});
// Set sections as active
document.addEventListener("scroll", function () {
  if (
    window.scrollY >= sections[0].getBoundingClientRect().y + window.scrollY &&
    window.scrollY < sections[0].getBoundingClientRect().bottom + window.scrollY
  ) {
    sections.forEach(function (ele) {
      ele.classList.remove("your-active-class");
    });
    sections[0].classList.add("your-active-class");
  } else if (
    window.scrollY >= sections[1].getBoundingClientRect().y + window.scrollY &&
    window.scrollY < sections[1].getBoundingClientRect().bottom + window.scrollY
  ) {
    sections.forEach(function (ele) {
      ele.classList.remove("your-active-class");
    });
    sections[1].classList.add("your-active-class");
  } else if (
    window.scrollY >= sections[2].getBoundingClientRect().y + window.scrollY &&
    window.scrollY <=
      sections[2].getBoundingClientRect().bottom + window.scrollY
  ) {
    sections.forEach(function (ele) {
      ele.classList.remove("your-active-class");
    });
    sections[2].classList.add("your-active-class");
  } else if (
    window.scrollY >=
    sections[3].getBoundingClientRect().y + window.scrollY
  ) {
    sections.forEach(function (ele) {
      ele.classList.remove("your-active-class");
    });
    sections[3].classList.add("your-active-class");
  }
});

// Scroll to anchor ID using scrollTO event
window.addEventListener("load", function () {
  let links = this.document.querySelectorAll("li  a");
  links.forEach(function (ele) {
    function reele() {
      let Sec = "";
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].getAttribute("data-nav") === ele.innerHTML) {
          Sec = sections[i];
        }
      }
      return Sec;
    }
    ele.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: reele().getBoundingClientRect().top + window.scrollY + 10,
        behavior: "smooth",
      });
    });
  });
});
