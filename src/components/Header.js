import '@fortawesome/fontawesome-free/css/all.min.css';
import companyLogo from '../img/company-logo.png';

function Header() {
  return (
    <header>
      <div className='sub-header'>
        <div className='container flex space-between'>
          <p className='up-case'>Free shipping on your first order!</p>
          <div className='top-side-options flex gap-20'>
            <p className='up-case'>Usd <i class="fa-solid fa-angle-down"></i></p>
            <p>English <i className="fa-solid fa-angle-down"></i></p>
            <p>My Account <i className="fa-solid fa-angle-down"></i></p>
          </div>
        </div>
      </div>
      <div className='main-header'>
        <div className='flex container'>
          <div className='width-33 company-icon'>
            <img src={companyLogo} className='logo' alt='Trendz' />
          </div>
          <div className='width-33 header-options up-case'>
            <ul className='flex gap-30'>
              <li>About us</li>
              <li>Products</li>
              <li>Offers</li>
            </ul>
          </div>
          <div className='width-33 user flex gap-30'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;