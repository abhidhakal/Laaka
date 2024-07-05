import '../styles/brands.css';

function Category() {
    return (
        <div className="brandsframe">
            <div className="brand">
                <img className="brand-logo" src="../public/assets/images/nike-logo.svg" alt=""/>
                {/*<p className="brand-name">Nike</p>*/}
            </div>
            <div className="brand">
                <img className="brand-logo" src="../public/assets/images/adidas-logo.svg" alt=""/>
            </div>
            <div className="brand">
                <img className="brand-logo" src="../public/assets/images/puma-logo.svg" alt=""/>
            </div>
            <div className="brand">
                <img className="brand-logo" src="../public/assets/images/nb-logo.svg" alt=""/>
            </div>
            <div className="brand">
                <img className="brand-logo" src="../public/assets/images/reebok-logo.svg" alt=""/>
            </div>
        </div>
    )
}

export default Category;