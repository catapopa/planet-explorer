# 🌌 Planet Explorer

A full-stack web application for exploring and managing planets, featuring role-based authentication, JWT security, and a clean Angular Material UI.

---

## 🛠 Tech Stack

### Backend (.NET 8, C#)
- ASP.NET Core Web API
- Entity Framework Core 9 with SQLite
- JWT Authentication (`Microsoft.AspNetCore.Authentication.JwtBearer`)
- BCrypt password hashing
- Swagger API docs (`Swashbuckle.AspNetCore`)

### Frontend (Angular 19)
- Angular 19 (Standalone APIs)
- Angular Material UI
- RxJS & HttpClient
- Role-based access (e.g., `Captain`)
- Reusable components (e.g., `planet-status`)

---

## 🚀 Features

- 🌍 View and manage planets
- ✅ Planet status display with icons (`OK`, `Not OK`, `Todo`, `En Route`)
- 🔐 Login with JWT tokens
- 👨‍✈️ Role-based UI for captains
- 🔄 Live updates after login/logout
- 📦 Fully decoupled frontend/backend

---

## 📦 Setup Instructions

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js & npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

---

### 🔧 Backend Setup

```bash
cd PlanetExplorer.Api
dotnet restore
dotnet ef database update
dotnet run
```

Server runs on: http://localhost:5000

### Frontend Steup
```bash
cd planet-explorer-frontend
npm install
npm start
```

App runs on: http://localhost:4200

## Swagger:
- Test andpoints with swagger [http://localhost:5000/swagger/index.html]
