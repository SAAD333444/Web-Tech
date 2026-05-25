// NOTE: Agar aapka backend kisi aur port (e.g. 5200) pe chal raha hai, tou usay yahan change karein.
const apiUrl = 'http://localhost:5201/api/students'; 

// Fetch data from Database (GET)
async function fetchStudents() {
    const response = await fetch(apiUrl);
    const students = await response.json();
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';

    students.forEach(student => {
        tableBody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.rollNumber}</td>
                <td>${student.email}</td>
                <td>
                    <button onclick="editStudent(${student.id}, '${student.name}', '${student.rollNumber}', '${student.email}')" style="background: orange;">Edit</button>
                    <button onclick="deleteStudent(${student.id})" style="background: red; color: white;">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Add or Update Record (POST / PUT)
async function saveStudent() {
    const id = document.getElementById('studentId').value;
    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('rollNo').value;
    const email = document.getElementById('email').value;

    if(!name || !rollNumber || !email) {
        alert("Please fill all fields!"); // Form Validation
        return;
    }

    const student = { name, rollNumber, email };

    if (id) {
        // Update (PUT)
        student.id = parseInt(id);
        await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        });
    } else {
        // Add (POST)
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        });
    }

    clearForm();
    fetchStudents();
}

// Delete Record (DELETE)
async function deleteStudent(id) {
    if(confirm("Are you sure you want to delete this?")) {
        await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
        fetchStudents();
    }
}

// Pre-fill form for editing
function editStudent(id, name, rollNo, email) {
    document.getElementById('studentId').value = id;
    document.getElementById('name').value = name;
    document.getElementById('rollNo').value = rollNo;
    document.getElementById('email').value = email;
    document.getElementById('formTitle').innerText = "Edit Student";
}

function clearForm() {
    document.getElementById('studentId').value = '';
    document.getElementById('name').value = '';
    document.getElementById('rollNo').value = '';
    document.getElementById('email').value = '';
    document.getElementById('formTitle').innerText = "Add New Student";
}

// Load data on start
fetchStudents();