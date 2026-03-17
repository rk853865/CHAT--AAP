# 📝 Notes App (React)

A simple and clean Notes App built using **React JS**. This project demonstrates core React concepts like components, hooks, state management, and local storage.

---

## 🚀 Features

* ➕ Add new notes
* ❌ Delete notes
* ✏️ Edit existing notes *(Bonus)*
* 🕒 Timestamp for each note *(Bonus)*
* 💾 Data persistence using Local Storage
* ⚠️ Prevent empty notes
* 📱 Responsive and clean UI

---

## 🛠️ Tech Stack

* React JS (Functional Components)
* React Hooks (`useState`, `useEffect`)
* CSS (Basic Styling)

---

## 📁 Project Structure

```
notes-app/
│── public/
│── src/
│   │── components/
│   │   ├── NoteForm.js
│   │   ├── NoteList.js
│   │   ├── NoteItem.js
│   │
│   │── App.js
│   │── App.css
│   │── index.js
│
│── package.json
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the repository

```
git clone https://github.com/your-username/notes-app.git
```

### 2. Navigate to project folder

```
cd notes-app
```

### 3. Install dependencies

```
npm install
```

### 4. Start the development server

```
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 💡 How It Works

* Notes are stored in **React state**
* Data is saved in **Local Storage**
* On page reload, notes are fetched from Local Storage
* Each note has:

  * Unique ID
  * Text content
  * Timestamp

---

## 📌 Future Improvements

* 🌙 Dark Mode
* 🔍 Search Notes
* 📂 Categorize Notes
* ☁️ Backend Integration (MongoDB / Firebase)
* 🔐 Authentication System

---

## 🙌 Author

**RAHUL KUMAR**

---

## 📄 License

This project is open-source and free to use.
