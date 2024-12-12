const mainOrderBtn = document.getElementById("mainOrderBtn");
mainOrderBtn.addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth",
  });
});

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", () => {
    const targetId = menuLink.getAttribute("data-goto");
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const itemBtns = document.querySelectorAll(".products__item .btn");

itemBtns.forEach(itemBtn => {
  itemBtn.addEventListener("click", () => {
    document.getElementById("order").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const itemPrices = document.getElementsByClassName("products__price");

document.getElementById("changeCurrency").addEventListener("click", event => {
  const currentCurrency = event.target.innerText;

  let newCurrency;
  let coefficient;

  switch (currentCurrency) {
    case "$":
      newCurrency = "₽";
      coefficient = 90;
      break;
    case "₽":
      newCurrency = "BYN";
      coefficient = 3;
      break;
    case "BYN":
      newCurrency = "€";
      coefficient = 5;
      break;
    case "€":
      newCurrency = "¥";
      coefficient = 12;
      break;
    default:
      newCurrency = "$";
      coefficient = 1;
  }

  event.target.innerText = newCurrency;

  for (let i = 0; i < itemPrices.length; i++) {
    itemPrices[i].innerText = +(
      itemPrices[i].getAttribute("data-base-price") * coefficient
    ).toFixed(1) + " " + newCurrency;
  }
});

const orderForm = document.getElementById("order");
const productName = orderForm.elements.productName;
const name = orderForm.elements.name;
const phone = orderForm.elements.phone;

orderForm.addEventListener("submit", event => {
  event.preventDefault();

  let hasError = false;

  [productName, name, phone].forEach(input => {
    if (!input.value) {
      input.style.borderColor = "#FF0000";
      hasError = true;
    } else {
      input.style.borderColor = "";
    }
  });

  if (!hasError) {
    [productName, name, phone].forEach(input => {
      input.value = "";
    });
    alert("Спасибо за заказ!");
  }
});
