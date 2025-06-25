import dummyProducts from "./products";

let productsDB = [...dummyProducts];

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Products fetched successfully",
        data: { products: productsDB },
      });
    }, 500);
  });
};

export const updateProduct = async (id, field, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = productsDB.findIndex((p) => p.id === id);
      if (index === -1) {
        reject({
          success: false,
          message: "Product not found",
        });
      } else {
        productsDB[index][field] = value;
        resolve({
          success: true,
          message: "Product updated successfully",
          data: productsDB[index],
        });
      }
    }, 500); 
  });
};
