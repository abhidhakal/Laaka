import Header from '../../components/general/Header.tsx';
import '../../components/styles/customer/general.css';
import '../../components/styles/customer/footer.css';
import { useState } from "react";
import Main from "../../components/customer/homeComponents/Main.tsx";
import BrandPage from "./BrandPage.tsx";
import AboutPage from "./AboutPage.tsx";
import FootwearMain from "../../components/customer/footwearComponents/FootwearMain.tsx";
import ShoeDetail from "../../components/general/ShoeDetail";

function FootwearPage() {
    const [currentSection, setCurrentSection] = useState('');
    const [selectedShoeId, setSelectedShoeId] = useState<number | null>(null);

    const navigatePage = (section: string) => {
        setCurrentSection(section);
    };

    const handleShoeClick = (id: number) => {
        console.log(`FootwearPage: handleShoeClick called with ID ${id}`);
        setSelectedShoeId(id);
        setCurrentSection('shoeDetail');
    };


    let content;
    if (currentSection === 'shoeDetail' && selectedShoeId !== null) {
        content = <ShoeDetail id={selectedShoeId} />;
    } else {
        switch (currentSection) {
            case 'home':
                content = <Main/>;
                break;
            case 'brands':
                content = <BrandPage />;
                break;
            case 'footwear':
                content = <FootwearMain onShoeClick={handleShoeClick} />;
                break;
            case 'about':
                content = <AboutPage />;
                break;
            default:
                content = <FootwearMain onShoeClick={handleShoeClick} />;
        }
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

export default FootwearPage;
