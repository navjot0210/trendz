import React from 'react';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Trendz</title>
      </Helmet>
      <Slider />
      <ProductList />
    </>
  );
}

export default Home;