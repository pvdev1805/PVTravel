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

// Clock Expire - Section 2
const clockExpire = document.querySelector("[clock-expire]");

if (clockExpire) {
  const expireDateTimeString = clockExpire.getAttribute("clock-expire");

  // Convert DateTime String to DateTime Object
  const expireDateTime = new Date(expireDateTimeString);

  // Function to update Clock Expire
  const updateClock = () => {
    const now = new Date();
    const remainingTime = expireDateTime - now;

    if (remainingTime > 0) {
      // Calculate remaining days
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

      // Calculate remaining hours
      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

      // Calculate remaining minutes
      const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);

      // Calculate remaining seconds
      const seconds = Math.floor((remainingTime / 1000) % 60);

      const listBoxNumber = clockExpire.querySelectorAll(".inner-number");
      listBoxNumber[0].innerHTML = `${days}`.padStart(2, "0");
      listBoxNumber[1].innerHTML = `${hours}`.padStart(2, "0");
      listBoxNumber[2].innerHTML = `${minutes}`.padStart(2, "0");
      listBoxNumber[3].innerHTML = `${seconds}`.padStart(2, "0");
    } else {
      clearInterval(intervalClock);
    }
  };

  // Call the updateClock function every 1 second
  const intervalClock = setInterval(updateClock, 1000);
}
// End Clock Expire - Section 2

// Box Filter - Section 9
const buttonFilterMobile = document.querySelector(
  ".section-9 .inner-filter-mobile"
);

if (buttonFilterMobile) {
  const boxLeft = document.querySelector(".section-9 .inner-left");

  buttonFilterMobile.addEventListener("click", () => {
    boxLeft.classList.add("active");
  });

  const overlay = document.querySelector(
    ".section-9 .inner-left .inner-overlay"
  );
  overlay.addEventListener("click", () => {
    boxLeft.classList.remove("active");
  });
}
// End Box Filter - Section 9

// Box Tour Info - Section 10
const boxTourInfo = document.querySelector(".section-10 .box-tour-info");
if (boxTourInfo) {
  const buttonViewMore = boxTourInfo.querySelector(".inner-read-more button");

  buttonViewMore.addEventListener("click", () => {
    if (boxTourInfo.classList.contains("active")) {
      boxTourInfo.classList.remove("active");
      buttonViewMore.innerHTML = "View More";
    } else {
      boxTourInfo.classList.add("active");
      buttonViewMore.innerHTML = "View Less";
    }
  });
}
// End Box Tour Info - Section 10

// Initialize AOS
AOS.init();
// End Initialize AOS
