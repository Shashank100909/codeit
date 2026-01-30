# CodeIt 🚀  
Full-Stack MERN Application with AI Integration

CodeIt is a full-stack MERN application that combines real-time collaboration, authentication, AI-powered features, and scalable backend architecture.  
The project demonstrates clean architecture, modern tooling, and production-ready practices.

---

## ✨ Features

- 🔐 User Authentication (JWT-based)
- 🧠 AI Integration using Google Gemini API
- 💬 Real-time communication with Socket.IO
- 📁 Project & Chat Management
- ⚡ Redis integration for token/session handling
- 🌐 RESTful APIs with Express & MongoDB
- 🎨 Modern frontend built with React + Vite
- 🔄 Centralized error handling & clean code structure

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Redis
- JWT Authentication
- Socket.IO
- Google Generative AI (Gemini)

---

## 📂 Project Structure

codeit/
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── services/
│ ├── middleware/
│ ├── config/
│ ├── db/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── screens/
│ │ ├── components/
│ │ ├── context/
│ │ ├── config/
│ │ └── utils/
│ └── vite.config.js
│
└── README.md


---

## ⚙️ Environment Variables

### Backend (`.env`)
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
GOOGLE_AI_KEY=your_google_gemini_api_key


### Frontend (`.env`)
VITE_API_BASE_URL=http://localhost:3000


> ⚠️ `.env` files are intentionally excluded from the repository for security reasons.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shashank100909/codeit.git
cd codeit
2️⃣ Backend Setup
cd backend
npm install
npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
Frontend will run on:
👉 http://localhost:5173

Backend will run on:
👉 http://localhost:3000

🧪 API Testing
Example AI endpoint:

GET /ai/get-result?prompt=hello
📌 Highlights for Recruiters
Clean MVC architecture with services layer

Secure authentication and authorization flow

Real-time features using WebSockets

AI-powered responses integrated into backend logic

Environment-based configuration

Production-ready code practices

📈 Future Improvements
Role-based access control

Deployment using Docker & CI/CD

Enhanced AI prompts & tools

Unit & integration testing

👤 Author
Shashank Nainwani
Full-Stack Developer (MERN)

GitHub: https://github.com/Shashank100909
