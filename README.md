# 📝 Task & Project Manager (MERN Stack)

Still developing...

This project is part of an Udemy course, this one was built using the **MERN stack** (MongoDB, Express, React, Node.js) with **TypeScript** on both backend and frontend.

It includes a complete authentication system with email confirmation, password reset, and role-based access control. Users can manage their own projects and tasks with strict authorization rules.

Additional tools and technologies used:
- 🔒 JWT Authentication & Email Workflows
- 📦 REST API with Express & Mongoose
- 💅 TailwindCSS for styling
- 🧠 React Query for data fetching & caching
- 🔄 React Router for client-side routing
- ✅ TypeScript on both frontend & backend
- 📄 Swagger API Documentation

---

## 🚀 Features

- User Registration & Login with JWT
- Email Confirmation and Password Recovery
- Role-based Access (only project creators can manage collaborators)
- Full CRUD for Projects and Tasks
- Frontend built with React + TailwindCSS + React Query
- Backend with Express, MongoDB, and Mongoose
- Validations using Express Validator and Valibot

---

## 📦 Installation

### 2. Install Dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd ../client
npm install
```

---

### 3. Set Up Environment Variables

Create a `.env` file in both the `server/` and `client/` directories and define the required variables. For example:

#### `server/.env`
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
FRONTEND_URL=http://localhost:5173
```

#### `client/.env`
```env
VITE_API_URL=http://localhost:3000/api
```

---

### 4. Run the App

#### Backend
```bash
cd server
npm run dev
```

#### Frontend
```bash
cd client
npm run dev
```

---

## ✅ Usage

Once the app is running:

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:3000](http://localhost:3000)

You can register a new account, confirm your email via the confirmation link, then log in to start creating and managing your projects and tasks.

---

## 📚 API Documentation

The REST API follows best practices and is fully documented using Swagger. Once the backend server is running, access the documentation at:

```bash
http://localhost:3000/api/docs
```

The documentation includes:
- Authentication endpoints
- Project and task endpoints
- Request/response formats
- Error handling and status codes

---

## 🧪 Testing

Tests are written with **Jest** and **Supertest** in the backend.

To run tests:

```bash
cd server
npm test
```

---

## 🧠 Learning Objectives

This project was built to practice:

- Full Stack Development with the MERN Stack
- Advanced REST API design
- Authentication and email workflows
- Form validation on both client and server
- State management with React Query
- Role-based access and security
- Component-based architecture with TypeScript
- Styling with TailwindCSS

---
