import Header from '../components/staticComponents/Header.tsx';
import Main from '../components/homeComponents/Main.tsx';
import '../components/styles/general.css';
import '../components/styles/footer.css';
import Head from "../components/staticComponents/Head.tsx";
import { useState, useEffect } from "react";
import BrandPage from "./BrandPage.tsx";
import FootwearPage from "./FootwearPage.tsx";
import ClothingPage from "./ClothingPage.tsx";
import AboutPage from "./AboutPage.tsx";

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
