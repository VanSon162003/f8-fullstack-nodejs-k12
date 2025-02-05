const dataMenu = [
    { id: 1, name: "Trang chủ", slug: "/" },
    { id: 2, name: "Sản phẩm", slug: "/san-pham" },
    { id: 3, name: "Bài viết", slug: "/bai-viet" },
    { id: 4, name: "Lập trình C++", slug: "/lap-trinh-c", parentId: 3 },
];

dataMenu.sort((a, b) => a.parentId - b.parentId);

const nav = document.createElement("nav");
const ul = document.createElement("ul");

const html = dataMenu
    .map((item, index) => {
        let slugContent = item.slug;

        return `<li id="${index}">
        <a href="${slugContent === "/" ? "he" : "hi"}">${item.name}</a>
    </li>`;
    })
    .join("");

ul.innerHTML = html;

document.body.appendChild(ul);

dataMenu.forEach((item) => {
    if (item.parentId) {
        const li = document.querySelector(`li[id="${item.parentId - 1}"]`);
        const liItem = document.querySelector(`li[id="${item.id - 1}"]`);
        const ulItem = document.createElement("ul");

        console.log(li, liItem, ulItem);

        ul.removeChild(liItem);
        ulItem.appendChild(liItem);
        li.appendChild(ulItem);
    }
});
