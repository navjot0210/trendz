import "@fortawesome/fontawesome-free/css/all.min.css";
import companyLogo from "../img/company-logo.png";
import { useProductContext } from "./ProductContext";
import { Link } from "react-router-dom";

function Header() {
  const { cart, setLogin } = useProductContext();

  return (
    <header>
      <div className="sub-header">
        <div className="container flex space-between">
          <p className="up-case">Free shipping on your first order!</p>
          <div className="top-side-options flex gap-20">
            <p className="up-case">
              Usd <i className="fa-solid fa-angle-down"></i>
            </p>
            <p>
              English <i className="fa-solid fa-angle-down"></i>
            </p>
            <p>
              My Account <i className="fa-solid fa-angle-down"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="flex container">
          <div className="width-33 company-icon">
            <img src={companyLogo} className="logo" alt="Trendz" />
          </div>
          <div className="width-33 header-options up-case">
            <ul className="flex gap-30">
              <Link to="/about/"><li>About us</li></Link>
              <Link to="/#products-list"><li>Products</li></Link>
              <Link to="/"><li>Offers</li></Link>
            </ul>
          </div>
          <div className="width-33 user flex gap-30">
            <i className="fa-solid fa-magnifying-glass"></i>
            <Link to="cart/">
              <i
                className={`cart fa-solid fa-cart-shopping ${
                  cart.length > 0 && "cart-not-empty"
                }`}
              ><div className='cart-length'><span>{cart.length}</span></div></i>
            </Link>
            
            <i className="fa-solid fa-user" onClick={() => setLogin(true)}></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
