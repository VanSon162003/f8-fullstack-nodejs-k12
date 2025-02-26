const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const one = $("#one");
const two = $("#two");
const result = $("#result");

const add = $("#add");
const minus = $("#minus");
const core = $("#core");
const divide = $("#divide");

const btn = $(".btn");

let calc = null;

$("#form").onclick = function (e) {
    calc = null;

    if (e.target.closest('label[for="add"]')) {
        calc = +one.value + +two.value;
    }

    if (e.target.closest('label[for="minus"]')) {
        calc = +one.value - +two.value;
    }
    if (e.target.closest('label[for="core"]')) {
        calc = +one.value * +two.value;
    }

    if (e.target.closest('label[for="divide"]')) {
        if (+two.value === 0) return alert("khi chia số thứ 2 không được là 0");

        calc = +one.value / +two.value;
    }
};

function validate(n) {
    return +n === +n && typeof +n === "number";
}

btn.onclick = function (e) {
    e.preventDefault();
    let active = null;

    if (!validate(one.value) || !validate(two.value)) {
        return alert("bạn cần nhập số để tính toán");
    }

    if (one.value === "" || two.value === "") {
        return alert("hãy nhập số để tính toán");
    }

    if (calc === null) {
        return alert("hãy chọn phép tính nào đó để tính toán");
    }

    result.value = calc;
};
