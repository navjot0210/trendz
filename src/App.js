import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/trendz/*" element={
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;