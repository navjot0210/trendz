import { Routes, Route } from 'react-router-dom';
import { ProductContext, useProductContext } from './components/ProductContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <ProductContext.Provider value={useProductContext()}>
        <Header />
        <main>
          <Routes>
            <Route path="/trendz/*" element={
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            } />
          </Routes>
          <LoginForm show={true} />
        </main>
        <Footer />
      </ProductContext.Provider>
    </>
  )
}

export default App;