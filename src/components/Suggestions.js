import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


function Suggestions({ category }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => {
        const products = data.products.length > 4 ? data.products.slice(0, 5) : data.products;
        setSuggestedProducts(products);
        setLoading(false);
        console.log('suggested');
        console.log(data);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h2 className='container'>Products that may interest you:</h2>
      <div className='suggestions flex space-between container'>
        {suggestedProducts.map(product => (
          <NavLink to={`/trendz/product/${product.id}`} key={product.id}>
            <div className='suggestion'>
              <img src={product.images[0]} alt={product.title} />
              <div className='flex space-between'>
                <p>{product.title}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Suggestions;
