const styling={
  width: "100%",
  padding: "4px 8px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
}
const ProductsData = ({ products, onDelete ,onEdit}) => {
  if (!products) return null;
  return (
    <>
      {products.map((prod) => {
        const { id, title, brand, category, price, rating } = prod;
        return (
          <tr key={id}>
            <td style={{ width: "30%" }}>
              <input
                type="text"
                value={title}
                onChange={(e) => onEdit(id, "title", e.target.value)}
                style={styling}
              />
            </td>
            <td>
              <input
                type="text"
                value={brand}
                onChange={(e) => onEdit(id, "brand", e.target.value)}
                style={styling}
              />
            </td>
            <td>
              <input
                type="text"
                value={category}
                onChange={(e) => onEdit(id, "category", e.target.value)}
                style={styling}
              />
            </td>
            <td>
              <input
                type="number"
                value={price}
                onChange={(e) =>
                  onEdit(id, "price", parseFloat(e.target.value))
                }
                style={styling}
              />
            </td>
            <td>
              <input
                type="number"
                value={rating}
                onChange={(e) =>
                  onEdit(id, "rating", parseFloat(e.target.value))
                }
                style={styling}
                step="0.1"
                min="0"
                max="5"
              />
            </td>
            <td>
              <button
                onClick={() => onDelete(id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "grey",
                  color: "white",
                  border: "dark",
                  borderRadius: "3px",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ProductsData;
