import Header from '../components/customer/staticComponents/Header.tsx';
import Main from '../components/customer/homeComponents/Main.tsx';
import '../components/styles/customer/general.css';
import '../components/styles/customer/footer.css';
import Head from "../components/customer/staticComponents/Head.tsx";
import { useState, useEffect } from "react";
import BrandPage from "./customerScreens/BrandPage.tsx";
import FootwearPage from "./customerScreens/FootwearPage.tsx";
import ClothingPage from "./customerScreens/ClothingPage.tsx";
import AboutPage from "./customerScreens/AboutPage.tsx";

function HomePage() {
    const [currentSection, setCurrentSection] = useState('');

    const navigatePage = (section: string) => {
        setCurrentSection(section);
    };

    useEffect(() => {
        // Scroll to the top of the page whenever currentSection changes
        window.scrollTo(0, 0);
    }, [currentSection]);

    let content;
    switch (currentSection) {
        case 'home':
            content = <Main />;
            break;
        case 'brands':
            content = <BrandPage />;
            break;
        case 'footwear':
            content = <FootwearPage />;
            break;
        case 'clothing':
            content = <ClothingPage />;
            break;
        case 'about':
            content = <AboutPage />;
            break;
        default:
            content = <Main />;
    }

    return (
        <>
            <html lang="en">
            <Head />
            <body>
            <Header onSectionChange={navigatePage} />
            <main className="main">
                {content}
            </main>
            </body>
            </html>
        </>
    );
}

export default HomePage;
