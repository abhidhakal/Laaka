import '../../components/styles/admin/admingeneral.css';
import '../../components/styles/admin/adminfooter.css';
import {useState} from "react";
import ClothingMain from "../../components/customer/clothingComponents/ClothingMain.tsx";
import AdminMain from "../../components/admin/AdminMain.tsx";
import AdminBrandPage from "./AdminBrandPage.tsx";
import AdminFootwearPage from "./AdminFootwearPage.tsx";
import AdminHeader from "../../components/admin/adminStatic/AdminHeader.tsx";
import AdminAboutPage from "./AdminAboutPage.tsx";

function AdminClothingPage() {
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
            content = <AdminBrandPage />;
            break;
        case 'footwear':
            content = <AdminFootwearPage />;
            break;
        case 'clothing':
            content = <AdminClothingPage/>;
            break;
        case 'about':
            content = <AdminAboutPage />;
            break;
        default:
            content = <ClothingMain/>;
    }

    return (
        <>
            <body>
            <AdminHeader onSectionChange={navigatePage}/>
            <main className="main">
                {content}
            </main>
            </body>
        </>
    )
}

export default AdminClothingPage;
