import '../components/styles/header.css';

// @ts-ignore
function Header() {
    return (
        <header className="header">
            <div className="left-section">
                <img src="../public/assets/logos/logo_slogan_large.svg" alt=""/>
            </div>
            <div className="mid-section">
                <p className="cats">TRENDING</p>
                <p className="cats">BRANDS</p>
                <p className="cats">FOOTWEAR</p>
                <p className="cats">CLOTHING</p>
                <p className="cats">ABOUT</p>
            </div>

            <div className="right-section">
                {/*<input className="search-bar" type="text" placeholder="Search"/>*/}

                <button className="signin-btn">Get Started</button>
            </div>
        </header>
    )
}

export default Header;