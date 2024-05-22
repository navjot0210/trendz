import React, { useState, useEffect } from 'react';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theProduct, setTheProduct] = useState(null); //temp

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
        setTheProduct(data.products[0]);
        console.log(data.products[0]);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // 404
  }

  return (
    <div>
      <div className='wrapper flex'>
        <div className='picture-preview'>
            <div className='picture-box'>
                <img src={theProduct.images[0]}></img>
            </div>
            <div className='thumbnails flex'>
                {theProduct.images.map(image => {return <img src={image}></img>})}
            </div>
        </div>
        <div className='details'>
            <h1>{theProduct.title}</h1>
            <p>{theProduct.description}</p>
            <p>Brand name: {theProduct.brand}</p>
            <p>Category: {theProduct.category}</p>
            <div className='price'>
                <p><span>{theProduct.price}</span></p>
                <p>{(theProduct.price * (1 - (theProduct.discountPercentage / 100))).toFixed(2)}</p>
                <p>Discount: {theProduct.discountPercentage}%</p>
            </div>
            <p>Available on stock: {theProduct.stock > 0 ? theProduct.stock : 'Out of stock'}</p>
        </div>
      </div>

    </div>
  );
}

export default Product;
