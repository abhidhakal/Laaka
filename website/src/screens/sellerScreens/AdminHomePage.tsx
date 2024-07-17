import '../../components/styles/customer/general.css';
import '../../components/styles/customer/footer.css';
import { useState, useEffect } from "react";
import AdminMain from "../../components/admin/AdminMain.tsx";
import AdminBrandPage from "./AdminBrandPage.tsx";
import AdminFootwearPage from "./AdminFootwearPage.tsx";
import AdminClothingPage from "./AdminClothingPage.tsx";
import AdminHeader from "../../components/admin/adminStatic/AdminHeader.tsx";
import AdminAboutPage from "./AdminAboutPage.tsx";

function AdminHomePage() {
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
            content = <AdminMain />;
            break;
        case 'brands':
            content = <AdminBrandPage />;
            break;
        case 'footwear':
            content = <AdminFootwearPage />;
            break;
        case 'clothing':
            content = <AdminClothingPage />;
            break;
        case 'about':
            content = <AdminAboutPage />;
            break;
        default:
            content = <AdminMain />;
    }

    return (
        <>
            <AdminHeader onSectionChange={navigatePage} />
            <main className="main">
                {content}
            </main>
        </>
    );
}

export default AdminHomePage;
