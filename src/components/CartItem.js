import React from 'react';
import { LuTrash2 } from "react-icons/lu";
import { Link } from 'react-router-dom';

function CartItem({ id, thumbnail, description, price, removeFromCart }) {
  return (
    <li key={Date.now()}>
      <LuTrash2 onClick={() => removeFromCart(id)} />
      <Link to={`/product/${id}`}><img src={thumbnail} alt={description} /></Link>
      <div>
        <span>${price}</span>
      </div>
    </li>
  )
}

export default CartItem