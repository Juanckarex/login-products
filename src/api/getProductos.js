import axios from './axios.js';

export default async function getProducto() {
    try {
      const response = await axios.get("/products");
      // console.log(response.data.products[25]);
      return response.data.products[25]; 
    } catch (err) {
      console.error(err);
      return null; 
    }
  }