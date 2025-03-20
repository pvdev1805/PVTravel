// Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");
if (buttonMenuMobile) {
  const menu = document.querySelector(".header .inner-menu");

  //   Display Menu when user click on Menu Mobile button
  buttonMenuMobile.addEventListener("click", () => {
    menu.classList.add("active");
  });

  //   Hide Menu when user click on the Overlay
  const overlay = menu.querySelector(".inner-overlay");
  if (overlay) {
    overlay.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  }

  //   Display SubMenu when user click on the down arrow
  const listButtonSubMenu = menu.querySelectorAll("ul > li > i");
  if (listButtonSubMenu) {
    listButtonSubMenu.forEach((button) => {
      button.addEventListener("click", () => {
        button.parentNode.classList.toggle("active");
      });
    });
  }
}
// End Menu Mobile
