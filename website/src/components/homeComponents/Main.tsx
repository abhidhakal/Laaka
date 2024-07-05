import '../styles/main.css';
import Products from "./Products.tsx";
import RetroProducts from "./RetroProducts.tsx";
import Category from "./Category.tsx";
import Brands from "./Brands.tsx";
import Footer from "../staticComponents/Footer.tsx";

function Main() {
    return (
        <main className="main-area">
            <div className="scrollable-pic">
                <img className="images" src="../public/assets/images/adidasspezial.png" alt="adidas samba"/>
            </div>

            <p className="para">Top Picks</p>

            <Products/>

            <div className="shoestab">

                <div className="shoe">
                    <img className="shoestab-img" src="../public/assets/images/dunk-img.webp" alt=""/>
                    <div className="shoe-info">
                        <p>Nike Dunks</p>
                    </div>
                </div>

                <div className="shoe">
                    <img className="shoestab-img" src="../public/assets/images/adidas-tee.avif" alt=""/>
                    <div className="shoe-info">
                        <p>Adidas Tees</p>
                    </div>
                </div>

                <div className="shoe">
                    <img className="shoestab-img" src="../public/assets/images/airmax.png" alt=""/>
                    <div className="shoe-info">
                        <p>Nike Air-Max</p>
                    </div>
                </div>

                <div className="shoe">
                    <img className="shoestab-img" src="../public/assets/images/nb-shoe.jpg" alt=""/>
                    <div className="shoe-info">
                        <p>New Balance</p>
                    </div>
                </div>

                <div className="shoe">
                    <img className="shoestab-img" src="../public/assets/images/hoodie.webp" alt=""/>
                    <div className="shoe-info">
                        <p>Jordan Hoodies</p>
                    </div>
                </div>
            </div>

            <p className="para-2">Walk Back In Time</p>
            <RetroProducts/>

            <p className="para-3">Discover More</p>
            <Category/>

            <p className="para-4">Brands</p>
            <Brands/>

            <Footer/>

        </main>
    )
}

export default Main;