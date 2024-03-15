import React, { useState, useEffect } from "react";
import "./Admin.css";
import axios from "axios";

const AddProduct = () => {
  const initialProductData = {
    id: "",
    title: "",
    rating: "",
    price: "",
    image: "",
    addImage1: "",
    addImage2: "",
    addImage3: "",
    description: "",
    count: "",
    category: "",
  };

  const [productData, setProductData] = useState(initialProductData);
  const [isDuplicateId, setIsDuplicateId] = useState(false);
  useEffect(() => {
   
    setProductData(initialProductData);
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      const numericValue = parseFloat(value);
      if (numericValue < 0 || numericValue > 5) {
        alert("Rating must be between 0 and 5");
        return;
      }
    }

    if (["rating", "price", "count", "stock"].includes(name) && parseFloat(value) < 0) {
      alert(`${name} cannot be a negative number`);
      return;
    }

   
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      category: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const _id = productData.id;
      const title = productData.title;
      const rating = productData.rating;
      const price = productData.price;
      const image = productData.image;
      const cartone = productData.cartone;
      const carttwo = productData.carttwo;
      const cartthree = productData.cartthree;
      const description = productData.description;
      const count = productData.count;
      const category = productData.category;

      const response = await axios.post(
        `http://localhost:3300/product/${_id}`,
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
          category,
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Product added successfully!");
        alert("Product added");
        setProductData(initialProductData);
      } else {
        const errorData = response.data;
        console.error(errorData.message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("duplicate Id. Please try again.");
    }
  };

  return (
    <div className="addProduct">
      <h2 className="add-prohead">ADD PRODUCT</h2>
      <div className="add-pro">
      <div  className="inputscartscategory">
          <div><label htmlFor="title">Category</label></div>
          <div>
          <select value={productData.category} onChange={handleCategoryChange}>
            <option value={0}>Guitar</option>
            <option value={1}>Keyboard</option>
          </select>
          </div>
        </div>

        <div className="inputscarts">
          <div>
            <label htmlFor="id">ID</label>
          </div>
          <div>
            <input
              type="text"
              id="id"
              name="id"
              className="input-form"
              value={productData.id}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="inputscarts">
          <div>
            <label htmlFor="title">Title</label>
          </div>
          <div>
            <input
              type="text"
              id="title"
              name="title"
              className="input-form"
              value={productData.title}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="inputscartsrate">
          <div>
            <label htmlFor="rating">Rating</label>
          </div>
          <div>
            {" "}
            <input
            className="ratescale input-form" 
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              value={productData.rating}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="inputscarts">
          <div>
            <label htmlFor="price">Price</label>
          </div>
          <div>
            <input
              type="text"
              id="price"
              name="price"
              min="0"
              step="0.01"
              className="input-form"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="inputscarts">
          <div>
            <label htmlFor="image">Image</label>
          </div>
          <div>
            <input
              type="text"
              id="image"
              name="image"
              className="input-form"
              value={productData.image}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="inputscarts">
          <div>
            <label htmlFor="addImage1">Additional Image</label>
          </div>
          <div>
            <input
              type="text"
              id="addImage1"
              className="input-form"
              name="cartone"
              value={productData.addImage1}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inputscarts">
          <div>
            <label htmlFor="addImage2">Additional Image</label>
          </div>
          <div>
            <input
              type="text"
              id="addImage2"
              name="carttwo"
              className="input-form"
              value={productData.addImage2}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inputscarts">
          <div>
            <label htmlFor="addImage3">Additional Image</label>
          </div>
          <div>
            <input
              type="text"
              id="addImage3"
              name="cartthree"
              className="input-form"
              value={productData.addImage3}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inputscarts">
          <div>
            <label htmlFor="description">Description</label>
          </div>
          <div>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={productData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="inputscarts">
          <div>
          <label htmlFor="count">Stock</label>
          </div>
          <div>
          <input
            type="text"
            id="count"
            name="count"
            min="0"
            className="input-form"
            value={productData.count}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div>
          <button type="button" onClick={handleAddProduct} className="addprod">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
