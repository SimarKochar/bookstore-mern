
# 📚 Book Store MERN Application

This is a full-stack Book Store application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Firebase for authentication. The app enables users to log in, browse books, and perform basic CRUD operations.

---

## 🛠 How to Run This Project

Follow the instructions below to set up and launch both the frontend and backend locally.

---

### ▶️ Frontend Setup

1. Start by cloning or extracting the project files to your local machine.

2. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

3. Create a file named `.env.local` in the `frontend` root directory (where the `package.json` file is located).

4. Add the following environment variables to configure your Firebase setup:

   ```env
   VITE_API_KEY=""
   VITE_Auth_Domain=""
   VITE_PROJECT_ID=""
   VITE_STORAGE_BUCKET=""
   VITE_MESSAGING_SENDERID=""
   VITE_APPID=""
   ```

5. Install the required frontend dependencies by running:

   ```bash
   npm install
   ```

6. Start the frontend development server:

   ```bash
   npm run dev
   ```

---

### 🧩 Backend Setup

1. Open a terminal and navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the required backend dependencies:

   ```bash
   npm install
   ```

3. In the same `backend` folder (where `package.json` exists), create a file named `.env`.

4. Paste the following environment variables into the `.env` file:

   ```env
   DB_URL=""
   JWT_SECRET_KEY=""
   ```

   > ⚠️ **Note**: Ensure that MongoDB is correctly set up on your system or with MongoDB Atlas. It’s recommended to replace the default connection string and JWT secret with your own secure values.

5. Start the backend server:

   ```bash
   npm run start:dev
   ```

---

## ✅ Project Running Successfully?

Once both servers are up:

- Frontend will be available at: `http://localhost:5173`
- Backend API will run at: `http://localhost:5000`

You’re all set to explore and develop on the Book Store MERN application!

---

## 📂 Folder Structure

```
book-store-mern-app/
├── frontend/    # React frontend with Firebase integration
├── backend/     # Node.js + Express REST API
└── README.md    # Setup instructions
```

---

## 📋 Notes

- Make sure your Firebase project is configured and active.
- Replace sensitive keys and secrets before deploying to production.
- MongoDB Atlas is recommended for easier cloud-based database management.

---

Happy coding! 💻📘
