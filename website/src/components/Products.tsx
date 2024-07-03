import '../components/styles/products.css';

function Products() {
    return (
        <div className="products">

            <button className="scroll-btn left" onClick={() => scrollLeft()}>
                <img src="../public/assets/icons/left-arrow.svg" alt="Scroll Left"/>
            </button>

            <div className="product">
                <img src="../public/assets/images/shoes/af1.png" alt="Airforce 1"/>
                <p>Nike AirForce 1's</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/superstars.png" alt="Adidas Superstars"/>
                <p>Adidas Superstars</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/panda.png" alt="Dunk Panda"/>
                <p>Nike Dunk Pandas</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/dunkfutura.jpg" alt="Dunk Futura"/>
                <p>Nike SB Dunk 'Futura'</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/nb550.webp" alt="NB 550"/>
                <p>New Balance 550</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/asics-gelnyc.jpeg" alt="asics-gel"/>
                <p>Asics Gel-NYC</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/forum-low.avif" alt="Adidas forum-low"/>
                <p>Adidas Forum Low CL</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/handballspezial.avif" alt="Adidas handball"/>
                <p>Adidas Handball Spezial</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/aj1og.jpeg" alt="AJ1 OG"/>
                <p>Air Jordan 1 High OG Chicago</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/pumapalermo.png" alt="Puma Palermo"/>
                <p>Puma Palermo</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/campus_zero.avif" alt="Adidas Campus '00"/>
                <p>Adidas Campus '00</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/airmax97.png" alt="airmax"/>
                <p>Nike Air Max 97</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/aj4.avif" alt="aj4"/>
                <p>Air Jordan 4 OG'</p>
            </div>

            <div className="product">
                <img src="../public/assets/images/shoes/aj1travis.jpeg" alt="AJ1 Travis"/>
                <p>Air Jordan 1 Low x Travis</p>
            </div>

            <button className="scroll-btn right" onClick={() => scrollRight()}>
                <img src="../public/assets/icons/right-arrow.svg" alt="Scroll Right"/>
            </button>

        </div>
    )
}

function scrollLeft() {
    const productsDiv = document.querySelector('.products');
    // @ts-ignore
    productsDiv.scrollBy({left: -750, behavior: 'smooth'}); // Adjust scroll amount as needed
}

function scrollRight() {
    const productsDiv = document.querySelector('.products');
    // @ts-ignore
    productsDiv.scrollBy({ left: 750, behavior: 'smooth' }); // Adjust scroll amount as needed
}


export default Products;

