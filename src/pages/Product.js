import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Suggestions from '../components/Suggestions';
import { ProductContext, useProductContext } from '../components/ProductContext';
import Rating from 'react-rating';
import {Helmet} from "react-helmet";
import { motion } from "framer-motion";


function Product() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theProduct, setTheProduct] = useState(null);
  const [picturePointer, setPicturePointer] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState('');
  const { id } = useParams();
  const { setCart } = useProductContext();
  const addToCart = () => {
      setCart(prev => [...prev, theProduct]);
  };

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
        setTheProduct(data);
        setLoading(false);
        getDeliveryDate();
        window.scrollTo(0, 0);
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
      <Helmet>
        <title>{theProduct.title} on Trendz</title>
      </Helmet>
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
            <Rating
              placeholderRating={theProduct.rating % 1 < 0.5 ? theProduct.rating.toFixed(0) : theProduct.rating.toFixed(0) +1 }
              emptySymbol={<img src={require('../media/star-grey.png')} className="icon" alt="grey star" />}
              placeholderSymbol={<img src={require('../media/star-red.png')} className="icon" alt="red star" />}
              fullSymbol={<img src={require('../media/star-yellow.png')} className="icon" alt="yellow star" />}
            />
            <p className='description'>{theProduct.description}</p>
            <p><span>Brand name: </span>{theProduct.brand}</p>
            <p className='category'><span>Category: </span>{theProduct.category}</p>
            <div className='price'>
                <div className='flex'>
                    <p className='original-price'><span>${theProduct.price}</span></p>
                    <p className='discounted-price'>${(theProduct.price * (1 - (theProduct.discountPercentage / 100))).toFixed(2)}</p>
                    {/* <p className='discount'>{theProduct.discountPercentage}% OFF</p> */}
                </div>
            </div>
            <p className='in-stock'>Available in-stock: {theProduct.stock > 0 ? theProduct.stock : 'Out of stock'}</p>
            
            <div className='flex'>
                <button className='primary'>Buy now</button>
                <button className='secondary'
                    onClick={addToCart}
                    >   
                    <i className="fas fa-cart-plus"></i> Add to cart
                </button>
            </div>
            <p className='delivery-date'>{deliveryDate}</p>
        </div>
      </div>
      <Suggestions category={theProduct.category} />
    </section>
  );
}

export default Product;
