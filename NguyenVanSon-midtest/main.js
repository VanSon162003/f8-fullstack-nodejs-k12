const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const formStudent = $("#form_student");
const ulStudent = $("#render_student");

const nameForm = $("input[name='name']");
console.log(nameForm);

const mathScore = $("input[name='math']");
const englishScore = $("input[name='english']");
const scienceScore = $("input[name='science']");

const srach = $("#srach");

srach.onclick = function (e) {
    const value = nameForm.value.trim();
    if (!value) return alert("hãy nhập họ tên để tìm kiếm");

    fetch(`${url}?q=${value}`)
        .then((res) => res.json())
        .then((data) => alert("có thử bạn tìm"))
        .catch((er) => console.log(er));
};

function validate(n) {
    return n === n && typeof n === "number" && n >= 0;
}

const url = "http://localhost:3000/students";

const getApi = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    return data;
};

function render(data) {
    getApi().then((data) => {
        const html = data
            .map((item) => {
                return `
                 <li data-index="${item.id}">
                    <span class="name">${item.name}</span>
                    <span class="math">${item.math}</span>
                    <span class="english">${item.english}</span>
                    <span class="science">${item.science}</span>
                    <span>${totalScore(
                        item.math,
                        item.english,
                        item.science
                    )}</span>
                    <button class="btn_delete">xoá</button>
                    <button class="btn_edit">sửa</button>
                </li>
            `;
            })
            .join("");

        ulStudent.innerHTML = html;
    });
}

render();

function totalScore(a, b, c) {
    return Math.floor((a + b + c) / 3);
}

ulStudent.onclick = function (e) {
    const index = +e.target.parentElement.dataset.index;
    if (e.target.closest(".btn_delete")) {
        const check = confirm("bạn có muốn xoá không?");

        if (check) {
            deleteStudent(index);
        }
    }

    if (e.target.closest(".btn_edit")) {
        const name = e.target.parentElement.querySelector(".name").innerText;
        const mathB = +e.target.parentElement.querySelector(".math").innerText;
        const englishB =
            +e.target.parentElement.querySelector(".english").innerText;
        const scienceB =
            +e.target.parentElement.querySelector(".science").innerText;

        let math = prompt("nhập lại điểm toán", mathB);
        let english = prompt("nhập lại điểm toán", englishB);
        let science = prompt("nhập lại điểm toán", scienceB);

        if (math === null) {
            math = mathB;
        } else {
            math = +math;
        }
        if (english === null) {
            english = englishB;
        } else {
            english = +english;
        }

        if (science === null) {
            science = scienceB;
        } else {
            science = +science;
        }
        const content = {
            name,
            math,
            english,
            science,
        };

        updateStudent(content, index, (data) => {
            render(data);
        });
    }
};

formStudent.onsubmit = function (e) {
    e.preventDefault();

    const name = nameForm.value.trim();
    const math = +mathScore.value.trim();
    const english = +englishScore.value.trim();
    const science = +scienceScore.value.trim();

    if (!validate(math) || !validate(english) || !validate(science)) {
        return alert("các trường cần nhập phải là số!");
    }

    if (!math || !english || !science || !name) {
        return alert("mời nhập đầy đủ các trường");
    }

    const content = {
        name,
        math,
        english,
        science,
    };

    createStudent(content, (data) => {
        render();
    });
};

function updateStudent(content, index, callback) {
    fetch(`${url}/${index}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",

        body: JSON.stringify(content),
    })
        .then((res) => res.json())
        .then(callback);
}

function createStudent(content, callback) {
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",

        body: JSON.stringify(content),
    })
        .then((res) => res.json())
        .then(callback);
}

function deleteStudent(index) {
    fetch(`${url}/${index}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "DELETE",
    })
        .then((res) => res.json())
        .then(render());
}
