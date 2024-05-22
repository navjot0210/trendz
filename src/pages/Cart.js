import React, { useContext } from 'react';
import { ProductContext, useProductContext } from '../components/ProductContext';
import CartItem from '../components/CartItem';
import '../css/products.css'

function Cart() {
    const { cart, setCart } = useProductContext();
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };
    return (
        <section className='cart'>
            <ul>
                {cart.map(item => <CartItem key={item.id} {...item} removeFromCart={removeFromCart} />)}
            </ul>
            <div>
                <h3>Subtotal: ${cart.reduce((prev, curr) => prev + curr.price, 0)}cad</h3>
                <button>Checkout</button>
            </div>
        </section>

    )
}

export default Cart;