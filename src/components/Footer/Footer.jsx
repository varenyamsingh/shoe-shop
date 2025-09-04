import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Find A Store</a></li>
            <li><a href="#">Become A Member</a></li>
            <li><a href="#">Running Shoe Finder</a></li>
            <li><a href="#">Product Advice</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Get Help</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Contact Us On Nike.com Inquiries</a></li>
            <li><a href="#">Contact Us On All Other Inquiries</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Nike</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Impact</a></li>
            <li><a href="#">Report a Concern</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Nike, Inc. All rights reserved</p>

        <div className="footer-links">
          <a href="#">Guides</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Terms of Use</a>
          <a href="#">Nike Privacy Policy</a>
          <a href="#">Privacy Settings</a>
        </div>

        <div className="footer-location">
          <span>🌐 India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
