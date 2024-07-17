import '../../components/styles/admin/admingeneral.css';
import '../../components/styles/admin/adminfooter.css';
import {useState} from "react";
import AboutPage from "../customerScreens/AboutPage.tsx";
import AdminMain from "../../components/admin/AdminMain.tsx";
import AdminFootwearPage from "./AdminFootwearPage.tsx";
import AdminClothingPage from "./AdminClothingPage.tsx";
import AdminBrandsMain from "../../components/admin/adminBrand/AdminBrandsMain.tsx";
import AdminHeader from "../../components/admin/adminStatic/AdminHeader.tsx";

function AdminBrandPage() {
    const [currentSection, setCurrentSection] = useState('');

    const navigatePage = (section: string) => {
        setCurrentSection(section);
    };

    let content;
    switch (currentSection) {
        case 'home':
            content = <AdminMain/>;
            break;
        case 'brands':
            content = <AdminBrandPage/>;
            break;
        case 'footwear':
            content = <AdminFootwearPage />;
            break;
        case 'clothing':
            content = <AdminClothingPage />;
            break;
        case 'about':
            content = <AboutPage />;
            break;
        default:
            content = <AdminBrandsMain/>;
    }

    return (
        <>
            <AdminHeader onSectionChange={navigatePage}/>
            <main className="main">
                {content}
            </main>
        </>
    )
}

export default AdminBrandPage;
