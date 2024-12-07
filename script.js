document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".menu-image");
  const burgerMenu = document.getElementById("burgerMenu");
  const menuDetails = document.getElementById("menuDetails");
  const closeMenuButton = document.querySelector(".close-menu");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const packageName = image.getAttribute("data-package");
      menuDetails.textContent = `You selected ${packageName}`;
      burgerMenu.classList.add("active");
    });
  });

  closeMenuButton.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (!burgerMenu.contains(e.target) && !e.target.closest(".menu-image")) {
      burgerMenu.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const orderButton = document.getElementById("orderButton");
  const popupWindow = document.getElementById("popupWindow");
  const closePopup = document.getElementById("closePopup");

  orderButton.addEventListener("click", (e) => {
    e.preventDefault();
    popupWindow.classList.add("active");
  });

  closePopup.addEventListener("click", () => {
    popupWindow.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (!popupWindow.contains(e.target) && e.target !== orderButton) {
      popupWindow.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const orderButtonSatay = document.getElementById("orderButtonSatay");
  const popupsWindowSatay = document.getElementById("popupsWindowSatay");
  const closePopupsSatay = document.getElementById("closePopupsSatay");

  orderButtonSatay.addEventListener("click", (e) => {
    e.preventDefault();
    popupsWindowSatay.classList.add("active");
  });

  closePopupsSatay.addEventListener("click", () => {
    popupsWindowSatay.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !popupsWindowSatay.contains(e.target) &&
      e.target !== orderButtonSatay
    ) {
      popupsWindowSatay.classList.remove("active");
    }
  });
});
