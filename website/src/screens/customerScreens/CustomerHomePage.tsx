import '../../components/styles/customer/general.css';
import '../../components/styles/customer/footer.css';
import { useState, useEffect } from "react";
// @ts-ignore
import Main from "../../components/customer/homeComponents/Main.tsx";
// @ts-ignore
import BrandPage from "./BrandPage.tsx";
// @ts-ignore
import FootwearPage from "./FootwearPage.tsx";
// @ts-ignore
import AboutPage from "./AboutPage.tsx";
// @ts-ignore
import Header from "../../components/customer/staticComponents/Header.tsx";
import CustomerHeader from "../../components/customer/staticComponents/CustomerHeader.tsx";


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
        case 'about':
            content = <AboutPage />;
            break;
        default:
            content = <Main />;
    }

    return (
        <>
            <body>
            <CustomerHeader onSectionChange={navigatePage} />
            <main className="main">
                {content}
            </main>
            </body>
        </>
    );
}

export default HomePage;
