// Lấy dữ liệu từ localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// DOM
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskModal = document.getElementById("taskModal");

const openFormBtn = document.getElementById("openFormBtn");
const closeFormBtn = document.getElementById("closeFormBtn");

const message = document.getElementById("message");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const formTitle = document.getElementById("formTitle");

// Mở form
openFormBtn.addEventListener("click", () => {
    taskModal.style.display = "block";
    taskForm.reset();
    document.getElementById("taskId").value = "";
    formTitle.innerText = "Thêm Công Việc";
});

// Đóng form
closeFormBtn.addEventListener("click", () => {
    taskModal.style.display = "none";
});

// Render danh sách
function renderTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>Chưa có công việc nào.</p>";
        return;
    }

    tasks.forEach(task => {

        const div = document.createElement("div");

        div.classList.add("task-card");

        if (task.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            <h3>${task.title}</h3>
            <p><b>Mô tả:</b> ${task.description}</p>
            <p><b>Hạn:</b> ${task.deadline}</p>
            <p><b>Ưu tiên:</b> ${task.priority}</p>
            <p>
                <b>Trạng thái:</b>
                ${task.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
            </p>

            <div class="actions">
                <button class="edit-btn" onclick="editTask(${task.id})">
                    Sửa
                </button>

                <button class="delete-btn" onclick="deleteTask(${task.id})">
                    Xóa
                </button>

                <button class="status-btn" onclick="toggleStatus(${task.id})">
                    Đổi trạng thái
                </button>
            </div>
        `;

        taskList.appendChild(div);
    });

    updateTaskSummary();
}

// Lưu localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Thêm / sửa công việc
taskForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const id = document.getElementById("taskId").value;

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const deadline = document.getElementById("deadline").value;
    const priority = document.getElementById("priority").value;

    // Nếu đang sửa
    if (id) {

        tasks = tasks.map(task => {
            if (task.id == id) {
                return {
                    ...task,
                    title,
                    description,
                    deadline,
                    priority
                };
            }
            return task;
        });

        showMessage("Cập nhật công việc thành công!");

    } else {

        // Thêm mới
        const newTask = {
            id: Date.now(),
            title,
            description,
            deadline,
            priority,
            completed: false
        };

        tasks.push(newTask);

        showMessage("Thêm công việc thành công!");
    }

    saveTasks();
    renderTasks();

    taskModal.style.display = "none";
});

// Sửa công việc
function editTask(id) {

    const task = tasks.find(task => task.id == id);

    document.getElementById("taskId").value = task.id;
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("deadline").value = task.deadline;
    document.getElementById("priority").value = task.priority;

    formTitle.innerText = "Cập Nhật Công Việc";

    taskModal.style.display = "block";
}

// Xóa công việc
function deleteTask(id) {

    const confirmDelete = confirm("Bạn có chắc muốn xóa không?");

    if (confirmDelete) {

        tasks = tasks.filter(task => task.id != id);

        saveTasks();
        renderTasks();

        showMessage("Xóa công việc thành công!");
    }
}

// Đổi trạng thái
function toggleStatus(id) {

    tasks = tasks.map(task => {

        if (task.id == id) {
            task.completed = !task.completed;
        }

        return task;
    });

    saveTasks();
    renderTasks();

    showMessage("Cập nhật trạng thái thành công!");
}

// Hiển thị thông báo
function showMessage(text) {

    message.innerText = text;

    setTimeout(() => {
        message.innerText = "";
    }, 2000);
}

// Cập nhật thống kê
function updateTaskSummary() {

    totalTasks.innerText = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    completedTasks.innerText = completed;

    pendingTasks.innerText = tasks.length - completed;
}

// Chạy khi tải trang
renderTasks();