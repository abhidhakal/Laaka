import '../../styles/customer/about.css';
import Footer from "../staticComponents/Footer.tsx";
import {useEffect, useState} from "react";

function ClothingMain() {

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
            <h1>Clothing</h1>
            <Footer/>

            {showScrollButton && (
                <button className="scroll-to-top-btn" onClick={scrollToTop}>
                    <img src="../public/assets/images/arrow-up.svg" alt=""/>
                </button>
            )}

        </div>
    )
}

export default ClothingMain;