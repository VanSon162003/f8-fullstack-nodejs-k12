/***
 * DOM tree có 3 node chính:
 * 1. Element node
 * 2. Attribute node
 * 3. text node
 */

// console.log(typeof document);

/***
 * Phương thức truy xuất phần tử của DOM
 */

// const h1 = document.getElementById("h1");
// h1.class = "h1";

// console.log({ h1 });

// const p = document.querySelector("div > p");

// console.log(p);

/**
 * createElement: tạo ra một nốt
 * appendChild: thêm một nốt vào thẻ cha có sẵn
 * removeChild: xoá 1 nốt ở thẻ cha
 * replaceChild: thay thế nốt ở thẻ cha
 */

// const ol = document.querySelector("ol");

// const liElement5 = document.createElement("li");
// const li = document.createElement("li");
// li.innerText = "hehe";
// liElement5.innerText = "item 5";

// ol.appendChild(liElement5);
// ol.replaceChild(li, liElement5);
// ol.removeChild(liElement5);

const user = [
    { id: 1, name: "hoang" },
    { id: 3, name: "thang" },
    { id: 2, name: "dung" },
    { id: 4, name: "son" },
    { id: 6, name: "minh" },
    { id: 5, name: "ha" },
];

const result = user.sort((a, b) => a.id - b.id);

// console.log(user);

const olElement = document.createElement("ol");

result.forEach((e) => {
    olElement.innerHTML += `<li>${e.name}</li>`;
});

// console.log({ olElement });

document.body.appendChild(olElement);

const product = [
    { id: 1, title: "Samsung Galaxy 19", price: 2000, qnt: 2 },
    { id: 2, title: "iphone Galaxy 19", price: 1200, qnt: 1 },
    { id: 3, title: "iphone 19", price: 3000, qnt: 2 },
    { id: 4, title: "iphone 17", price: 1000, qnt: 3 },
    { id: 5, title: "iphone 16", price: 5000, qnt: 1 },
];

const div = document.createElement("div");

const div2 = document.createElement("div");
const div3 = document.createElement("div");

let total = 0;

div2.innerHTML += `Tên Sản Phẩm<br>`;
div3.innerHTML += `Giá<br>`;

product.forEach((e) => {
    div2.innerHTML += `${e.title}:<br>`;
    div3.innerHTML += `${e.price * e.qnt}<br>`;

    total += e.price * e.qnt;
});

div2.innerHTML += "Tổng:";
div3.innerHTML += `${total}`;

div.appendChild(div2);
div.appendChild(div3);

div2.style.lineHeight = "30px";
div3.style.lineHeight = "30px";

div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.border = "1px solid #ccc";
div.style.padding = "10px";

document.body.appendChild(div);
