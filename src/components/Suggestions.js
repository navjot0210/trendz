import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Suggestions({ rating, category }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const products =
          data.products.length > 4 ? data.products.slice(0, 5) : data.products;
        setSuggestedProducts(products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="similar-products">
      <div className="container">
        <h2>Products you may like</h2>
        <div className="suggestions flex space-between container">
          {suggestedProducts.map((product) => (
            <NavLink to={`/product/${product.id}`} key={product.id}>
              <div className="suggestion">
                <img src={product.images[0]} alt={product.title} />
                <div className="flex space-between">
                  <p className="suggest-name">{product.title}</p>
                </div>
                <span className='star flex'><i className="fa-solid fa-star"></i>{product.rating}<p>(3.2K Reviews)</p></span>
                <div className="flex space-between">
                  <span className="price">${product.price}</span>
                  <span className="cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
