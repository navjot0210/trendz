import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "./ProductContext";
// import { LuShoppingCart } from "react-icons/lu";
import { motion } from "framer-motion";

function ProductListItem(props) {
    const { id, title, brand, price, rating, thumbnail } = props;
    const { setCart } = useProductContext();
    const addToCart = () => {
        setCart(prev => [...prev, props]);
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 }}
    };

    return (
        <motion.li variants={itemVariants} className='product'>
            <Link to={{
                pathname: `product/${id}`,
                state: { data: { ...props } }
            }}
            >
                <img src={thumbnail} alt={brand} />
            </Link>
            <p className='product-title'>{title}</p>
            <div>
                <span className='price'>${price}</span>
                {/* <span>{rating}</span> */}
                <span className='cart' onClick={addToCart}><i className='fa-solid fa-cart-shopping'></i></span>
            </div>
        </motion.li>
    )
}

export default ProductListItem;
