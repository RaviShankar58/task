
---

# 🛠️ Service Booking Platform - Backend

This backend project is developed using **Node.js**, **Express.js**, and **MongoDB**. It offers APIs for user authentication, creating and viewing service listings, and booking services. Tested and verified using **RapidAPI Client**.

---

## 🚀 Tech Stack

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Dotenv  
- Cors  

---

## ✅ Features

1. User Registration and Login (JWT-based authentication)  
2. Create and Fetch Service Listings  
3. Book a Service and Track Booking Status  
4. MongoDB Schema Validation with Mongoose  
5. Protected Routes using Middleware  

---

## 🧠 Step-by-Step Development Process

### 🔹 Step 1: Project Setup and Dependencies

- Initialized Node.js project with `npm init`  
- Installed dependencies:  
  ```bash
  npm install express mongoose dotenv cors bcryptjs jsonwebtoken
  ```
- Folder Structure:
  ```
  backend/
  ├── config/
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  ├── .env
  ├── index.js
  ```

---

### 🔹 Step 2: Environment Configuration

- `.env` File:
  ```
  PORT=5000
  MONGODB_URI=paste your uri here
  JWT_SECRET=mysecretkey
  ```

---

### 🔹 Step 3: MongoDB Connection

- Connected to MongoDB using Mongoose inside `config/db.js`  
- Imported the connection in `index.js`  
- Handled success and failure logs

---

### 🔹 Step 4: User Authentication System

- **Model**: `User` (name, email, password)
- **Routes**:
  - `POST /api/auth/register` – Register a new user  
  - `POST /api/auth/login` – Login and get JWT token  
- Password hashed with `bcryptjs`, token generated with `jsonwebtoken`  
- Middleware: `authMiddleware.js` to protect routes

---

### 🔹 Step 5: Service Listing APIs

- **Model**: `Service` (title, description, price ,category)
- **Routes**:
  - `POST /api/services` – Add a service (**Protected**)  
  - `GET /api/services` – Fetch all services  

---

### 🔹 Step 6: Booking System Implementation

- **Model**: `Booking`
  - `user` → references `User`
  - `service` → references `Service`
  - `status` (default: Confirmed)
- **Routes**:
  - `POST /api/bookings` – Book a service (**Protected**)  
  - `GET /api/bookings` – Get all bookings for the logged-in user

---

### 🔹 Step 7: API Testing (via RapidAPI Client)

#### 📍 1. Register User

- **Endpoint**: `POST /api/auth/register`
- **Body**:
  ```json
  {
    "name": "Ravi",
    "email": "ravi@google.com",
    "password": "1234"
  }
  ```

#### 📍 2. Login User

- **Endpoint**: `POST /api/auth/login`
- **Body**:
  ```json
  {
    "email": "ravi@google.com",
    "password": "1234"
  }
  ```
- ✅ Returns JWT token

#### 📍 3. Add Service

- **Endpoint**: `POST /api/services`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Body**:
  ```json
  {
    "title": "AC Repair",
    "description": "Air conditioner maintenance and repair",
    "Price" : 1000
    "category": "Repair"
  }
  ```

#### 📍 4. Get All Services

- **Endpoint**: `GET /api/services`


#### 📍 5. Book a Service

- **Endpoint**: `POST /api/bookings`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Body**:
  ```json
  {
    "service": "<service_id>"
  }
  ```

#### 📍 6. View My Bookings

- **Endpoint**: `GET /api/bookings`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```

---

### 🔹 Step 8: Finalizing the Server

- **Start Server**:
  ```
  cd backend (navigate to backend folder)
  node index.js (run index.js file)
  ```

- **Server**:
  ```
  MongoDB Connected 👍👍  
  Server is running on http://localhost:5000
  ```

---

```

---
