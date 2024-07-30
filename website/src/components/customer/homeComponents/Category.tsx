import '../../styles/customer/categories.css';

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
                    <img src="../public/assets/images/af1-categ.png" alt="shoes"/>
                    <div className="footwear">Footwear</div>
                </div>
            </div>
        </div>
    )
}

export default Category;