function TodoPage() {
    return `
        <!-- Page heading -->
            <h1 class="page-heading">Create your Todo-List</h1>
            <!-- Form -->
            <form id="todo-form" action="" class="todo-form">
                <input
                    type="text"
                    id="todo-input"
                    class="input"
                    placeholder="What are your tasks for today?"
                    spellcheck="false"
                />
                <button id="submit" class="submit-btn">Add</button>
                <button id="search" class="submit-btn">search</button>

                <select name="status-filter" id="status-filter">
                    <option value="all">sort status</option>

                    <option value="all">all</option>
                    <option value="todo">todo</option>
                    <option value="doing">doing</option>
                    <option value="done">done</option>
                </select>

                <select name="priority-filter" id="priority-filter">
                    <option value="reset">sort priority</option>

                    <option value="reset">reset</option>
                    <option value="low">low</option>
                    <option value="high">high</option>
                </select>
            </form>
            <!-- Task list -->
            <ul id="task-list" class="task-list">
                <!-- Task item -->
            </ul>
    `;
}

export default TodoPage;
