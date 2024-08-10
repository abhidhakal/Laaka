import '../../styles/customer/brandpage.css';
import Footer from "../../general/Footer.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

interface Brand {
    brandId: number;
    brandName: string;
}

function BrandsMain() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    };

    const [brands, setBrands] = useState<Brand[]>([]);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        fetchBrands();

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

    const fetchBrands = async () => {
        try {
            const response = await axios.get('http://localhost:8070/api/brands');
            setBrands(response.data);
        } catch (error) {
            console.error("Error fetching brands:", error);
        }
    };

    return (
        <div className="brand-frame">
            <div className="customer-brands-list">
                <div className="brands-list-title">
                    <h2>All Our Current Brands</h2>
                </div>
                {brands.map(brand => (
                    <div key={brand.brandId} className="brand-item">
                        {brand.brandName}
                    </div>
                ))}
            </div>

            <h1>Links</h1>

            <div className="brandsframe">
                <div className="brand">
                    <a href="https://www.nike.com/" target="_blank">
                        <img className="brand-logo" src="../public/assets/images/nike-logo.svg" alt=""/>
                    </a>
                </div>
                <div className="brand">
                    <a href="https://www.adidas.com/us" target="_blank">
                        <img className="brand-logo" src="../public/assets/images/adidas-logo.svg" alt=""/>
                    </a>
                </div>
                <div className="brand">
                    <a href="https://us.puma.com/us/en" target="_blank">
                        <img className="brand-logo" src="../public/assets/images/puma-logo.svg" alt=""/>
                    </a>
                </div>
                <div className="brand">
                    <a href="https://www.newbalance.com/" target="_blank">
                        <img className="brand-logo" src="../public/assets/images/nb-logo.svg" alt=""/>
                    </a>
                </div>
                <div className="brand">
                    <a href="https://www.reebok.com/p;" target="_blank">
                        <img className="brand-logo" src="../public/assets/images/reebok-logo.svg" alt=""/>
                    </a>
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