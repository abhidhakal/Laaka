import Header from '../components/staticComponents/Header.tsx';
import '../components/styles/general.css';
import '../components/styles/footer.css';
import {useState} from "react";
import Main from "../components/homeComponents/Main.tsx";
import BrandPage from "./BrandPage.tsx";
import FootwearPage from "./FootwearPage.tsx";
import ClothingPage from "./ClothingPage.tsx";
import AboutMain from "../components/aboutComponents/AboutMain.tsx";

function AboutPage() {
    const [currentSection, setCurrentSection] = useState('');

    const navigatePage = (section: string) => {
        setCurrentSection(section);
    };

    let content;
    switch (currentSection) {
        case 'trending':
            content = <Main/>;
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
            content = <AboutMain/>;
    }

    return (
        <>
            <Header onSectionChange={navigatePage}/>
            <main className="main">
                {content}
            </main>
        </>
    )
}

export default AboutPage;
