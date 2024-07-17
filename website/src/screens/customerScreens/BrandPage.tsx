import Header from '../../components/customer/staticComponents/Header.tsx';
import '../../components/styles/customer/general.css';
import '../../components/styles/customer/footer.css';
import Head from "../../components/customer/staticComponents/Head.tsx";
import {useState} from "react";
import Main from "../../components/customer/homeComponents/Main.tsx";
import ClothingPage from "./ClothingPage.tsx";
import AboutPage from "./AboutPage.tsx";
import FootwearPage from "./FootwearPage.tsx";
import BrandsMain from "../../components/customer/brandComponents/BrandsMain.tsx";

function BrandPage() {
    const [currentSection, setCurrentSection] = useState('');

    const navigatePage = (section: string) => {
        setCurrentSection(section);
    };

    let content;
    switch (currentSection) {
        case 'home':
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
            content = <BrandsMain/>;
    }

    return (
        <>
            <html lang="en">
            <Head/>
            <body>
            <Header onSectionChange={navigatePage}/>
            <main className="main">
                {content}
            </main>
            </body>
            </html>
        </>
    )
}

export default BrandPage;
