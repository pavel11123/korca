const mediaQueryBtn = window.matchMedia("(min-width: 601px)");
if (mediaQueryBtn.matches) {
  function cakehover() {
    const cake = document.querySelector(".cake");
    cake.classList.add("article");
    cake.classList.remove("article1");
  }

  function cakeout() {
    const cake = document.querySelector(".cake");
    cake.classList.add("article1");
    cake.classList.remove("article");
  }
}

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
let left = document.querySelectorAll(".element-animation-left");
let right = document.querySelectorAll(".element-animation-right");
let cart1 = document.querySelectorAll(".element-animation-cart1");
let cart2 = document.querySelectorAll(".element-animation-cart2");
let cart3 = document.querySelectorAll(".element-animation-cart3");
let cart4 = document.querySelectorAll(".element-animation-cart4");
let cart5 = document.querySelectorAll(".element-animation-cart5");
let cart6 = document.querySelectorAll(".element-animation-cart6");
let cart7 = document.querySelectorAll(".element-animation-cart7");
let cart8 = document.querySelectorAll(".element-animation-cart8");
let cart9 = document.querySelectorAll(".element-animation-cart9");

for (let elm of elements) {
  observer.observe(elm);
}

for (let elm of left) {
  observer.observe(elm);
}

for (let elm of right) {
  observer.observe(elm);
}

for (let elm of cart1) {
  observer.observe(elm);
}

for (let elm of cart2) {
  observer.observe(elm);
}

for (let elm of cart3) {
  observer.observe(elm);
}

for (let elm of cart4) {
  observer.observe(elm);
}

for (let elm of cart5) {
  observer.observe(elm);
}

for (let elm of cart6) {
  observer.observe(elm);
}

for (let elm of cart7) {
  observer.observe(elm);
}

for (let elm of cart8) {
  observer.observe(elm);
}

for (let elm of cart9) {
  observer.observe(elm);
}
