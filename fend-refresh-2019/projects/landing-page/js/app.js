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

// build the nav with for loop depending on the number of the sections in the document
for (let i = 0; i < numberOfSection; i++) {
  let li = document.createElement("li");
  let link = document.createElement("a");
  link.classList.add("menu__link");
  let linkText = document.createTextNode(sections[i].getAttribute("data-nav"));
  link.appendChild(linkText);
  li.appendChild(link);
  ul.appendChild(li);
}
// Helper Function to remove the active class from sections

sections.forEach(function (ele) {
  ele.classList.remove("your-active-class");
});
// Set sections as active on scrolling by adding "your-active-class" class to section with getBoundingClientReact()
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
    // function to return the section to scroll to depending on data-nav attr
    function reele() {
      let Sec = "";
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].getAttribute("data-nav") === ele.innerHTML) {
          Sec = sections[i];
        }
      }
      return Sec;
    }
    // scroll to section on nav links click
    ele.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: reele().getBoundingClientRect().top + window.scrollY + 10,
        behavior: "smooth",
      });
    });
    // add active class on nav links on click
    ele.addEventListener("click", function (e) {
      links.forEach(function (ele) {
        ele.classList.remove("active");
      });
      e.target.classList.add("active");
    });
    // add active class on nav links on scroll
    document.addEventListener("scroll", function () {
      if (
        window.scrollY >=
          sections[0].getBoundingClientRect().y + window.scrollY &&
        window.scrollY <
          sections[0].getBoundingClientRect().bottom + window.scrollY
      ) {
        links.forEach(function (ele) {
          ele.classList.remove("active");
        });
        links[0].classList.add("active");
      } else if (
        window.scrollY >=
          sections[1].getBoundingClientRect().y + window.scrollY &&
        window.scrollY <
          sections[1].getBoundingClientRect().bottom + window.scrollY
      ) {
        links.forEach(function (ele) {
          ele.classList.remove("active");
        });
        links[1].classList.add("active");
      } else if (
        window.scrollY >=
          sections[2].getBoundingClientRect().y + window.scrollY &&
        window.scrollY <=
          sections[2].getBoundingClientRect().bottom + window.scrollY
      ) {
        links.forEach(function (ele) {
          ele.classList.remove("active");
        });
        links[2].classList.add("active");
      } else if (
        window.scrollY >=
        sections[3].getBoundingClientRect().y + window.scrollY
      ) {
        links.forEach(function (ele) {
          ele.classList.remove("active");
        });
        links[3].classList.add("active");
      }
    });
  });
});
