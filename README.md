# 🔗 URL Shortener

A simple URL shortening service built with **Node.js**, **Express**, **MongoDB**, and **EJS**. It allows users to input a long URL and receive a shortened version, track the number of clicks, and view analytics.

## 🚀 Features

- Shorten long URLs
- Automatically generate unique short IDs
- Track total clicks and visit history
- Server-side rendering using EJS
- Analytics endpoint for short URLs

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS (Embedded JavaScript templates)
- shortid & nanoid for ID generation
- dotenv for environment configuration

---

## 📁 Project Structure
├── app.js # Main app entry <br>
├── connect.js # MongoDB connection logic <br>
├── models/ <br>
│ └── Url.js # URL schema/model <br>
├── controllers/ <br>
│ └── Url.js # Business logic (generate URL, analytics) <br>
├── routes/ <br>
│ ├── Url.js # API routes <br>
│ └── staticRoutes.js # View rendering routes <br>
├── view/ <br>
│ └── home.ejs # Main page UI <br>
├── .env # Environment variables <br>
└── package.json


<h2>📡 API Endpoints:</h2>
<h3>POST /url:</h3>
Accepts a JSON or form payload with the url key.<br>
Returns a short URL.

<h3>GET /:shortId</h3>
Redirects to the original URL and logs the visit.

<h3>GET /url/analytics/:shortId</h3>
Returns analytics including total clicks and timestamps.
