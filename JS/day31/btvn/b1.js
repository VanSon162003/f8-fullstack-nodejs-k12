const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

const taskList = $("#task-list");
const taskListDone = $("#task-list-done");
const taskListNotDone = $("#task-list-not-done");
const todoInput = $("#todo-input");
const submit = $("#submit");
const form = $("#todo-form");
const taskMenu = $("#task-menu");
const filterDone = $("#filter-done");
const filterNotDone = $("#filter-not-done");

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render(taskArray, container) {
    if (!container) return;

    if (!taskArray.length) {
        container.innerHTML = `<li class="empty">Không có công việc nào</li>`;
        return;
    }

    container.innerHTML = taskArray
        .map(
            (task, index) => `
        <li class="task-item ${
            task.completed ? "completed" : ""
        }" data-index="${index}">
            <span class="task-title">${task.title}</span>
            <div class="task-action">
                <button class="task-btn edit">Sửa</button>
                <button class="task-btn done">${
                    task.completed ? "Chưa hoàn thành" : "Hoàn thành"
                }</button>
                <button class="task-btn delete">Xoá</button>
            </div>
        </li>`
        )
        .join("");
}

render(tasks, taskList);

// Thêm công việc
function addTask(e) {
    e.preventDefault();
    const title = todoInput.value.trim();

    if (!title) return alert("Hãy nhập vào một công việc!");

    if (isDuplication(title)) return alert("Công việc này đã tồn tại!");

    tasks.push({
        title,
        completed: false,
    });

    todoInput.value = "";
    save();
    switchView("all");
}

// Kiểm tra trùng công việc
function isDuplication(title, index = -1) {
    return tasks.some(
        (task, i) =>
            i !== index && task.title.toLowerCase() === title.toLowerCase()
    );
}

// Xử lý sửa, hoàn thành và xoá công việc
function handleTaskAction(e) {
    const taskItem = e.target.closest(".task-item");
    if (!taskItem) return;

    const taskIndex = +taskItem.dataset.index;
    const task = tasks[taskIndex];

    if (e.target.classList.contains("edit")) {
        const newTitle = prompt("Sửa công việc:", task.title);
        if (newTitle === null) return;

        if (!newTitle.trim()) return alert("Hãy nhập một công việc hợp lệ!");

        if (isDuplication(newTitle, taskIndex))
            return alert("Công việc này đã tồn tại!");

        task.title = newTitle;
    }

    if (e.target.classList.contains("done")) task.completed = !task.completed;

    if (e.target.classList.contains("delete")) {
        if (confirm("Bạn có chắc chắn muốn xoá công việc này không?")) {
            tasks.splice(taskIndex, 1);
        }
    }

    save();
    switchView("all");
    switchView("done");
    switchView("not-done");
}

// Sự kiện click trên danh sách công việc
taskList.addEventListener("click", handleTaskAction);
taskListDone.addEventListener("click", handleTaskAction);
taskListNotDone.addEventListener("click", handleTaskAction);

// Lọc công việc
function filterTasks(isCompleted) {
    return tasks.filter((task) => task.completed === isCompleted);
}

// Chuyển đổi hiển thị danh sách
function switchView(view) {
    taskList.classList.add("none");
    taskListDone.classList.add("none");
    taskListNotDone.classList.add("none");

    if (view === "done") {
        render(filterTasks(true), taskListDone);
        taskListDone.classList.remove("none");
        return;
    }
    if (view === "not-done") {
        render(filterTasks(false), taskListNotDone);
        taskListNotDone.classList.remove("none");
        return;
    }
    render(tasks, taskList);
    taskList.classList.remove("none");
}

// Gán sự kiện bộ lọc
filterDone.onclick = (e) => {
    e.preventDefault();
    switchView("done");
};

filterNotDone.onclick = (e) => {
    e.preventDefault();
    switchView("not-done");
};

taskMenu.onclick = (e) => {
    e.preventDefault();
    switchView("all");
};

// Xử lý sự kiện thêm công việc
submit.addEventListener("click", addTask);
