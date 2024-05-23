import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import {
  ProductContext,
  useProductContext,
} from "../components/ProductContext";
import CartItem from "../components/CartItem";
import "../css/cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useProductContext();
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <section className="cart container">
      <Helmet>
        <title>Trendz shopping cart</title>
      </Helmet>
      {cart.length > 0 ? (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={Date.now() + Math.random() * 99999}
                {...item}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          <div className="cart-checkout">
            <h3>
              Subtotal: $
              {Math.floor(
                cart.reduce((prev, curr) => prev + curr.price, 0) * 100
              ) / 100}{" "}
              CAD
            </h3>
            <button className="primary">Checkout</button>
          </div>
        </>
      ) : (
        <div className="empty">
          <h4>
            <Link to="/">Empty cart, Find anything you like!</Link>
          </h4>
        </div>
      )}
    </section>
  );
}

export default Cart;
