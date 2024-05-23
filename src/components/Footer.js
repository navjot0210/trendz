import '@fortawesome/fontawesome-free/css/all.min.css';
import footerLogo from '../img/footer-icon.png';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='socials flex gap-30'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className='main-footer flex'>
          <span className='footer-logo'>
            <img src={footerLogo} className='ft-logo' alt='Trendz' />
            <p className='logo-text'>Your shopping partner</p>
          </span>
          <span className='footer-about'>
            <h4 className='up-case'>About us</h4>
            <ul>
              <li>Our Team</li>
              <li>Customer Reviews</li>
              <li>Contact Us</li>
            </ul>
          </span>
          <span className='footer-firm'>
          <h4 className='up-case'>Our Firm</h4>
          <ul>
              <li>Locations</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </span>
          <span className='footer-support'>
          <h4 className='up-case'>Support</h4>
          <ul>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Report Problem</li>
            </ul>
          </span>
          <span className='footer-results'>
          <h4 className='up-case'>Resources</h4>
          <ul>
              <li>Blogs</li>
              <li>Newsletter</li>
              <li>Free guides</li>
            </ul>
          </span>
        </div>
        <div className='grid center copyright'>
          <p>&copy; 2024 Trendz | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;