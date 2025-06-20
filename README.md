# 👤 Paginated User List with Infinite Scroll

A React project to build a scrollable, paginated user list using data from a remote API. Includes infinite scroll, loading/error handling, and clean component structure.

---

## 🎯 Objective

- Fetch user data from an API and display it in a scrollable, paginated list.
- Use **React Query**, **SWR**, or custom state management for data fetching.
- Componentize each user as a `<UserCard />`.
- Implement **infinite scroll** using either `IntersectionObserver` or scroll listener.
- Add loading spinners, error states, and fallback UI for better UX.

---


### 🔁 Sample API Response:

```json
{
  "users": [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "email": "emily.johnson@x.dummyjson.com",
      "phone": "+81 965-431-3024",
      "image": "https://dummyjson.com/icon/emilys/128",
      "university": "University of Wisconsin--Madison",
      "company": {
        "title": "Sales Manager"
      }
    }
  ],
  "total": 208,
  "skip": 0,
  "limit": 1
}
```

---

## ⚙️ Installation

To set up this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/ActiveShayun/infinity-scrolling-features.git
```

### 2. Navigate to the project folder

```bash
cd your-repo-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

✅ The app will now be running at: [http://localhost:3000](http://localhost:3000)

---

## 🧩 Tech Stack

- ✅ React
- ✅ React Query & tanstack query
- ✅ addeventlistener / Scroll Listener
- ✅ Tailwind CSS 

---

## 📦 Features

- Infinite scroll user list
- Clean reusable components (`<UserCard />`)
- Error and loading UI handling
- Paginated fetching with `skip` and `take` params

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Author

**Apu Roy** – [@yourhandle](https://github.com/ActiveShayun)