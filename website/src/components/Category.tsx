import '../components/styles/categories.css';

function Category() {
    return (
        <div className="categories">

            <div className="grid">
                <div className="category-brands">
                    <img src="../public/assets/images/brands.webp" alt="brands"/>
                    <div className="brands">Top Brands</div>
                </div>

                <div className="category-brands">
                    <img src="../public/assets/images/nikedunks.png" alt="brands"/>
                    <div className="trendingshoes">Trending Shoes</div>
                </div>

            </div>

            <div className="grid-second">
                <div className="category-brands">
                    <img src="../public/assets/images/trendingshoes.jpeg" alt="shoes"/>
                    <div className="footwear">Footwear</div>
                </div>

                <div className="category-brands">
                    <img src="../public/assets/images/tshirt.avif" alt="tshirt"/>
                    <div className="clothing">Clothing</div>
                </div>
            </div>
        </div>
    )
}

export default Category;