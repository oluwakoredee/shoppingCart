let shop = document.getElementById("shop");

let shopItemData = [
  {
    id: "hjnmdjfnk",
    name: "Casual Shirt",
    price: 45,
    image: "images/img-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.",
  },
  {
    id: "huygkdfmjkf",
    name: "Office Shirt",
    price: 100,
    image: "images/img-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.",
  },
  {
    id: "qeqifngnjkf",
    name: "T Shirt",
    price: 50,
    image: "images/img-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.",
  },
  {
    id: "momrpmjirjkf",
    name: "Men Suit",
    price: 300,
    image: "images/img-4.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((x) => {
        // destructuring x
        let{id, name, price, image, description} = x
      return `<div id=product-id-${id} class="item">
        <img class="imgs" src=${image} alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${description}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">0</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(""));
};

generateShop(shop);

let increment = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id)
};
let decrement = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id)
};
let update = () => {};