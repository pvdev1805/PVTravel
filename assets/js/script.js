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

// Box Address - Section 1
const boxAddressSection1 = document.querySelector(
  ".section-1 .inner-form .inner-address"
);
if (boxAddressSection1) {
  // Show/Hide Box Suggest
  const input = boxAddressSection1.querySelector(".inner-input");

  input.addEventListener("focus", () => {
    boxAddressSection1.classList.add("active");
  });

  input.addEventListener("blur", () => {
    boxAddressSection1.classList.remove("active");
  });

  // Choose Address by click on the Suggest Item
  const listItem = boxAddressSection1.querySelectorAll(
    ".inner-suggest-list .inner-item"
  );
  if (listItem.length > 0) {
    listItem.forEach((item) => {
      item.addEventListener("mousedown", () => {
        const title = item.querySelector(".inner-item-title").innerHTML.trim();
        input.value = title;
      });
    });
  }
}
// End Box Address - Section 1
