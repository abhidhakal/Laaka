import '../../styles/customer/brands.css';
import '../../styles/customer/main.css';

function Brands() {
    return (
        <div className="brandsframe">
            <div className="brand">
                <a href="https://www.nike.com/" target="_blank"><img className="brand-logo" src="../public/assets/images/nike-logo.svg" alt=""/></a>
            </div>
            <div className="brand">
                <a href="https://www.adidas.com/us" target="_blank"><img className="brand-logo" src="../public/assets/images/adidas-logo.svg" alt=""/></a>
            </div>
            <div className="brand">
                <a href="https://us.puma.com/us/en" target="_blank"><img className="brand-logo" src="../public/assets/images/puma-logo.svg" alt=""/></a>
            </div>
            <div className="brand">
                <a href="https://www.newbalance.com/" target="_blank"><img className="brand-logo" src="../public/assets/images/nb-logo.svg" alt=""/></a>
            </div>
            <div className="brand">
                <a href="https://www.reebok.com/p;" target="_blank"><img className="brand-logo" src="../public/assets/images/reebok-logo.svg" alt=""/></a>
            </div>
        </div>
)
}

export default Brands;