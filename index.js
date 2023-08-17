document.addEventListener("DOMContentLoaded", function () {
  const portfolioLeft = document.querySelector(".portfolios__left");
  const portfolioRight = document.querySelectorAll(".portfolio");
  const li = document.querySelectorAll(".portfolios__left li");

  portfolioLeft.addEventListener("click", function (e) {
    if (e.target.tagName == "A") {
      e.preventDefault();
      const targetId = e.target.getAttribute("href");

      portfolioRight.forEach((content) => {
        content.style.display = "none";
      });

      li.forEach((item) => {
        item.classList.remove("active");
      });

      e.target.parentElement.classList.add("active");

      const targetContent = document.querySelector(targetId);
      if (targetContent) {
        targetContent.style.display = "block";
      }
    }
  });
});

//==================== Nav toggle ===================//

const navMenu = document.querySelector(".nav__menu");
const navOpenToggle = document.querySelector(".nav__toggle-open");
const navCloseToggle = document.querySelector(".nav__toggle-close");

navOpenToggle.addEventListener("click", () => {
  navMenu.style.display = "flex";
  navOpenToggle.style.display = "none";
  navCloseToggle.style.display = "inline-block";
});

navCloseToggle.addEventListener("click", () => {
  navMenu.style.display = "none";
  navOpenToggle.style.display = "inline-block";
  navCloseToggle.style.display = "none";
});

const navItems = navMenu.querySelectorAll("a");
if (window.innerWidth < 768) {
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navMenu.style.display = "none";
      navOpenToggle.style.display = "inline-block";
      navCloseToggle.style.display = "none";
    });
  });
}

const themeBtn = document.querySelector(".nav__theme-btn");

themeBtn.addEventListener("click", () => {
  let bodyClass =document.body.className;
  if(!bodyClass){
    bodyClass = "dark";
    document.body.className = bodyClass;

    themeBtn.innerHTML = '<i class="uil uil-sun"></i>';

    window.localStorage.setItem("theme", bodyClass);
  }else{
    bodyClass = "";
    document.body.className = bodyClass;

    themeBtn.innerHTML = '<i class="uil uil-moon"></i>';

    window.localStorage.setItem("theme", bodyClass);
  }
})

//load theme on load
window.addEventListener("load", () => {
  document.body.className = window.localStorage.getItem("theme");
})