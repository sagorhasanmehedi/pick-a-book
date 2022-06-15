import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer-content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <span className="logo_name">Pick A Book</span>
            </div>
            <div className="media-icons">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Shop by</li>
              <li>
                <a href="#">Book Category</a>
              </li>
              <li>
                <a href="#">Boi Mela 2022</a>
              </li>
              <li>
                <a href="#">Islamic Book</a>
              </li>
              <li>
                <a href="#">Best Selling</a>
              </li>
            </ul>

            <ul className="box">
              <li className="link_name">Products</li>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <a href="#">Authors</a>
              </li>
              <li>
                <a href="#">Publishers</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Support</li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Find My Product</a>
              </li>
              <li>
                <a href="#">Order Track</a>
              </li>
              <li>
                <a href="#">Help Desk</a>
              </li>
            </ul>

            <ul className="box">
              <li className="link_name">Policies</li>

              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Happy Return</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Photoshop</a>
              </li>
            </ul>

            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2022 <a href="#">Pick A Book.</a>All rights reserved
            </span>
            <span className="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
