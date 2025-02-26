const table = document.querySelector("#table");

const render = document.querySelector(".render");

const carts = JSON.parse(localStorage.getItem("carts")) ?? [];

const updateBtn = document.createElement("button");
updateBtn.innerText = "Cập nhật giỏ hàng";

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Xoá giỏ hàng";

function save() {
    return localStorage.setItem("carts", JSON.stringify(carts));
}

function renderList() {
    if (carts.length === 0) {
        render.innerText = "Giỏ hàng không có sản phẩm nào";
        return;
    } else {
        render.innerText = "";
    }

    let sum = 0;
    let sumQnt = 0;

    carts.forEach((cart) => {
        sum += cart.price * cart.qnt;
        sumQnt += cart.qnt;
    });

    const cartsTable = document.createElement("table");
    cartsTable.className = "new_table";

    const bodyTable = carts
        .map((cart, i) => {
            return `
            <tr data-id="${i}">
                <td>${i + 1}</td>
                <td>${cart.sp}</td>
                <td>${cart.price}</td>
                <td><input type="number" value="${cart.qnt}"></td>
                <td>${cart.price * cart.qnt}</td>
                <td><button>Xoá</button></td>
            </tr>
        `;
        })
        .join("");

    cartsTable.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xoá</th>
        </tr>
        ${bodyTable}

        <tr>
            <td colspan="3">Tổng</td>
            <td>${sumQnt}</td>
            <td colspan="2">${sum}</td>
        </tr>
    `;

    render.append(cartsTable, updateBtn, deleteBtn);

    return render;
}
renderList();
save();

updateBtn.onclick = function (e) {
    const check = confirm("bạn có muốn cập nhật không");

    if (check) {
        const value = e.target.parentElement.querySelectorAll(
            'input[type="number"]'
        );
        value.forEach((item, i) => {
            carts[i].qnt = +item.value;
        });

        renderList();
        save();
    }
};

deleteBtn.onclick = function (e) {
    const check = confirm("bạn có muốn xoá hết giỏ hàng không");

    if (check) {
        carts.splice(0, carts.length);
        renderList();
        save();
    }
};

let active = null;

table.onclick = function (e) {
    if (e.target.matches(".btn")) {
        const parent1 = e.target.parentElement;
        const parent2 = e.target.parentElement.parentElement;

        let qnt = +parent1.querySelector('input[name="number"]').value;
        const sp = parent2.querySelector("td[data-sp]").innerText;
        const price = +parent2.querySelector("td[data-price]").innerText;

        if (qnt <= 0) qnt = 1;
        const existingCart = carts.find((cart) => cart.sp === sp);

        if (existingCart) {
            existingCart.qnt += qnt;
        } else {
            carts.push({ sp, price, qnt });
        }
        save();

        const renderNew = renderList();

        if (active && renderNew !== active) {
            active.remove();
        }

        active = renderNew;
    }
};

document.onclick = function (e) {
    if (e.target.parentElement.parentElement.parentElement.parentElement) {
        if (
            e.target.parentElement.parentElement.parentElement.parentElement.matches(
                ".new_table"
            )
        ) {
            const check = confirm("bạn có muốn xoá hết không");

            if (check) {
                if (e.target.matches("button")) {
                    const parentButton = e.target.parentElement.parentElement;
                    const parentButtonId = +parentButton.dataset.id;
                    carts.splice(parentButtonId, 1);

                    renderList();
                    save();
                }
            }
        }
    }
};
