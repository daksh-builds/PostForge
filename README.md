PostForge – Blog Application

A simple and functional blog application built with Node.js, Express, MongoDB, and EJS.
Includes JWT authentication, password hashing, blog creation, and commenting system.

🚀 Features
Authentication

User signup & login

JWT-based auth

Hashed passwords (secure user storage)

Blog System

Create blog posts

Upload cover images

View individual blogs

Author info displayed on each post

Comments

Users can add comments on blogs

Comments linked with user and blog

Tech Stack

Node.js

Express.js

MongoDB + Mongoose

EJS templating

Multer for file uploads

JWT for secure sessions

bcrypt for password hashing

📁 Folder Structure (Short Overview)
/models        → User, Blog, Comment schemas
/routes        → Auth, Blog, Comment routes
/views         → EJS pages
/uploads       → Uploaded images (ignored in git)

🔐 Environment Variables

Create a .env file:

MONGO_URL=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=3000

▶️ Running the App
npm install
npm start


App runs at:

http://localhost:8001

📝 Notes

node_modules, .env, and uploads are ignored properly via .gitignore.

Clean and modular code structure for easy expansion later.
