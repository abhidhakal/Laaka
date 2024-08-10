import { useState, useEffect } from 'react';
import '../../styles/customer/main.css';
import Products from "./Products";
import RetroProducts from "./RetroProducts";
import Category from "./Category";
import Brands from "./Brands";
import Footer from "../../general/Footer";
import BrandPage from "../../../screens/customerScreens/BrandPage";
import ShoeDetail from "../../general/ShoeDetail";

interface MainProps {
    onShoeClick: (id: number) => void;
}

function Main({ onShoeClick }: MainProps) {
    const [currentSection, setCurrentSection] = useState('');
    const [selectedShoeId, setSelectedShoeId] = useState<number | null>(null);

    const [images] = useState<string[]>([
        "../public/assets/images/adidasspezial.png",
        "../public/assets/images/slider.avif",
        "../public/assets/images/adidasshoes.avif"
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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

    // Functions to handle image changes
    const displayNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const displayPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex <= 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(displayNextImage, 5000);
        return () => clearInterval(intervalId);
    }, []);

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
                            <button className="left-right-btn" onClick={displayPreviousImage}>
                                <img src="/assets/icons/left-arrow.svg" alt="Scroll Left"/>
                            </button>
                            <img className="main-image" src={images[currentImageIndex]} alt="Slideshow"/>
                            <button className="left-right-btn" onClick={displayNextImage}>
                                <img src="/assets/icons/right-arrow.svg" alt="Scroll Right"/>
                            </button>
                        </div>

                        <p className="para">Top Picks</p>

                        <Products onShoeClick={handleShoeClick} />

                        <div className="shoestab">
                            {/* ...existing content */}
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
                                <img src="../public/assets/images/arrow-up.svg" alt="Scroll to top"/>
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
