import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        /*const response = await axios.get(`http://localhost:3300/product/moreproducts`);
        console.log(response)
        setProducts(response.data);
        console.log(response.data);*/
        await axios.get(`http://localhost:3300/product/moreproducts`)
        .then((res)=>{
            console.log(res.data)
            const data=[res.data]
            // setProducts([res.data]);
            setProducts(data[0])
            })
            .catch((er)=>console.log(er));
          }
          catch(err){console.log(err)}

        }
      

    fetchData();
  }, []);
 

  return (
    <>
   
    
     <div className='view-all'>
      <h1 className='viewproducts-head'>Product List</h1>
      
      <ul className='viewall-ul'>
        {Object.keys(products).map((product) => (
          <li key={products[product]._id+Math.random()}>
            <div className='view-product'>
           <div> <img src={products[product].image} alt={products[product].title}  className='viewall-img'/></div>
            <div>
            <h3>{products[product]._id}</h3>
              <h3>{products[product].title}</h3>
              <p>{products[product].description}</p>
              <p>Price: ${products[product].price}</p>
              <p>Rating: {products[product].rating}</p>
              <p>Stock:{products[product].count}</p>
              <div className='viewall-btns'>
              <div>
                <Link to="/adminpage/updateproduct">
                <button className='view-btn'>Edit</button>
                </Link>
                </div>
              <div>
              <Link to="/adminpage/deleteproduct">
                <button className='view-btn'>Delete</button>
                </Link>
                </div>
              </div>
              
            </div>
            </div>
          </li>
        ))}
      </ul>
     
    
    </div>
    </>
   

  );
}

export default Products;
