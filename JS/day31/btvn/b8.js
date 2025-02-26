function validate(n) {
    return typeof +n === "number" && +n === +n && +n > 0;
}

const sum = document.querySelector("#sum");
const number = document.querySelector("#number");
const tip = document.querySelector("#tip");
const render = document.querySelector(".render");
const btn = document.querySelector(".btn");

function renderTip() {
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const container = document.createElement("div");

    if (sum.value === "" || number.value === "") {
        return alert("hãy nhập đầy đủ 2 trường đầu để tính toán");
    }

    if (+sum.value <= 0 || +number.value <= 0) {
        return alert("2 trường đầu cần nhập lớp hơn 0");
    }
    if (
        validate(!sum.value) ||
        !validate(number.value) ||
        typeof +tip.value !== "number" ||
        +tip.value !== +tip.value
    ) {
        return alert("các trường trên cần nhập là số");
    }

    if (!Number.isInteger(+number.value)) {
        return alert("trường số 2 cần nhập số nguyên");
    }
    if (+tip.value > +sum.value) {
        return alert("tiền tip cần nhập phải nhỏ hơn hoặc bằng tổng bill");
    }

    const calc = (+sum.value + +tip.value) / number.value;

    p1.innerText = `Mỗi người cần trả: ${calc} VND`;
    p2.innerText = `Tổng số tiền cần trả: ${+sum.value + +tip.value} VND`;

    container.append(p1, p2);
    render.append(container);
    return container;
}

let active = null;

btn.onclick = function (e) {
    e.preventDefault();

    const contain = renderTip();

    if (active && active !== contain) {
        active.remove();
    }

    active = contain;
};
