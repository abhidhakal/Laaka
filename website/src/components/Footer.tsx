import React from 'react';
import './styles/footer.css';

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
                    <p className="texts">Email: support@shoestore.com</p>
                    <p className="texts">Phone: +123 456 789</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Laaka | All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
