import { useState, useEffect } from 'react';
import '../styles/admin/adminmain.css';
import Products from "../customer/homeComponents/Products.tsx";
import RetroProducts from "../customer/homeComponents/RetroProducts.tsx";
import Brands from "../customer/homeComponents/Brands.tsx";
import Footer from "../customer/staticComponents/Footer.tsx";
import AdminBrandPage from "../../screens/sellerScreens/AdminBrandPage.tsx";

function AdminMain() {
    const [currentSection, setCurrentSection] = useState('');
    const [imageSrc, setImageSrc] = useState('../public/assets/images/adidasspezial.png');
    const [showScrollButton, setShowScrollButton] = useState(false);

    const navigateToPage = (section: string) => {
        setCurrentSection(section);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
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

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && event.target.result) {
                    setImageSrc(event.target.result as string);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    let content;
    switch (currentSection) {
        case 'brands':
            content = <AdminBrandPage />;
            break;

        default:
            content = (
                <div>
                    <div className="scrollable-pic">
                        <img className="images" src={imageSrc} alt="adidas samba"/>
                        <label className="edit-button">
                            <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }}/>
                            <img src="../public/assets/icons/edit_icon.svg" alt="adidas samba"/>
                        </label>
                    </div>

                    <p className="para">Top Picks</p>

                    <Products/>

                    <div className="shoestab">
                        <div className="shoe">
                            <img className="shoestab-img" src="../public/assets/images/dunk-img.webp" alt=""/>
                            <div className="shoe-info">
                                <p>Nike Dunks</p>
                            </div>
                        </div>

                        <div className="shoe">
                            <img className="shoestab-img" src="../public/assets/images/adidas-tee.avif" alt=""/>
                            <div className="shoe-info">
                                <p>Adidas Tees</p>
                            </div>
                        </div>

                        <div className="shoe">
                            <img className="shoestab-img" src="../public/assets/images/airmax.png" alt=""/>
                            <div className="shoe-info">
                                <p>Nike Air-Max</p>
                            </div>
                        </div>

                        <div className="shoe">
                            <img className="shoestab-img" src="../public/assets/images/nb-shoe.jpg" alt=""/>
                            <div className="shoe-info">
                                <p>New Balance</p>
                            </div>
                        </div>

                        <div className="shoe">
                            <img className="shoestab-img" src="../public/assets/images/hoodie.webp" alt=""/>
                            <div className="shoe-info">
                                <p>Jordan Hoodies</p>
                            </div>
                        </div>
                    </div>

                    <p className="para-2">Walk Back In Time</p>
                    <RetroProducts/>

                    <p className="para-4" onClick={() => navigateToPage('brands')}>Brands</p>
                    <Brands/>

                    <Footer/>

                    {showScrollButton && (
                        <button className="scroll-to-top-btn" onClick={scrollToTop}>
                            <img src="../public/assets/images/arrow-up.svg" alt=""/>
                        </button>
                    )}

                </div>
            );
    }

    return (
        <main className="main-area">
            {content}
        </main>
    );
}

export default AdminMain;
