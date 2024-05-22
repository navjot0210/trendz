import React, { } from 'react'
import { Link } from 'react-router-dom';
import { useProductContext } from './ProductContext';
import { LuShoppingCart } from "react-icons/lu";

function ProductListItem(props) {
    const { id, brand, price, rating, thumbnail } = props;
    const { setCart } = useProductContext();
    const addToCart = () => {
        setCart(prev => [...prev, props]);
    };
    return (
        <li className='product'>
            <Link to={{
                pathname: `product/${id}`,
                state: { data: { ...props } }
            }}
            >
                <img src={thumbnail} alt={brand} />
            </Link>
            <div>
                <span>${price}</span>
                <span>{rating}</span>
                <LuShoppingCart className='cart' onClick={addToCart} />
            </div>


        </li>
    )
}

export default ProductListItem