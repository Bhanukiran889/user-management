
# 🧑‍💻 User Management Dashboard

A full-stack web application to manage users (CRUD operations) with a dashboard interface.  
Built using **React + Vite (frontend)**, **Node.js + Express (backend)**, and **SQLite with Sequelize ORM** for the database.

---

## 🚀 Features

### Frontend (React + Vite)
- Dashboard to view all users.
- Add new users via a form (with validation).
- View user details page.
- Edit existing user information.
- Delete users.
- Responsive and clean UI (built with Tailwind CSS).
- Client-side validation (required fields, valid email format, etc.).

### Backend (Node.js + Express + SQLite/Sequelize)
- RESTful APIs for CRUD operations:
	- `GET /api/users` → Get all users
	- `GET /api/users/:id` → Get user by ID
	- `POST /api/users` → Create new user
	- `PUT /api/users/:id` → Update user
	- `DELETE /api/users/:id` → Delete user
- Sequelize ORM with SQLite.
- Server-side validation for required fields and email format.
- Error handling for invalid data and not-found resources.
- CORS enabled for frontend integration.

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router
- Axios
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- Sequelize ORM
- SQLite (local database)
- Morgan (request logger)
- CORS middleware

---

## 📂 Project Structure
```sh
project-root/
│
├── backend/
│ ├── server.js # Express app entry
│ ├── db.js # Sequelize DB connection
│ ├── models/User.js # Sequelize User model
│ ├── routes/userRoutes.js # User API routes
│ ├── seed.js # Seed script with dummy data
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── pages/ # Dashboard, UserForm, UserDetail, etc.
│ │ ├── App.jsx # Router setup
│ │ └── main.jsx
│ └── package.json
│
└── README.md
```
---

## ⚡ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Bhanukiran889/user-management.git
cd user-management-dashboard
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Start the server:
```bash
npm run dev
```
Server runs at http://localhost:5000

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
Start the development server:
```bash
npm run dev
```
Frontend runs at http://localhost:5173

### 🌱 Database Seeding
The backend comes with a seed.js file to populate dummy users.
When the backend starts, it will auto-seed the database with sample users (John, Jane, Alice, etc.).

---

## 📸 Screenshots (Optional)
- Dashboard
- Add User Form
- User Details Page

---

## 📜 API Endpoints
| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| GET    | /api/users       | Get all users     |
| GET    | /api/users/:id   | Get a single user |
| POST   | /api/users       | Create new user   |
| PUT    | /api/users/:id   | Update a user     |
| DELETE | /api/users/:id   | Delete a user     |

---

## 🧪 Validation & Error Handling
- Email format validated on both frontend & backend.
- Required fields enforced.
- Graceful error messages returned (404 User not found, 400 Invalid data).

---

## 📦 Deployment
- Frontend: Deploy on Vercel.
- Backend: Deploy on Render / Railway / Heroku.
- Update frontend API base URL in Axios accordingly.

---

## 👨‍💻 Author
Bhanukiran Reddy
Full-Stack Developer Intern Assignment – User Management Dashboard
