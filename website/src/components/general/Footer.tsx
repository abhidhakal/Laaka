import React from 'react';
import "../styles/customer/footer.css"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">Laaka</h1>
                    <p className="texts">
                        Laaka is the best place to find the latest and greatest in shoe fashion.
                        We offer a wide variety of brands and styles to suit every taste.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h2 className="logo-text">Contact Us</h2>
                    <p className="texts">Email: laakanepal@gmail.com</p>
                    <p className="texts">Phone: +977 9865206747</p>
                </div>
                <div className="footer-section socials">
                    <h2>Our Socials</h2>
                    <ul className="social-links">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="https://www.instagram.com/laaka.nepal/" target="_blank" className="fa fa-instagram"></a>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom">
                &copy; 2024 Laaka | All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
