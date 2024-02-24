import React, { useState } from 'react';
import axios from 'axios';
const AddProduct = () => {
  const [productData, setProductData] = useState({
    id: '',
    title: '',
    rating: '',
    price: '',
    image: '',
    addImage1: '',
    addImage2: '',
    addImage3: '',
    description: '',
    count: '',
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
  const handleAddProduct = async () => {
    try {
      const _id=productData.id
      const title=productData.title
      const rating=productData.rating
      const price=productData.price
      const image=productData.image
      const cartone=productData.cartone
      const carttwo=productData.carttwo
      const cartthree=productData.cartthree
      const description=productData.description
      const count=productData.count
      const category=productData.category
      const response = await axios.post('http://localhost:3300/product/keyboard',
      {
        _id,
        title,
        rating,
        price,
        image,
        cartone,
        carttwo,
        cartthree,
        description,
        count,
        category
      }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("Registration successful!");
        alert("product added")
      } else {
        const errorData = response.data;
        console.error(errorData.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <div>
      <h1 className='add-prohead'>Add Product</h1>
      <div className='add-pro'>

      <div>
        <label htmlFor="title">Category</label>
       <select value={productData.category} onChange={handleCategoryChange}>
        <option value={0}>Guitar</option>
        <option value={1}>Keyboard</option>
       </select>
        </div>

        <div><label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={productData.id} onChange={handleChange} required />
        </div>

        <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={productData.title} onChange={handleChange} required />
        </div>

        <div>
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" value={productData.rating} onChange={handleChange} required />
        </div>

        <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" min="0" step="0.01" value={productData.price} onChange={handleChange} required />
        </div>

        <div>
        <label htmlFor="image">Image:</label>
        <input type="text" id="image" name="image" value={productData.image} onChange={handleChange} required />
        </div>

        <div>
        <label htmlFor="addImage1">Additional Image 1:</label>
        <input type="text" id="addImage1" name="addImage1" value={productData.addImage1} onChange={handleChange} />
        </div>

       <div>
       <label htmlFor="addImage2">Additional Image 2:</label>
        <input type="text" id="addImage2" name="addImage2" value={productData.addImage2} onChange={handleChange} />

       </div>

        <div><label htmlFor="addImage3">Additional Image 3:</label>
        <input type="text" id="addImage3" name="addImage3" value={productData.addImage3} onChange={handleChange} />
        </div>

       <div>
       <label htmlFor="description">Description:</label>
       
        <textarea id="description" name="description" rows="4" value={productData.description} onChange={handleChange} required />
        </div>
        <div>
        <label htmlFor="count">Stock:</label>
        <input type="number" id="count" name="count" min="0" value={productData.count} onChange={handleChange} required />
        </div>

       <div>
       <button type="button" onClick={handleAddProduct}>Add Product</button>
       </div>
        </div>
    </div>
  );
};

export default AddProduct;
