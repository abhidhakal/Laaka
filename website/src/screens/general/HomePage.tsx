import { useNavigate } from 'react-router-dom';
import Header from '../../components/general/Header';
import Main from '../../components/customer/homeComponents/Main';
import '../../components/styles/customer/general.css';
import '../../components/styles/customer/footer.css';

function HomePage() {
    const navigate = useNavigate();

    const navigatePage = (section: string) => {
        switch (section) {
            case 'home':
                navigate('/');
                break;
            case 'brands':
                navigate('/brands');
                break;
            case 'footwear':
                navigate('/footwear');
                break;
            case 'about':
                navigate('/about');
                break;
            case 'admin':
                navigate('/admin');
                break;
            case 'customer':
                navigate('/customer');
                break;
            default:
                navigate('/');
        }
    };

    const handleShoeClick = (id: number) => {
        navigate(`/shoeDetail/${id}`);
    };

    return (
        <>
            <Header onSectionChange={navigatePage} />
            <main className="main">
                <Main onShoeClick={handleShoeClick} />
            </main>
        </>
    );
}

export default HomePage;
