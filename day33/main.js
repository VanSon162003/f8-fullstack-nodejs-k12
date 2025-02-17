//fetch ap

// fetch("http://localhost:3000/products")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         const ul = document.createElement("ul");
//         console.log(data);

//         const html = data
//             .map((item) => {
//                 return `<li>
//                 <h2>${item.title}</h2>
//                 <p>${item.description}</p>
//                 <img src="${item.thumbnail}">
//                 <p>Giá: ${item.price}$</p>
//             </li>`;
//             })
//             .join("");

//         ul.innerHTML = html;

//         document.body.appendChild(ul);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
