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
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <ProductContext.Provider value={useProductContext()}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <LoginForm />
          </main>
          <Footer />
        </ProductContext.Provider>
      </AnimatePresence>
    </>
  )
}

export default App;