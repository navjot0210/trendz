import React, { useEffect, useState, useContext } from 'react';
import ProductListItem from './ProductListItem';
import { ProductContext, useProductContext } from './ProductContext';
// import '../css/products.css';
import { Link } from 'react-router-dom';

function ProductList() {

    const API_PRODUCTS = "https://dummyjson.com/products";
    const sortings = {
        PRICE_LTH: 'Price Low to High',
        PRICE_HTL: 'Price High to Low',
        RATINGS_LTH: 'Ratings Low to High',
        RATINGS_HTL: 'Ratings High to Low'
    };
    const DEFAULT = 'default';

    const { cart } = useProductContext();
    const [category, setCategory] = useState(DEFAULT);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [brand, setBrand] = useState(DEFAULT);
    const [brands, setBrands] = useState([]);
    const [sorting, setSorting] = useState(DEFAULT);
    const [allProducts, setAllProducts] = useState([]);

    const getData = async (url) => {
        try {
            const res = await fetch(url);
            return await res.json();
        } catch (error) {
            throw error.response;
        }
    };

    useEffect(() => {
        getData(`${API_PRODUCTS}/categories`).then(setCategories);
        getData(`${API_PRODUCTS}`).then(data => setProducts(data.products));
        getData(`${API_PRODUCTS}?limit=100`).then(data => {
            setBrands([...new Set(data.products.map(p => p.brand))]);
            setAllProducts(data.products);
        });
    }, []);

    useEffect(() => {
        brand !== DEFAULT && setProducts([...allProducts.filter(p => p.brand === brand)]);
    }, [brand]);

    useEffect(() => {
        category !== DEFAULT && getData(`${API_PRODUCTS}/category/${category}`).then(data => setProducts(data.products));
    }, [category]);

    useEffect(() => {
        let sorted = [...products];
        switch (sorting) {
            case sortings.PRICE_HTL:
                sorted.sort((a, b) => b.price - a.price);
                break;
            case sortings.RATINGS_HTL:
                sorted.sort((a, b) => b.rating - a.rating);
                break;
            case sortings.RATINGS_LTH:
                sorted.sort((a, b) => a.rating - b.rating);
                break;
            default:
                sorted.sort((a, b) => a.price - b.price);
        }
        setProducts(sorted);
    }, [sorting]);

    return (
        <section className='container products'>
            <div className='sortings'>
                <h2>Shop your favourite things!</h2>
                {/* <select value={brand} onChange={evt => setBrand(evt.target.value)}>
                    <option value={DEFAULT} disabled>Select a brand</option>
                    {brands.map(m => <option key={m} value={m}>{m}</option>)}
                </select> */}
                <div className='sort flex'>
                    <select value={category} onChange={evt => setCategory(evt.target.value)}>
                        <option value={DEFAULT} disabled>Select a category</option>
                        {categories.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                    </select>
                    <select value={sorting} onChange={evt => setSorting(evt.target.value)}>
                        <option value={DEFAULT} disabled>Select a sorting</option>
                        {Object.values(sortings).map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                </div>
            </div>
            <ul>
                {products.map(product => <ProductListItem key={product.id} {...product} />)}
            </ul>

        </section>
    )
}

export default ProductList;