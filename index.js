const links = document.querySelectorAll(".list-el");
const container = document.querySelector(".nav-link-holder");
const cards = document.querySelectorAll(".card");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active");
  });
});

IntersectionObserver 

let options = {
  threshold: 0.7,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((el) => el.classList.remove("active"));
      const id = entry.target.getAttribute("data-name");
      console.log(id);
      // console.log(appendClass);
      const appendClass = document
        .querySelector(`li[id=${id}]`)
        .classList.add("active");
      console.log(appendClass);
      // this is where I want to append active
      // <li id="top" class="list-el"></li>
    }
  });
};

let observer = new IntersectionObserver(callback, options);

cards.forEach((card) => observer.observe(card));
//if section is intersecting
//add class of active to corresponding link
