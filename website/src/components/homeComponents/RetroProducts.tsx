import '../styles/products.css';

function RetroProducts() {
    return (
        <div className="products-retro">
            <div className="product-retro">
                <img src="../public/assets/images/shoes/adidassamba.png" alt="samba"/>
                <p className={"productname"}>Adidas Samba</p>
            </div>

            <div className="product-retro">
                <img src="../public/assets/images/shoes/nikeblazer77.png" alt="blazer77"/>
                <p className={"productname"}>Nike Blazer '77</p>
            </div>

            <div className="product-retro">
                <img src="../public/assets/images/shoes/clubc85.png" alt="reebokclubc"/>
                <p className={"productname"}>Reebok Club C</p>
            </div>

            <div className="product-retro">
                <img src="../public/assets/images/shoes/stan-smith.png" alt="adidas-stansmith"/>
                <p className={"productname"}>Adidas Stan Smith</p>
            </div>

            <div className="product-retro">
                <img src="../public/assets/images/shoes/conversehigh.png" alt="conversehigh"/>
                <p className={"productname"}>Converse Chuck Taylor</p>
            </div>

        </div>
    )
}
export default RetroProducts;