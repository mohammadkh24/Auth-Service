# 🔐 Auth Service

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%20%F0%9F%92%BE-green)](https://mongodb.com)
[![Redis](https://img.shields.io/badge/Redis-%E2%9A%AB-red)](https://redis.io/)
[![JWT](https://img.shields.io/badge/JWT-secure-yellow)](https://jwt.io)
[![Swagger](https://img.shields.io/badge/Swagger-UI-blue)](http://localhost:3000/api-docs)

## ✨ Description

A simple and secure authentication service using OTP & JWT. Users can log in via phone number. Admins can ban/unban users and manage roles.

## 🚀 Features

- 📲 OTP Login System (via Redis & SMS)
- 🔒 JWT-based Authentication
- 🧑‍💼 Role-Based Access (Admin/User)
- 🚫 Ban / 🔓 Unban Users
- 📑 Swagger API Documentation

## 📦 Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **Redis** for OTP storage
- **JWT** for authentication
- **Swagger** for API Docs

## ⚙️ Setup

```bash
git clone https://github.com/mohammadkh24/Auth-Service.git
cd Auth-Service
npm install
```

### 📁 Create `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/AuthService

JWT_SECRET=d9bd9dc9-0073-4ab7-b1cb-1579e73e66a2dsf

Redis_URI= redis://localhost:6379/
# Sms Pannel
...

NODE_ENV= development
```

### ▶️ Start the server:

```bash
npm run dev
```

Visit Swagger docs at: [http://localhost:3000/document](http://localhost:3000/document)

## 🔐 Endpoints Overview

| Method | Endpoint            | Description                   | Auth Required | Role       |
| ------ | ------------------- | ----------------------------- | ------------- | ---------- |
| POST   | /auth/send          | Send OTP                      | ❌            | -          |
| POST   | /auth/verify        | Verify OTP and Login/Register | ❌            | -          |
| GET    | /auth/me            | Get current user              | ✅            | USER/ADMIN |
| GET    | /users              | Get all users                 | ✅            | ADMIN      |
| POST   | /users/ban/:userId  | Ban a user                    | ✅            | ADMIN      |
| DELETE | /users/unBan/:phone | Unban a user                  | ✅            | ADMIN      |
| DELETE | /users/:userId      | Remove user                   | ✅            | ADMIN      |

## ❗ Security Tip

Never expose `.env`, secrets, or real OTPs in public repositories. Always use environment variables.

---

Made with ❤️ by Mohammad
