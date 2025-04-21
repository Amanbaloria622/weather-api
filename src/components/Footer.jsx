// Footer.js

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We provide high-quality services to our customers. Contact us for
            more information.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>

            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="#facebook">
                <i id="icon" class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#twitter">
                <i id="icon" class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#instagram">
                <i id="icon" class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 YourCompany | All Rights Reserved
      </div>
    </footer>
  );
};
