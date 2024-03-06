import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
   
     <div>
     <div>
      <h2>Product List</h2>
      <ul>
        {Object.keys(products).map((product) => (
          <li key={products[product]._id+Math.random()}>
            <img src={products[product].image} alt={products[product].title} />
            <div>
            <h3>{products[product]._id}</h3>
              <h3>{products[product].title}</h3>
              <p>{products[product].description}</p>
              <p>Price: ${products[product].price}</p>
              <p>Rating: {products[product].rating}</p>
             
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
   

  );
}

export default Products;
