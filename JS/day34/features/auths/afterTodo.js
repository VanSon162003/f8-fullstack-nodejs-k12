function AfterTodo() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const form = $("#todo-form");
    const tasksList = $("#task-list");
    const input = form.querySelector("#todo-input");
    const btnSubmit = $("#submit");

    const url = "http://localhost:3000/tasks";

    const statusFilter = $("#status-filter");
    const priorityFilter = $("#priority-filter");

    const search = $("#search");

    search.onclick = function () {
        const value = input.value.trim();
        if (!value) return alert("Hãy nhập vào gì đó để tìm kiếm");

        fetch(url + "?q=" + value)
            .then((res) => res.json())
            .then((data) => {
                renderTasks(data);
                input.value = "";
            })
            .catch((err) => console.error("Lỗi khi tìm kiếm:", err));
    };

    function start() {
        getAPI((data) => {
            renderTasks(data);
        });

        btnSubmit.addEventListener("click", createTasks);

        tasksList.addEventListener("click", handle);
    }
    start();

    function getAPI(callBack) {
        fetch(url)
            .then((res) => res.json())
            .then(callBack)
            .catch((err) => err);
    }

    function updateTasks(index, value, completed = false, priority = 1) {
        fetch(url + "/" + index, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify({
                title: value,
                completed,
                priority,
            }),
        })
            .then((res) => res.json())
            .then(
                getAPI((data) => {
                    renderTasks(data);
                })
            )
            .catch((err) => err);
    }
    function saveStorage(key, body) {
        localStorage.setItem(key, JSON.stringify(body));
    }

    function handle(e) {
        getAPI((data) => {
            const taskItem = e.target.closest(".task-item");
            taskIndex = +taskItem.dataset.index;
            task = data[taskIndex];

            const nameStatus = "status" + taskItem.dataset.id;

            const namePriority = "priority" + taskItem.dataset.id;

            if (e.target.closest(".edit")) {
                const newTitle = prompt(
                    "bạn có muốn thay đổi không",
                    task.title
                ).trim();

                const check = isDuplication(data, newTitle, taskIndex);
                if (check) return alert("công việc này đã có rồi");

                if (!newTitle) return alert("hãy nhập công việc muốn thay đổi");

                updateTasks(taskItem.dataset.id, newTitle);
            }

            if (e.target.closest(".status")) {
                const status = e.target.closest(".status");

                status.onchange = function (e) {
                    saveStorage(nameStatus, status.value);
                    getAPI((data) => renderTasks(data));
                };
            }

            if (e.target.closest(".priority")) {
                const priority = e.target.closest(".priority");

                priority.onchange = function (e) {
                    saveStorage(namePriority, priority.value);
                    const priorityNumber = `${
                        priority.value === "low"
                            ? 1
                            : priority.value === "medium"
                            ? 2
                            : 3
                    }`;

                    updateTasks(
                        taskItem.dataset.id,
                        task.title,
                        false,
                        +priorityNumber
                    );
                };
            }
            if (e.target.closest(".delete")) {
                if (confirm("bạn có muốn xoá công việc này không")) {
                    deleteTasks(taskItem.dataset.id);
                    localStorage.removeItem(nameStatus);
                    localStorage.removeItem(namePriority);
                }
            }
        });
    }

    form.onsubmit = (e) => e.preventDefault();

    function isDuplication(arr, title, titleIndex = -1) {
        const duplication = arr.some(
            (item, index) =>
                titleIndex !== index &&
                item.title.toLowerCase() === title.toLowerCase()
        );

        return duplication;
    }

    let archive = null;

    function deleteTasks(index) {
        fetch(url + "/" + index, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(
                getAPI((data) => {
                    renderTasks(data);
                })
            )
            .catch((err) => err);
    }

    function createTasks() {
        const value = input.value.trim();

        if (!value) return alert("hãy nhập vào thứ gì đó");

        getAPI((data) => {
            archive = false;

            if (isDuplication(data, value)) {
                archive = true;

                alert("Đã có công việc này rồi");
            }

            if (archive) {
                return;
            }
            fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    title: value,
                    completed: false,
                    priority: 1,
                }),
            })
                .then((res) => res.json())
                .then(
                    getAPI((data) => {
                        renderTasks(data);
                    })
                )
                .catch((err) => err);

            alert("thêm công việc thành công");

            input.value = "";
            input.focus();
        });
    }

    function renderTasks(data) {
        if (data.length === 0)
            return (tasksList.innerHTML = `<li class="empty-message">Không có công việc nào</li>`);

        tasksList.innerHTML = data
            .map((item, index) => {
                const name = "status" + item.id;
                const statusName =
                    JSON.parse(localStorage.getItem(name)) ?? "todo";

                const priorityKey = "priority" + item.id;
                const priorityName =
                    JSON.parse(localStorage.getItem(priorityKey)) ?? "low";

                const check =
                    statusName === "done"
                        ? (item.completed = true)
                        : (item.completed = false);
                return `
            <li data-index="${index}" data-id="${item.id}" class="task-item ${
                    item.completed ? "completed" : ""
                }">
                <span class="task-title"> ${item.title}</span>
                <div class="task-action">
                    <button class="task-btn edit">edit</button>
                    <select name="status" class="status" >
                        <option value="todo" ${
                            statusName === "todo" ? "selected" : ""
                        }>todo</option>
                        <option value="doing" ${
                            statusName === "doing" ? "selected" : ""
                        }>doing</option>
                        <option value="done" ${
                            statusName === "done" ? "selected" : ""
                        }>done</option>
                    </select>

                    <select name="priority" class="priority">
                        <option value="low"  ${
                            priorityName === "low" ? "selected" : ""
                        }>low</option>
                        <option value="medium"  ${
                            priorityName === "medium" ? "selected" : ""
                        }>medium</option>
                        <option value="high" ${
                            priorityName === "high" ? "selected" : ""
                        }>high</option>
                    </select>
                    <button class="task-btn delete">delete</button>
                 </div>
            </li>
        `;
            })
            .join("");
    }

    function filterStatus(statusKey) {
        getAPI((data) => {
            const filteredTasks = data.filter((task) => {
                const name = "status" + task.id;
                const status = JSON.parse(localStorage.getItem(name)) ?? "todo";
                return status === statusKey;
            });

            renderTasks(filteredTasks);
        });
    }

    statusFilter.onchange = function (e) {
        const statusKey = e.target.value;

        if (statusKey === "all") {
            getAPI(renderTasks);
            return;
        }

        filterStatus(statusKey);
    };

    function sortPriority(option = false) {
        getAPI((data) => {
            const filteredPriority = [...data];
            if (option) {
                filteredPriority.sort((a, b) => b.priority - a.priority);
            } else {
                filteredPriority.sort((a, b) => a.priority - b.priority);
            }
            console.log(filteredPriority);

            renderTasks(filteredPriority);
        });
    }

    priorityFilter.onchange = function (e) {
        const priorityKey = e.target.value;

        sortPriority();
        if (priorityKey === "low") return sortPriority();
        if (priorityKey === "high") return sortPriority(true);

        getAPI((data) => {
            renderTasks(data);
        });
    };
}

export default AfterTodo;
