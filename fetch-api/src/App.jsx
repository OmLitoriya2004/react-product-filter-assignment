import { useEffect, useState } from "react";
import "./App.css";
import { getProducts, updateProduct } from "./libs/api.js";
import ProductsData from "./components/ProductsData.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({brand: "",category: "" });

  useEffect(() => {
    getProducts().then((res) => {
      const { success, message, data } = res;
      if (!success) {
        console.log(message);
        return;
      }
      setProducts(data.products);
      console.log(data.products);
    });
  }, []);
  const resetFilters = () => {
    setFilters({brand:"",category:""});
  };
  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const handleEdit = (id, field, value) => {
    updateProduct(id, field, value).then((res) => {
      if (res.success) {
        const updated = products.map((p) => (p.id === id ? res.data : p));
        setProducts(updated);
      }
    });
  };
  const filteredProducts = products.filter((product) => {
    return (
      (!filters.brand || product.brand === filters.brand) &&
      (!filters.category || product.category === filters.category)
    );
  });

  const getFilterOptions = (key) => {
    const filtered = products.filter((product) => {
      const tempFilter = { ...filters, [key]: "" };
      return (
        (!tempFilter.brand || product.brand === tempFilter.brand) &&
        (!tempFilter.category || product.category === tempFilter.category)
      );
    });

    return [...new Set(filtered.map((p) => p[key]))];
  };
  return (
    <div>
      <h3>Products Table</h3>
      <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
        <div>
          <label>Brand:</label>
          <select
            value={filters.brand}
            onChange={(e) => handleFilterChange("brand", e.target.value)}
          >
            <option value="">All</option>
            {getFilterOptions("brand")
              .filter(Boolean)
              .map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label>Category:</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
          >
            <option value="">All</option>
            {getFilterOptions("category")
              .filter(Boolean)
              .map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </div>
        <button
          onClick={resetFilters}
          style={{
            padding: "5px 12px",
            backgroundColor: "#d8d5f7",
            color: "black",
            borderRadius: "5px",
          }}
        >
          Reset
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <ProductsData
            products={filteredProducts}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </tbody>
      </table>
      {products ? true : <h1>No Products Found</h1>}
    </div>
  );
}

export default App;
