import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Suggestions from '../components/Suggestions';



function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theProduct, setTheProduct] = useState(null);
  const [picturePointer, setPicturePointer] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState('');
  const { id } = useParams();
  const location = useLocation();

  const getDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 2);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    setDeliveryDate(`FREE delivery ${formattedDate}`);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTheProduct(data);
        setLoading(false);
        console.log(data);
        getDeliveryDate();
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [deliveryDate, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className='product-detail'>
      <div className='container wrapper flex space-between'>
        <div className='picture-preview'>
            <div className='picture-box'>
                <img src={theProduct.images[picturePointer]} alt={theProduct.title}></img>
            </div>
            <div className='thumbnails flex'>
                {theProduct.images.map((image, index) => (
                  <img 
                  src={image} 
                  alt={`${theProduct.title} thumbnail ${index + 1}`} 
                  key={index}
                  onClick={() => setPicturePointer(index)}
                  className={picturePointer === index ? 'selected-thumbnail' : ''}
                  >
                  </img>
                ))}
            </div>
        </div>
        <div className='details'>
            <h1>{theProduct.title}</h1>
            <p className='description'>{theProduct.description}</p>
            <p><span>Brand name: </span>{theProduct.brand}</p>
            <p><span>Category: </span>{theProduct.category}</p>
            <div className='price'>
                <div className='flex'>
                    <p className='original-price'><span>${theProduct.price}</span></p>
                    <p className='discounted-price'>${(theProduct.price * (1 - (theProduct.discountPercentage / 100))).toFixed(2)}</p>
                    <p className='discount'>{theProduct.discountPercentage}% OFF</p>
                </div>
            </div>
            <p className='in-stock'>Available in-stock: {theProduct.stock > 0 ? theProduct.stock : 'Out of stock'}</p>
            <p className='delivery-date'>{deliveryDate}</p>
            <div className='flex'>
                <button className='primary'>Buy now</button>
                <button className='secondary'><i className="fas fa-cart-plus"></i> Add to cart</button>
            </div>
        </div>
      </div>
      <Suggestions category={theProduct.category} />
    </section>
  );
}

export default Product;
