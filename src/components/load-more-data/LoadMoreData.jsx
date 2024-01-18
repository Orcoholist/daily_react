import React, { useEffect, useState } from "react";
import  "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
   
    try {
        setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
  
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
        console.log(products)
      }

      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {    
        setDisableButton(true)    
    }
  }, [products]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="products-wrapper">
        {products && products.length
          ? products.map((product,index) => (
              <div key={index}
              className="product">
                <h3>{product.title}</h3>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.description}</p>
              </div>
            ))
          : null}
          <div className="button-wrapper">
          <button disabled={disableButton} onClick={() => setCount(count + 1)}> Load More </button>
          { disableButton ? <p> No more products </p> : null}
          </div>
          
      </div>
    </div>
  );
}
