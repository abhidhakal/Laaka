import { useEffect, useState } from "react";
import axios from "axios";
import '../../styles/admin/adminbrandpage.css';
import Footer from "../../general/Footer.tsx";
import AddBrandForm from "../adminStatic/AddBrandForm.tsx";

interface Brand {
    brandId: number;
    brandName: string;
}

function AdminBrandsMain() {
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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    };

    return (
        <div className="brand-frame">
            <h1>Brands</h1>

            <AddBrandForm/>

            <div className="brands-list">
                <div className="brands-list-title">
                    <h2>Current Brands</h2>
                </div>
                {brands.map(brand => (
                    <div key={brand.brandId} className="brand-item">
                        {brand.brandName}
                    </div>
                ))}
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

export default AdminBrandsMain;
