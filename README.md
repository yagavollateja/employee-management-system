👨‍💼 Employee Management System

A full-stack Employee Management System built using React, Spring Boot, and MySQL. The application provides REST APIs for managing employee information and a responsive React frontend for interacting with the backend. The application is deployed on Railway. 🚀

🛠️ Tech Stack
⚛️ Frontend: React.js, JavaScript, Axios, Vite, HTML, CSS
☕ Backend: Java, Spring Boot, Spring Data JPA, Hibernate, Maven
🗄️ Database: MySQL
☁️ Deployment: Railway
🔗 Version Control: Git & GitHub
✨ Features
👀 View all employees
➕ Add new employees
🔍 View employee details
✏️ Update employee information
🗑️ Delete employees
🔄 REST API integration
📱 Responsive user interface
☁️ Cloud database and application deployment
🔐 Environment-based configuration
🏗️ Project Structure
Employee-Management-System/
│
├── 📁 ems-backend/
│   ├── 📁 src/
│   │   └── 📁 main/
│   │       ├── 📁 java/
│   │       └── 📁 resources/
│   │           └── application.properties
│   └── pom.xml
│
├── 📁 ems-frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env
│
└── 📄 README.md
🔗 API Endpoints
Method	Endpoint	Description
🟢 GET	/api/employees	Get all employees
🟢 GET	/api/employees/{id}	Get employee by ID
🔵 POST	/api/employees	Create employee
🟡 PUT	/api/employees/{id}	Update employee
🔴 DELETE	/api/employees/{id}	Delete employee
🌐 Backend API
https://employee-management-system-production-efc7.up.railway.app/api/employees
⚛️ Frontend API Configuration

The React frontend uses a Vite environment variable:

VITE_API_BASE_URL=https://employee-management-system-production-efc7.up.railway.app/api/employees

Axios is used to communicate with the Spring Boot backend:

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
💻 Run Locally
☕ Backend
cd ems-backend
mvn spring-boot:run

Backend:

http://localhost:8080
⚛️ Frontend
cd ems-frontend
npm install
npm run dev

Frontend:

http://localhost:5173
🗄️ Database Configuration

For local development:

spring.datasource.url=jdbc:mysql://localhost:3306/ems_employees
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update

For Railway deployment, database credentials are provided through environment variables:

MYSQLHOST
MYSQLPORT
MYSQLUSER
MYSQLPASSWORD

🔒 Never upload database passwords or other secrets to GitHub.

☁️ Deployment

The project is deployed using Railway.

👤 User
   │
   ▼
⚛️ React Frontend
   │
   │ REST API
   ▼
☕ Spring Boot Backend
   │
   ▼
🗄️ Railway MySQL

The backend is available at:

https://employee-management-system-production-efc7.up.railway.app
🚀 Future Enhancements
🔐 JWT authentication
👨‍💼 Admin dashboard
🔎 Employee search and filtering
📄 Pagination
🏢 Department management
👤 Employee profiles
📧 Email notifications
🛡️ Role-based authorization
🧪 Unit and integration testing
🐳 Docker support
🔄 CI/CD automation
👨‍💻 Author

Yagavolla Teja

🎓 B.Tech – Computer Science Engineering
💻 Full Stack Developer | Java | Spring Boot | React
