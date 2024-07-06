import '../styles/about.css';
import Footer from "../staticComponents/Footer.tsx";
import {useEffect, useState} from "react";

function BrandsMain() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    };

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="about-frame">
            <h1>Brands</h1>
            <div className="brandsframe">
                <div className="brand">
                    <img className="brand-logo" src="../public/assets/images/nike-logo.svg" alt=""/>
                    {/*<p className="brand-name">Nike</p>*/}
                </div>
                <div className="brand">
                    <img className="brand-logo" src="../public/assets/images/adidas-logo.svg" alt=""/>
                </div>
                <div className="brand">
                    <img className="brand-logo" src="../public/assets/images/puma-logo.svg" alt=""/>
                </div>
                <div className="brand">
                    <img className="brand-logo" src="../public/assets/images/nb-logo.svg" alt=""/>
                </div>
                <div className="brand">
                    <img className="brand-logo" src="../public/assets/images/reebok-logo.svg" alt=""/>
                </div>
            </div>

            <Footer/>

            {showScrollButton && (
                <button className="scroll-to-top-btn" onClick={scrollToTop}>
                    <img src="../public/assets/images/arrow-up.svg" alt=""/>
                </button>
            )}

        </div>
    )
}

export default BrandsMain;