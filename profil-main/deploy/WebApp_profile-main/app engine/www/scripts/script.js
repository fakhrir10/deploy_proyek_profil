function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop - 50, 
      behavior: 'smooth',
    });
  }

  const links = document.querySelectorAll('ul li a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      smoothScroll(targetId);
    });
  });
// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();