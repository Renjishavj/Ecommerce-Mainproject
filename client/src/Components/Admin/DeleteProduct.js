import React from 'react'
import { useState } from 'react';
import axios from "axios"
function DeleteProduct() {
    const [productData, setProductData] = useState({
        id: '',
        category: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      
    const handleCategoryChange = (e) => {
        const { value } = e.target;
        setProductData((prevData) => ({
          ...prevData,
          category: value
        }));
      };

      const handleDeleteProduct = async () => {
        try {
          const _id=productData.id
          const category=productData.category
          const response = await axios.delete(`http://localhost:3300/product/${_id}?category=${category}` );
          if (response.status === 200 || response.status === 201) {
            console.log("deletion successful!");
            alert("product deleted")
          } else {
            const errorData = response.data;
            console.error(errorData.message);
          }
        } catch (error) {
          console.error('Error deleting product:', error);
          alert('Error deleting product. Please try again.');
          console.log(error)
        }
      };
  return (
    <div>
    <div>
        <label htmlFor="title">SelectCategory</label>
       <select value={productData.category} onChange={handleCategoryChange}>
        <option value={0}>Guitar</option>
        <option value={1}>Keyboard</option>
       </select>
        </div>

        <div><label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={productData.id} onChange={handleChange} required />
        </div>
        <div>
          <button  onClick={handleDeleteProduct}>Delete</button>
        </div>

    </div>
  )
}

export default DeleteProduct
