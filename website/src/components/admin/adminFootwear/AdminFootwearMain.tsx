import '../../styles/admin/adminbrandpage.css';

import Footer from "../../general/Footer.tsx";
import {useEffect, useState} from "react";
import AddShoeForm from "../adminStatic/AddShoeForm.tsx";
function AdminFootwearMain() {

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
        <div className="brand-frame">
            <h1 className="page-title">Add Footwear</h1>

            <AddShoeForm/>

            <Footer/>

            {showScrollButton && (
                <button className="scroll-to-top-btn" onClick={scrollToTop}>
                    <img src="../public/assets/images/arrow-up.svg" alt=""/>
                </button>
            )}

        </div>
    )
}

export default AdminFootwearMain;