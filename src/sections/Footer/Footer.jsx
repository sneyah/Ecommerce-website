import './Footer.css'
import { RiMapPinFill, RiPhoneFill, RiMailFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-container container">
        <div className="footer-box">
          <div className="footer-title">Promo</div>
          <img src="/footer.jpg" alt="" />
          <h4>Elevate your look, redefine your space.</h4>
          <p>Discover elegance in every detail!</p>
        </div>
        <div className="footer-box">
          <div className="footer-title">Quick Links</div>
          <div className="footer-row">
            <div className="col">
              <li><a href="">Sell Online</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Categories</a></li>
              <li><a href="">Deals</a></li>
              <li><a href="">Latest Trends</a></li>
            </div>
            <div className="col">
              <li><a href="">Brands</a></li>
              <li><a href="">Return</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Deals</a></li>
              <li><a href="">Trends</a></li>
            </div>
            <div className="col">
              <li><a href="">Best Sales</a></li>
              <li><a href="">New Products</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Terms & Service</a></li>
              <li><a href="">Latest Trends</a></li>
            </div>
          </div>
        </div>
        <div className="footer-box">
          <h5 className="footer-title">Contact Us</h5>
          <p><span><RiMapPinFill /></span> 123 Main Street Anytown, USA</p>
          <p><span><RiPhoneFill /></span>555-123-4567</p>
          <p><span><RiMailFill /></span>example123@email.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
