import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './components/styles/general.css';
import './components/styles/footer.css';
import Head from "./components/Head";

function HomePage() {
    return (
        <>
            <html lang="en">
            <Head/>
            <body>
            <Header/>
            <Main/>
            <Footer/>
            </body>
            </html>
        </>
    )
}

export default HomePage;
