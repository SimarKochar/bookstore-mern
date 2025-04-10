
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
   VITE_API_KEY="AIzaSyCXvDIC4MPrkaMdeg_O2iij88wLpfj3qBA"
   VITE_Auth_Domain="book-store-mern-app.firebaseapp.com"
   VITE_PROJECT_ID="book-store-mern-app"
   VITE_STORAGE_BUCKET="book-store-mern-app.appspot.com"
   VITE_MESSAGING_SENDERID="205632822247"
   VITE_APPID="1:205632822247:web:b0db0ec66bf6de0bbb3b42"
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
   DB_URL="mongodb+srv://helpyourassistant:pqam0Mwv3Vwv8Off@cluster0.qc3bq.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"
   JWT_SECRET_KEY="bc992a20cb6706f741433686be814e3df45e57ea1c2fc85f9dbb0ef7df12308a669bfa7c976368ff32e32f6541480ce9ec1b122242f9b1257ab669026aeaf16"
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
