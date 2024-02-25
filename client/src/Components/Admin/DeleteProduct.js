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
    <div className='admin-delte'>
    <div >
      <h1 className='dlte-head'>DELETE PRODUCT</h1>
      <div className='delete-inpt'>
      <label htmlFor="title">SelectCategory</label>
       <select value={productData.category} onChange={handleCategoryChange} className='inpvaluescat'>
        <option value={0}>Guitar</option>
        <option value={1}>Keyboard</option>
       </select>
      </div>
        
        </div>

        <div className='delete-inp'><label htmlFor="id">ID:</label>
        <input type="text" id="id"  className='inpvalues' name="id" value={productData.id} onChange={handleChange} required />
        </div>
        <div>
          <button  onClick={handleDeleteProduct} className='dltebtn'>Delete</button>
        </div>

    </div>
  )
}

export default DeleteProduct
