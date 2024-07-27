import { useState, useEffect } from 'react';
import Header from '../../components/customer/staticComponents/Header';
import Main from '../../components/customer/homeComponents/Main';
import '../../components/styles/customer/general.css';
import '../../components/styles/customer/footer.css';
import BrandPage from "../customerScreens/BrandPage";
import FootwearPage from "../customerScreens/FootwearPage";
import AboutPage from "../customerScreens/AboutPage";
import AdminHomePage from "../sellerScreens/AdminHomePage.tsx";
import CustomerHomePage from "../customerScreens/CustomerHomePage.tsx";

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
        case 'admin':
            content = <AdminHomePage />;
            break;
        case 'customer':
            content = <CustomerHomePage />;
            break;
        default:
            content = <Main />;
    }

    return (
        <>
            <Header onSectionChange={navigatePage} />
            <main className="main">
                {content}
            </main>
        </>
    );
}

export default HomePage;
