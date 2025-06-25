# 🛍 React Product Filter Assignment

A React-based product table with dynamic filtering, editing, and deletion features.
![image](https://github.com/user-attachments/assets/e600a590-51a0-409d-ac50-28da08b5e38f)


## Live Demo

🔗 [Click to View Deployed Application](https://react-product-filter-assignment.vercel.app)

---

##  Features

-  **Dynamic Filtering**  
  - Filter products by **brand** and **category**
  - Depending on the current filtered results, dropdown values are dynamically populated.

-  **Inline Editing**  
  - All fields (title, brand, category, rating, price) are shown in input field so they are editable directly in the table.

-  **Deletable Row**  
  - Remove any product using a delete button.

-  **Reset Filter**  
  - Reset all active filters on the table with one click.

-  **Local Mock API**  
  - Fakes backend using Promises and `setTimeout`
  - Data is initially fetched from `https://dummyjson.com/products` and stored locally

-  **Basic Styling**  
  - Hover effects, button shadows, and improved table layout

---

## 🧑‍💻 Tech Stack

- **React** (v19)
- **Vite** (build tool)
- **CSS** for styling
- **JavaScript Promises** for mock API
- **Deployed on Vercel**

---

## 📁 Project Structure
```bash
fetch-api/
├── public/                     # Static assets (e.g., favicon, index.html content)
├── src/
│   ├── components/
│   │   └── ProductsData.jsx    # Renders each product as a row in the table
│   ├── libs/
│   │   ├── api.js              # Mock API functions using Promise + setTimeout
│   │   └── products.js         # Locally stored dummy product data
│   ├── App.jsx                 # Main component: table, filters, editable fields
│   ├── App.css                 # Styling for the table, buttons, inputs
│   └── main.jsx                # Entry point that mounts the App
├── index.html                  # Main HTML file for Vite
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Project documentation
└── .gitignore                  # Files/folders to ignore in Git
```

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/OmLitoriya2004/react-product-filter-assignment.git
   cd fetch-api
   ```
2. **Install dependencies**
  ```bash
  npm install
  ```
3.**Start the app**
  ```bash
  npm run dev
  ```
