import React from "react";
import "./Style.css";
import dress from "../../Images/dresss.jpg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import More from "../HomePage/More";
function MoreItems() {
  let { _id } = useParams();
  const [products, setProducts] = useState([]);
  const [newDataArray, setNewDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3300/product/moreproducts`
        );
        setProducts(response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="more-main">
        <div className="more-Items">
        {Object.values(products).map((item) => (
          <More product={item} key={item._id} />
        ))}
        </div>
      </div>
    </>
  );
}

export default MoreItems;
