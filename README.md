# 🛍 React Product Filter Assignment

A React-based product table with dynamic filtering, editing, and deletion features.
![image](https://github.com/user-attachments/assets/e600a590-51a0-409d-ac50-28da08b5e38f)


## Live Demo

🔗 [Click to View Deployed App](https://react-product-filter-assignment.vercel.app)

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
fetch-api/
├── public/                      # Static assets (if any)
├── src/
│   ├── components/
│   │   └── ProductsData.jsx     # Renders each product as a row in table
│   ├── libs/
│   │   ├── api.js               # Contains API functions using Promise + setTimeout
│   │   └── products.js          # Stored dummy product data from the mentioned api
│   ├── App.jsx                  # Main component with table, filters, logic...
│   ├── App.css                  # Styling for table, buttons....
│   └── main.jsx                 
├── index.html                   
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite config
├── README.md                    # Project documentation
└── .gitignore                   # Git ignored files


