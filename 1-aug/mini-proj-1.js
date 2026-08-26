const addButton = document.getElementById("addStudent");
const nameInput = document.getElementById("studentName");
const studentList = document.getElementById("studentList");

let rollNo = 101;
addButton.addEventListener("click", function () {

    const studentName = nameInput.value.trim();

    if (studentName === "") {
        alert("Please enter student name");
        return;
    }

    const card = document.createElement("div");

    card.classList.add("student-card");

    const title = document.createElement("h3");

    title.innerText = studentName;

    const roll = document.createElement("p");

    roll.innerText = "Roll Number : " + rollNo;

    const removeButton = document.createElement("button");

    removeButton.innerText = "Delete";


    removeButton.addEventListener("click", function () {

        studentList.removeChild(card);

    });


    const statusButton = document.createElement("button");

    statusButton.innerText = "Active / Inactive";


    statusButton.addEventListener("click", function () {

        card.classList.toggle("active");

    });

    card.append(title, roll, removeButton, statusButton);

    studentList.append(card);

    nameInput.value = "";

    rollNo++;

});