const links = document.querySelectorAll(".nav-link");
const container = document.querySelector(".nav-link-holder");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active")
  });
});



// addMiddle = () => {
//  links.forEach((el) => el.classList.toggle("middle")) 
// }

// container.addEventListener("mouseover", (addMiddle));
// container.addEventListener("mouseout", (addMiddle));

















