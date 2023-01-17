const links = document.querySelectorAll(".nav-link");



links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active")
  });
});
