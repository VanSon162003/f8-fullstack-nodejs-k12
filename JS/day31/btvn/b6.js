const categories = [
    {
        id: 1,
        name: "Electronics",
        slugs: "electronics",
        children: [
            {
                id: 2,
                name: "Laptops",
                slugs: "laptops",
                children: [
                    {
                        id: 3,
                        name: "Apple",
                        slugs: "apple",
                    },
                    {
                        id: 4,
                        name: "Dell",
                        slugs: "dell",
                    },
                ],
            },
            {
                id: 5,
                name: "Headphones",
                slugs: "headphones",
            },
        ],
    },
    {
        id: 6,
        name: "Books",
        slugs: "books",
        children: [
            {
                id: 7,
                name: "Fiction",
                slugs: "fiction",
                children: [
                    {
                        id: 8,
                        name: "Thrillers",
                        slugs: "thrillers",
                    },
                    {
                        id: 9,
                        name: "Mystery",
                        slugs: "mystery",
                    },
                ],
            },
            {
                id: 10,
                name: "Non-Fiction",
                slugs: "non-fiction",
            },
        ],
    },
];

function renderMenu(arr, hrefCate = "/", i = 0) {
    if (!Array.isArray(categories)) return;

    const ul = document.createElement("ul");
    ul.className = i === 0 ? "parent_menu" : "submenu";

    arr.forEach((category) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = category.name;
        hrefCate += category.slugs;
        a.href = hrefCate;
        li.appendChild(a);

        if (category.children && category.children.length > 0) {
            li.appendChild(
                renderMenu(category.children, hrefCate + "/", (i = 1))
            );
        }

        ul.appendChild(li);
    });

    return ul;
}

const menu = document.querySelector(".menu");
menu.appendChild(renderMenu(categories));
