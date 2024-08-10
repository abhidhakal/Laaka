import { useState, useEffect } from 'react';
import '../../styles/customer/main.css';
import Products from "./Products";
import RetroProducts from "./RetroProducts";
import Category from "./Category";
import Brands from "./Brands";
import Footer from "../../general/Footer";
import BrandPage from "../../../screens/customerScreens/BrandPage";
import ShoeDetail from "../../general/ShoeDetail";

function Main() {
    const [currentSection, setCurrentSection] = useState('main');
    const [selectedShoeId, setSelectedShoeId] = useState<number | null>(null);

    const [images] = useState<string[]>([
        "../public/assets/images/adidasspezial.png",
        "../public/assets/images/slider.avif",
        "../public/assets/images/nikedunks.png",
        "../public/assets/images/adidasshoes.avif"
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [fadeTransition, setFadeTransition] = useState<boolean>(false);

    const navigateToPage = (section: string) => {
        setCurrentSection(section);
    };

    const handleShoeClick = (id: number) => {
        console.log(`Main: handleShoeClick called with ID ${id}`);
        setSelectedShoeId(id);
        setCurrentSection('shoeDetail');
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

    // Functions to handle image changes with smooth transitions
    const displayNextImage = () => {
        setFadeTransition(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            setFadeTransition(false);
        }, 500);
    };

    const displayPreviousImage = () => {
        setFadeTransition(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex <= 0 ? images.length - 1 : prevIndex - 1));
            setFadeTransition(false);
        }, 500);
    };

    useEffect(() => {
        const intervalId = setInterval(displayNextImage, 4000);
        return () => clearInterval(intervalId);
    }, []);

    let content;
    if (currentSection === 'shoeDetail' && selectedShoeId !== null) {
        content = <ShoeDetail id={selectedShoeId} />;
    } else {
        switch (currentSection) {
            case 'brands':
                content = <BrandPage />;
                break;
            case 'main':
            default:
                content = (
                    <div>
                        <div className="scrollable-pic">
                            <button className="left-right-btn" onClick={displayPreviousImage}>
                                <img src="/assets/icons/left-arrow.svg" alt="Scroll Left"/>
                            </button>
                            <img
                                className={`main-image ${fadeTransition ? 'fade' : ''}`}
                                src={images[currentImageIndex]}
                                alt="Slideshow"
                            />
                            <button className="left-right-btn" onClick={displayNextImage}>
                                <img src="/assets/icons/right-arrow.svg" alt="Scroll Right"/>
                            </button>
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
