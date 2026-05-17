# 💪 Nutrify.com - Fitness Supplement Website

Nutrify.com is a full-stack web application for browsing fitness supplements with a working authentication system (Signup/Login) using Node.js, Express, MongoDB Atlas, and frontend HTML/CSS/JS.

---

## 🚀 Live Demo
👉 https://nutrify-89qo.onrender.com

---

## 📌 Features

- User Signup & Login system
- Password encryption using bcrypt
- MongoDB Atlas database integration
- Simple authentication flow
- Responsive UI design
- Supplements product listing page
- Fully deployed online using Render

---

## 🛠️ Tech Stack

**Frontend:**
- HTML
- CSS
- JavaScript

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB Atlas

**Packages:**
- bcryptjs
- mongoose
- dotenv
- cors

---

## 📁 Project Structure

```

Nutrify/
│
├── public/
│   ├── home.html
│   ├── login.html
│   ├── signup.html
│   ├── style.css
│
├── server.js
├── package.json
├── .env (NOT uploaded to GitHub)
└── README.md

````

---

## ⚙️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/StuPratikNaik/Nutrify.git
````

---

### 2. Go to project folder

```bash
cd Nutrify
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Create `.env` file

Inside project root, create `.env` file:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

---

### 5. Start the server

```bash
node server.js
```

---

### 6. Open in browser

```
http://localhost:5000
```

---

## 🌐 How to Run Online (Render Deployment)

### ✔ Step 1: Push code to GitHub

```bash
git add .
git commit -m "final project"
git push
```

---

### ✔ Step 2: Go to Render

👉 [https://render.com](https://render.com)

---

### ✔ Step 3: Create Web Service

* Connect GitHub repo
* Select: Nutrify
* Runtime: Node.js

---

### ✔ Step 4: Add Environment Variable

| KEY       | VALUE                                |
| --------- | ------------------------------------ |
| MONGO_URI | your MongoDB Atlas connection string |

---

### ✔ Step 5: Start Command

```
node server.js
```

---

### ✔ Step 6: Deploy

Click **Deploy** and wait 2–3 minutes.

Your live site will be:

```
https://your-app.onrender.com
```

---

## 🧠 How It Works

1. User opens website
2. Signs up → data stored in MongoDB
3. Password is hashed using bcrypt
4. User logs in → credentials checked
5. On success → redirected to home page

---

## 🔐 Environment Variables

| Variable  | Description                     |
| --------- | ------------------------------- |
| MONGO_URI | MongoDB Atlas connection string |

---

## ⚠️ Important Notes

* `.env` file is NOT uploaded to GitHub
* MongoDB must allow access from:

```
0.0.0.0/0
```

* Render automatically deploys when you push to GitHub

---

## 👨‍💻 Author

**Pratik Naik**

---

## 🚀 Future Improvements

* JWT authentication (secure login)
* User dashboard
* Admin panel
* Product database
* Payment integration

---

## ⭐ Support

If you like this project, give a ⭐ on GitHub

```

---

# 🎯 DONE

Now you have:

✔ Professional README  
✔ Deployment steps  
✔ Local setup  
✔ Online setup  
✔ Clean project documentation  

---

If you want next upgrade, I can help you make this:

🔥 :contentReference[oaicite:0]{index=0}  
🔥 :contentReference[oaicite:1]{index=1}  
🔥 :contentReference[oaicite:2]{index=2}  
🔥 :contentReference[oaicite:3]{index=3}  

Just tell 👍
```
