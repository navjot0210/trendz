import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";

function CartItem({
  rating,
  id,
  title,
  thumbnail,
  description,
  price,
  removeFromCart,
}) 

{
  return (
    <li className="cart-item" key={Date.now()}>
      <div className="item-image">
        <Link to={`/product/${id}`}>
          <img src={thumbnail} alt={description} />
        </Link>
        <div className="item-title">
          <h3>{title}</h3>
          <span className='star flex'><i class="fa-solid fa-star"></i>{rating}<p>(3.2K Reviews)</p></span>
        </div>

      </div>
      <div className="item-price">
        <span>${price}</span>
        <span>x</span>
        <span>1</span>
      </div>
      <LuTrash2 onClick={() => removeFromCart(id)} />
    </li>
  );
}

export default CartItem;
