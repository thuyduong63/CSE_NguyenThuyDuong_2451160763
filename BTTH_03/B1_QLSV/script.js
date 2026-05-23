// Lấy dữ liệu localStorage
let students = JSON.parse(localStorage.getItem("students"));

// Nếu chưa có dữ liệu thì tạo sẵn 5 sinh viên
if (!students) {

    students = [

        {
            id: "SV001",
            name: "Nguyễn Văn A",
            birthday: "2004-01-10",
            className: "CNTT1",
            gpa: 8.5,
            email: "vana@gmail.com"
        },

        {
            id: "SV002",
            name: "Trần Thị B",
            birthday: "2004-03-15",
            className: "CNTT2",
            gpa: 7.8,
            email: "thib@gmail.com"
        },

        {
            id: "SV003",
            name: "Lê Văn C",
            birthday: "2004-07-20",
            className: "CNTT3",
            gpa: 9.0,
            email: "vanc@gmail.com"
        },

        {
            id: "SV004",
            name: "Phạm Thị D",
            birthday: "2004-09-12",
            className: "CNTT1",
            gpa: 8.0,
            email: "thid@gmail.com"
        },

        {
            id: "SV005",
            name: "Hoàng Văn E",
            birthday: "2004-11-05",
            className: "CNTT2",
            gpa: 7.5,
            email: "vane@gmail.com"
        }

    ];

    localStorage.setItem("students", JSON.stringify(students));
}

// DOM
const studentTable = document.getElementById("studentTable");

const studentForm = document.getElementById("studentForm");

const studentModal = document.getElementById("studentModal");

const openModalBtn = document.getElementById("openModalBtn");

const closeModalBtn = document.getElementById("closeModalBtn");

const message = document.getElementById("message");

const totalStudents = document.getElementById("totalStudents");

const averageGPA = document.getElementById("averageGPA");

const modalTitle = document.getElementById("modalTitle");

// Mở modal
openModalBtn.addEventListener("click", function(){

    studentModal.style.display = "block";

    studentForm.reset();

    document.getElementById("editIndex").value = "";

    modalTitle.innerText = "Thêm Sinh Viên";
});

// Đóng modal
closeModalBtn.addEventListener("click", function(){

    studentModal.style.display = "none";
});

// Render bảng sinh viên
function renderStudents(){

    studentTable.innerHTML = "";

    if(students.length === 0){

        studentTable.innerHTML = `
            <tr>
                <td colspan="8">
                    Chưa có sinh viên nào
                </td>
            </tr>
        `;

        return;
    }

    students.forEach(function(student, index){

        let row = `
            <tr>

                <td>${index + 1}</td>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.birthday}</td>

                <td>${student.className}</td>

                <td>${student.gpa}</td>

                <td>${student.email}</td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editStudent(${index})"
                    >
                        Sửa
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${index})"
                    >
                        Xóa
                    </button>

                </td>

            </tr>
        `;

        studentTable.innerHTML += row;
    });

    updateStatistics();
}

// Lưu localStorage
function saveStudents(){

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

// Cập nhật thống kê
function updateStatistics(){

    totalStudents.innerText = students.length;

    let total = 0;

    students.forEach(function(student){

        total += Number(student.gpa);
    });

    let average = total / students.length;

    averageGPA.innerText = average.toFixed(2);
}

// Hiển thị thông báo
function showMessage(text){

    message.innerText = text;

    setTimeout(function(){

        message.innerText = "";

    }, 2000);
}

// Submit form
studentForm.addEventListener("submit", function(event){

    event.preventDefault();

    const id = document.getElementById("studentId").value;

    const name = document.getElementById("studentName").value;

    const birthday = document.getElementById("birthday").value;

    const className = document.getElementById("className").value;

    const gpa = document.getElementById("gpa").value;

    const email = document.getElementById("email").value;

    const editIndex =
        document.getElementById("editIndex").value;

    // Chế độ sửa
    if(editIndex !== ""){

        students[editIndex] = {
            id,
            name,
            birthday,
            className,
            gpa,
            email
        };

        showMessage("Cập nhật sinh viên thành công!");

    }else{

        // Thêm mới
        const newStudent = {
            id,
            name,
            birthday,
            className,
            gpa,
            email
        };

        students.push(newStudent);

        showMessage("Thêm sinh viên thành công!");
    }

    saveStudents();

    renderStudents();

    studentModal.style.display = "none";

    studentForm.reset();
});

// Sửa sinh viên
function editStudent(index){

    const student = students[index];

    document.getElementById("studentId").value =
        student.id;

    document.getElementById("studentName").value =
        student.name;

    document.getElementById("birthday").value =
        student.birthday;

    document.getElementById("className").value =
        student.className;

    document.getElementById("gpa").value =
        student.gpa;

    document.getElementById("email").value =
        student.email;

    document.getElementById("editIndex").value =
        index;

    modalTitle.innerText = "Cập Nhật Sinh Viên";

    studentModal.style.display = "block";
}

// Xóa sinh viên
function deleteStudent(index){

    let confirmDelete = confirm(
        "Bạn có chắc muốn xóa sinh viên này không?"
    );

    if(confirmDelete){

        students.splice(index, 1);

        saveStudents();

        renderStudents();

        showMessage("Xóa sinh viên thành công!");
    }
}

// Chạy lần đầu
renderStudents();