const menu = [
    {
        id: 1,
        name: "Home",
        parentId: 0,
    },
    {
        id: 2,
        name: "About",
        parentId: 0,
    },
    {
        id: 3,
        name: "News",
        parentId: 0,
    },
    {
        id: 4,
        name: "Products",
        parentId: 0,
    },
    {
        id: 5,
        name: "Contact",
        parentId: 0,
    },
    {
        id: 6,
        name: "T-Shirt",
        parentId: 4,
    },
    {
        id: 7,
        name: "Jean",
        parentId: 4,
    },
    {
        id: 8,
        name: "Skirt",
        parentId: 4,
    },

    {
        id: 9,
        name: "Skirt",
        parentId: 2,
    },

    {
        id: 10,
        name: "Skirt",
        parentId: 6,
    },

    {
        id: 11,
        name: "Skirt",
        parentId: 1,
    },

    {
        id: 12,
        name: "Skirt",
        parentId: 0,
    },

    {
        id: 13,
        name: "Skirt",
        parentId: 6,
    },
    {
        id: 14,
        name: "Skirt",
        parentId: 7,
    },
];

function renderMenu(arr) {
    if (!Array.isArray(arr)) return "Invalid";

    let result = "";

    arr.forEach((item) => {
        result += `<li id="${item.id}">
        <a href="#">${item.name}</a>
    </li>`;
    });

    document.write(`<ul>${result}</ul>`);

    const ul = document.querySelector("ul");
    // console.log(ul);

    // ul.removeChild();

    arr.forEach((item) => {
        if (item.parentId !== 0) {
            const li = document.querySelector(`li[id="${item.parentId}"]`);
            const liItem = document.querySelector(`li[id="${item.id}"]`);
            const ulItem = document.createElement("ul");

            // console.log(li);

            ul.removeChild(liItem);
            // console.log(liItem);
            ulItem.appendChild(liItem);
            // console.log(ulItem);

            li.appendChild(ulItem);
        }
    });
}

renderMenu(menu);
// console.log(123);
