import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './screens/general/HomePage';
import BrandPage from './screens/customerScreens/BrandPage';
import FootwearPage from './screens/customerScreens/FootwearPage';
import AboutPage from './screens/customerScreens/AboutPage';
import AdminHomePage from './screens/sellerScreens/AdminHomePage';
import CustomerHomePage from './screens/customerScreens/CustomerHomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/brands" element={<BrandPage />} />
                <Route path="/footwear" element={<FootwearPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/admin" element={<AdminHomePage />} />
                <Route path="/customer" element={<CustomerHomePage />} />
            </Routes>
        </Router>
    );
}

export default App;