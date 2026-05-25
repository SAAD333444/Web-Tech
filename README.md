# Student Record Manager

A simple web application built for the Web Technologies Database Connectivity Assignment. This project performs complete CRUD operations (Create, Read, Update, Delete) using an ASP.NET Core REST API for the backend and HTML/CSS/JavaScript for the frontend, connected to a SQL Server database[cite: 1].

**Developed by:** Saad Khalid 
**Class:** BSIT-II-B (Shift-I)  

## 🚀 Features
* Fetch and display data from the database (GET)[cite: 1].
* Add a new student record with form validation before submission (POST)[cite: 1].
* Update an existing student record (PUT)[cite: 1].
* Delete a student record (DELETE)[cite: 1].

## 💻 Technologies Used
* **Frontend:** HTML, CSS, JavaScript[cite: 1]
* **Backend:** ASP.NET Core Web API[cite: 1]
* **Database:** SQL Server via Entity Framework Core[cite: 1]

## ⚙️ Setup Instructions
Follow these steps to run this project on your local machine:

### 1. Backend & Database Setup
1. Clone this repository and open the `StudentApi` folder in your terminal/command prompt.
2. Open the `appsettings.json` file and verify that the `DefaultConnection` string matches your local SQL Server instance.
3. Run the following command to create the database and tables:
```bash
   dotnet ef database update
<img width="1919" height="646" alt="Screenshot 2026-05-25 221121" src="https://github.com/user-attachments/assets/e3d8017a-13d3-42b8-8abf-714b3537c491" />
