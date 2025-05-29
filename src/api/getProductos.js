import axios from './axios.js';

export default async function getProductos() {
    try {
      const response = await axios.get("/products");
      return response.data.products; // Return all products
    } catch (err) {
      console.error(err);
      return []; // Return empty array on error
    }
  }