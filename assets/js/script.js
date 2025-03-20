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

// Box User - Section 1
const boxUserSection1 = document.querySelector(
  ".section-1 .inner-form .inner-user"
);
if (boxUserSection1) {
  const input = boxUserSection1.querySelector(".inner-input");

  // Show Box Quantity Suggest
  input.addEventListener("focus", () => {
    boxUserSection1.classList.add("active");
  });

  // Hide Box Quantity Suggest
  document.addEventListener("click", (event) => {
    if (!boxUserSection1.contains(event.target)) {
      boxUserSection1.classList.remove("active");
    }
  });

  // Increase/Decrease Quantity input value
  const updateQuantityInput = () => {
    const listBoxNumber = boxUserSection1.querySelectorAll(
      ".inner-count .inner-number"
    );
    const listNumber = [];
    listBoxNumber.forEach((boxNumber) => {
      const number = parseInt(boxNumber.innerHTML);
      listNumber.push(number);
    });

    const value = `Adult: ${listNumber[0]} - Child: ${listNumber[1]} - Infant: ${listNumber[2]}`;
    input.value = value;
  };

  // Resolve onClick event for "+" button
  const listButtonUp = boxUserSection1.querySelectorAll(
    ".inner-count .inner-up"
  );
  listButtonUp.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentNode;
      const boxNumber = parent.querySelector(".inner-number");
      const number = parseInt(boxNumber.innerHTML);
      const numberUpdate = number + 1;
      boxNumber.innerHTML = numberUpdate;
      updateQuantityInput();
    });
  });

  // Resolve onClick event for "-" button
  const listButtonDown = boxUserSection1.querySelectorAll(
    ".inner-count .inner-down"
  );
  listButtonDown.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentNode;
      const boxNumber = parent.querySelector(".inner-number");
      const number = parseInt(boxNumber.innerHTML);
      if (number > 0) {
        const numberUpdate = number - 1;
        boxNumber.innerHTML = numberUpdate;
        updateQuantityInput();
      }
    });
  });
}
// End Box User - Section 1
