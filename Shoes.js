const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// Slider logic...

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current sildes
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currrentProductSizes = document.querySelectorAll(".size");

/* Product Array */
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./Img/blackshoes.jpg",
      },
      {
        code: "darkblue",
        img: "./Img/blueshoes.jpg",
      },
    ],
  },

  {
    id: 2,
    title: "Air Jordan",
    price: 159,
    colors: [
      {
        code: "lightgrey",
        img: "./Img/greyshoes.jpg",
      },
      {
        code: "green",
        img: "./Img/greenshoes.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];
// console.log(choosenProduct);


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    // change the choosen product
    choosenProduct = products[index];

    // change Texts of a current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
  });
});

//changing new colors after choosing a product..
currentProductColors.forEach((color, index) => {
  color.style.backgroundColor = choosenProduct.colors[index].code;
});

// changing an image after choosing a color...
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


// choosing a size among the given sizes...
currrentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currrentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// BuyNow ! Logic..
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex";
})

close.addEventListener("click",()=>{
    payment.style.display = "none"
})


/*
const jardon = document.querySelector(".menuItem:nth-child(2)");
jardon.addEventListener('click' , ()=>{
    wrapper.style.tranform = "translateX(-200vw)"
})
wrapper.style.tranform = "translateX(-100vw)"
wrapper.style.tranform = "translateX(-200vw)"
wrapper.style.tranform = "translateX(-300vw)"
wrapper.style.tranform = "translateX(-400vw)"
*/
