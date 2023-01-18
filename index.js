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
  threshold: 0.5,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".list-el").classList.remove("active");
      const id = entry.target.getAttribute("data-name");
      console.log(id);
      var appendClass = document
        .querySelector(`li[id="${id}]"`)
        .classList.add("active");
      console.log(appendClass);
      // this is where I want to append active
      // <li id="top" class="list-el"></li>
    }
  });
};

let observer = new IntersectionObserver(callback, options);


