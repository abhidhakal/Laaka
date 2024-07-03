import '../components/styles/main.css';
import Products from "./Products.tsx";
import RetroProducts from "./RetroProducts.tsx";
import Category from "./Category.tsx";

function Main() {
    return (
        <main className="main-area">
            <div className="scrollable-pic">
                <img className="images" src="../public/assets/images/adidasspezial.png" alt="adidas samba"/>
            </div>

            <p className="para">Top Picks</p>

            <Products/>

            <p className="para-2">Walk Back In Time</p>
            <RetroProducts/>

            <p className="para-3">Discover More</p>
            <Category/>

        </main>
    )
}

export default Main;