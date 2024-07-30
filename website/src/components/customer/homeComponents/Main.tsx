import ShoeDetail from "../../general/ShoeDetail";
import { useState, useEffect } from 'react';
import '../../styles/customer/main.css';
import Products from "./Products";
import RetroProducts from "./RetroProducts";
import Category from "./Category";
import Brands from "./Brands";
import Footer from "../../general/Footer";
import BrandPage from "../../../screens/customerScreens/BrandPage";

interface MainProps {
    onShoeClick: (id: number) => void;
}

function Main({ onShoeClick }: MainProps) {
    const [currentSection, setCurrentSection] = useState('');
    const [selectedShoeId, setSelectedShoeId] = useState<number | null>(null);

    const navigateToPage = (section: string) => {
        setCurrentSection(section);
    };

    const handleShoeClick = (id: number) => {
        console.log(`Main: handleShoeClick called with ID ${id}`);
        setSelectedShoeId(id);
        onShoeClick(id);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const [showScrollButton, setShowScrollButton] = useState(false);

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

    useEffect(() => {
        console.log('Selected shoe ID updated:', selectedShoeId);
    }, [selectedShoeId]);

    let content;
    if (selectedShoeId !== null) {
        console.log(`Rendering ShoeDetail with ID: ${selectedShoeId}`);
        content = <ShoeDetail id={selectedShoeId} />;
    } else {
        console.log('No shoe selected, rendering default content');
        switch (currentSection) {
            case 'brands':
                content = <BrandPage />;
                break;

            default:
                content = (
                    <div>
                        <div className="scrollable-pic">
                            <img className="images" src="../public/assets/images/adidasspezial.png" alt="adidas samba" />
                        </div>

                        <p className="para">Top Picks</p>

                        <Products onShoeClick={handleShoeClick} />

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
                        <RetroProducts onShoeClick={handleShoeClick}/>

                        <p className="para-3">Discover More</p>
                        <Category/>

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
    }

    return (
        <main className="main-area">
            {content}
        </main>
    );
}

export default Main;
