document.addEventListener("DOMContentLoaded", function () {
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "سوف تلهو بنا الحياة",
    image: "1.PNG",
    price: 25,
  },
  {
    id: 2,
    name: "اسرار عائلية",
    image: "2.PNG",
    price: 30,
  },
  {
    id: 3,
    name: "les années prostates",
    image: "3.PNG",
    price: 50,
  },
  {
    id: 4,
    name: "بنية تونسية",
    image: "4.PNG",
    price: 20,
  },
  {
    id: 5,
    name: "هستيريا",
    image: "5.PNG",
    price: 25,
  },
  {
    id: 6,
    name: "L AMAS ARDENT",
    image: "6.PNG",
    price: 20,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;

  // Filtrez les produits de la carte en fonction de la recherche
  const filteredListCards = listCards.filter(card => {
    return card.name.toLowerCase().includes(searchInput.value.toLowerCase());
});

// Mettez à jour la liste de la carte de courses avec les produits filtrés
listCard.innerHTML = "";
filteredListCards.forEach((value, key) => {
    // ... Votre code pour ajouter les produits filtrés à la carte de courses ...
});
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

const searchInput = document.getElementById("searchInput");
    
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    // Filtrez les produits en fonction de la recherche
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchText);
    });

    // Mettez à jour la liste des produits affichés
    list.innerHTML = "";
    filteredProducts.forEach((value, key) => {
        // ... Votre code pour ajouter les produits filtrés à la liste ...
    });
});
});
