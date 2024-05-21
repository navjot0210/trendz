import React, { useEffect } from 'react'


function Products() {
    const retrive = async () => {
        await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(console.log);
    };
    useEffect(() => {

    }, []);
    return (
        <div>Products</div>
    )
}

export default Products