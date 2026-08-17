# 👨‍💼 Employee Management System

A full-stack **Employee Management System** built using **React, Spring Boot, and MySQL**. The application allows users to manage employee information through a responsive React frontend and RESTful APIs provided by a Spring Boot backend. The application is deployed on Railway. 🚀

## 🛠️ Tech Stack

- ⚛️ **Frontend:** React.js, JavaScript, Axios, Vite, HTML, CSS
- ☕ **Backend:** Java, Spring Boot, Spring Data JPA, Hibernate, Maven
- 🗄️ **Database:** MySQL
- ☁️ **Deployment:** Railway
- 🔗 **Version Control:** Git & GitHub

## ✨ Features

- 👀 View all employees
- ➕ Add new employees
- 🔍 View employee details
- ✏️ Update employee information
- 🗑️ Delete employees
- 🔄 REST API integration
- 📱 Responsive user interface
- ☁️ Cloud database and application deployment
- 🔐 Environment-based configuration

## 📂 Project Structure

    Employee-Management-System/
    │
    ├── ems-backend/
    │   ├── src/
    │   │   └── main/
    │   │       ├── java/
    │   │       └── resources/
    │   │           └── application.properties
    │   ├── pom.xml
    │   └── ...
    │
    ├── ems-frontend/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── App.jsx
    │   │   └── main.jsx
    │   ├── package.json
    │   ├── .env
    │   └── ...
    │
    └── README.md

## 🏗️ Project Architecture

    👤 User
       │
       ▼
    ⚛️ React Frontend
       │
       │ Axios / REST API
       ▼
    ☕ Spring Boot Backend
       │
       │ Spring Data JPA
       ▼
    🗄️ MySQL Database
       │
       ▼
    ☁️ Railway

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| 🟢 GET | `/api/employees` | Get all employees |
| 🟢 GET | `/api/employees/{id}` | Get employee by ID |
| 🔵 POST | `/api/employees` | Create a new employee |
| 🟡 PUT | `/api/employees/{id}` | Update employee |
| 🔴 DELETE | `/api/employees/{id}` | Delete employee |

## 🌐 Deployed Backend

### Backend URL

https://employee-management-system-production-efc7.up.railway.app

### Frontend URL
https://ems-frontend-production-f3f7.up.railway.app/employees

### Employee API

https://employee-management-system-production-efc7.up.railway.app/api/employees

## ⚛️ Frontend API Configuration

The React frontend uses a Vite environment variable to connect to the deployed Spring Boot backend.

### Environment Variable

    VITE_API_BASE_URL=https://employee-management-system-production-efc7.up.railway.app/api/employees

### Axios Service

    import axios from "axios";

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    export const ListOfEmployees = () =>
      axios.get(API_BASE_URL);

    export const createEmployee = (employee) =>
      axios.post(API_BASE_URL, employee);

    export const getEmployee = (employeeId) =>
      axios.get(`${API_BASE_URL}/${employeeId}`);

    export const updateEmployee = (employeeId, employee) =>
      axios.put(`${API_BASE_URL}/${employeeId}`, employee);

    export const deleteEmployee = (employeeId) =>
      axios.delete(`${API_BASE_URL}/${employeeId}`);

## 🗄️ Database

The application uses **MySQL** to store employee information.

### Local Database

For local development, the Spring Boot application can connect to MySQL using:

    spring.application.name=ems-backend

    server.port=8080

    spring.datasource.url=jdbc:mysql://localhost:3306/ems_employees
    spring.datasource.username=root
    spring.datasource.password=YOUR_PASSWORD

    spring.jpa.hibernate.ddl-auto=update

### Railway Database

For production deployment, Railway environment variables are used:

    MYSQLHOST
    MYSQLPORT
    MYSQLUSER
    MYSQLPASSWORD

Spring Boot connects to the Railway MySQL database using:

    spring.datasource.url=jdbc:mysql://${MYSQLHOST}:${MYSQLPORT}/ems_employees
    spring.datasource.username=${MYSQLUSER}
    spring.datasource.password=${MYSQLPASSWORD}
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

    spring.jpa.hibernate.ddl-auto=update

🔐 **Never commit database passwords, API keys, or other secrets to GitHub.**

## 💻 Run Locally

### ☕ Backend Setup

Go to the backend directory:

    cd ems-backend

Run the Spring Boot application:

    mvn spring-boot:run

The backend will run at:

    http://localhost:8080

### ⚛️ Frontend Setup

Open another terminal and go to the frontend directory:

    cd ems-frontend

Install dependencies:

    npm install

Start the React application:

    npm run dev

The frontend will normally run at:

    http://localhost:5173

## 🔄 CRUD Operations

The system supports complete CRUD operations.

### ➕ Create Employee

Creates a new employee.

    POST /api/employees

### 👀 Get All Employees

Retrieves all employees.

    GET /api/employees

### 🔍 Get Employee by ID

Retrieves a specific employee.

    GET /api/employees/{id}

### ✏️ Update Employee

Updates an existing employee.

    PUT /api/employees/{id}

### 🗑️ Delete Employee

Deletes an employee.

    DELETE /api/employees/{id}

## 🧪 API Testing

The backend APIs can be tested using:

- 🧪 Postman
- 🌐 Browser
- 📘 Swagger UI
- ⚛️ React Frontend

Example API request:

    GET https://employee-management-system-production-efc7.up.railway.app/api/employees

## ☁️ Deployment

The application is deployed using Railway.

### Backend Deployment

The Spring Boot backend is deployed from:

    /ems-backend

The backend connects to the Railway MySQL database using environment variables.

### Frontend Deployment

The React frontend is deployed from:

    /ems-frontend

The frontend uses:

    VITE_API_BASE_URL

to communicate with the deployed Spring Boot backend.

## 🔐 Environment Variables

### Backend

    MYSQLHOST
    MYSQLPORT
    MYSQLUSER
    MYSQLPASSWORD

### Frontend

    VITE_API_BASE_URL

Example:

    VITE_API_BASE_URL=https://employee-management-system-production-efc7.up.railway.app/api/employees

⚠️ **Keep passwords and sensitive credentials outside your source code.**

## 📱 Responsive Design

The frontend is designed to work across different screen sizes:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📱 Tablet

## 🛡️ Error Handling

The application handles common errors such as:

- ❌ Invalid API requests
- ❌ Employee not found
- ❌ Database connection errors
- ❌ Failed API requests
- ❌ Axios network errors
- ❌ Invalid employee information

## 🎯 Project Objectives

The main objectives of this project are:

1. 🏗️ Develop a complete full-stack web application.
2. ⚛️ Build a responsive frontend using React.
3. ☕ Develop RESTful APIs using Spring Boot.
4. 🗄️ Store employee data using MySQL.
5. 🔄 Implement CRUD operations.
6. 🔗 Connect React with Spring Boot using REST APIs.
7. ☁️ Deploy the backend, frontend, and database using Railway.
8. 🔐 Use environment variables for secure configuration.
9. 🔧 Practice Git and GitHub version control.

## 📚 Learning Outcomes

Through this project, the following concepts were practiced:

- ⚛️ React development
- 📡 Axios API communication
- ☕ Spring Boot development
- 🔄 REST API development
- 🗄️ MySQL database management
- 🔗 Spring Data JPA
- 🔄 Hibernate ORM
- 📦 Maven
- 🔐 Environment variables
- 🌐 Frontend and backend integration
- ☁️ Cloud deployment
- 🔧 Git and GitHub
- 🚀 Railway deployment

## 🚀 Future Enhancements

- 🔐 JWT Authentication
- 👨‍💼 Admin Dashboard
- 👥 User Management
- 🔎 Employee Search
- 🔃 Employee Filtering
- 📄 Pagination
- 🏢 Department Management
- 👤 Employee Profiles
- 📷 Profile Image Upload
- 📧 Email Notifications
- 🛡️ Role-Based Authorization
- 🧪 Unit Testing
- 🧪 Integration Testing
- 🐳 Docker Support
- 🔄 CI/CD Pipeline
- 📊 Employee Analytics Dashboard

## 👨‍💻 Author

### Yagavolla Teja

🎓 **B.Tech – Computer Science Engineering**

💻 **Full Stack Developer**

### Skills

- ☕ Java
- 🌱 Spring Boot
- ⚛️ React
- 🟨 JavaScript
- 🗄️ MySQL
- 🔗 REST APIs
- 🐙 Git & GitHub
- ☁️ Railway

## ⭐ Support

If you find this project useful, please consider giving the repository a ⭐ on GitHub.

## 📌 Project Summary

**Employee Management System** is a full-stack web application developed to demonstrate the integration of a React frontend, Spring Boot REST API, and MySQL database.

The complete application follows this architecture:

    ⚛️ React Frontend
            │
            ▼
       📡 Axios
            │
            ▼
    ☕ Spring Boot REST API
            │
            ▼
    🔄 Spring Data JPA
            │
            ▼
       🗄️ MySQL
            │
            ▼
       ☁️ Railway

The project demonstrates frontend development, backend API development, database integration, CRUD operations, environment-based configuration, Git/GitHub workflow, and cloud deployment.
