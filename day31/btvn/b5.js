const categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
        slug: "chuyen-muc-1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
        slug: "chuyen-muc-2",
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
        slug: "chuyen-muc-3",
    },
    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
        slug: "chuyen-muc-2-1",
    },
    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
        slug: "chuyen-muc-2-2",
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
        slug: "chuyen-muc-2-3",
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
        slug: "chuyen-muc-3-1",
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
        slug: "chuyen-muc-3-2",
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
        slug: "chuyen-muc-3-3",
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
        slug: "chuyen-muc-2-2-1",
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
        slug: "chuyen-muc-2-2-2",
    },
];

const ul = document.querySelector(".menu");

function renderCate() {
    const cateArr = [];
    const cateObj = {};

    categories.forEach((cate) => {
        cateObj[cate.id] = { ...cate, children: [] };

        if (cate.parent === 0) {
            cateArr.push(cateObj[cate.id]);
        } else {
            cateObj[cate.parent].children.push(cateObj[cate.id]);
        }
    });

    return cateArr;
}

const cateArr = renderCate();

function renderMenu(tree, i = 0) {
    let ul = document.createElement("ul");
    ul.className = i === 0 ? "real_menu" : "submenu";

    tree.forEach((category) => {
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = `/${category.slug}`;
        link.textContent = category.name;
        li.appendChild(link);

        if (category.children.length > 0) {
            li.appendChild(renderMenu(category.children, (i = 1)));
        }

        ul.appendChild(li);
    });

    return ul;
}

ul.appendChild(renderMenu(cateArr));
