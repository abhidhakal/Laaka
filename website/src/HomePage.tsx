import './components/styles/header.css';
import './components/styles/general.css';
import './components/styles/main.css';
import './components/styles/products.css';

function HomePage() {
    // @ts-ignore
    return(
        <>
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <title>Laaka Nepal - Buy Premium Shoes Online</title>
                <link rel="shortcut icon" href="../public/assets/icons/favicon.ico" type="image/x-icon"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap"
                    rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap"
                    rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@200..800&display=swap"
                      rel="stylesheet"/>
                <link rel="stylesheet" href="website/src/components/styles/header.css"/>
                <link rel="stylesheet" href="website/src/components/styles/general.css"/>
                <link rel="stylesheet" href="website/src/components/styles/main.css"/>
                <link rel="stylesheet" href="website/src/components/styles/products.css"/>
            </head>

            <body>

                <header className="header">
                    <div className="left-section">
                        <img src="../public/assets/logos/logo_slogan_large.svg" alt=""/>
                    </div>
                    <div className="mid-section">
                        <p className="cats">TRENDING</p>
                        <p className="cats">BRANDS</p>
                        <p className="cats">FOOTWEAR</p>
                        <p className="cats">CLOTHING</p>
                        <p className="cats">ACCESSORIES</p>
                    </div>

                    <div className="right-section">
                        <input className="search-bar" type="text" placeholder="Search"/>

                        <button className="signin-btn">Get Started</button>
                    </div>
                </header>

                <main className="main-area">
                    <div className="scrollable-pic">
                        <img className="images" src="../public/assets/images/adidasspezial.png" alt="adidas samba"/>
                    </div>

                    <p className="para">Top Picks</p>

                    <div className="products">
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

                    </div>

                    <p className="para-2">Walk Back In Time</p>
                    <div className="products-retro">
                        <div className="product-retro">
                            <img src="../public/assets/images/shoes/adidassamba.png" alt="samba"/>
                            <p>Adidas Samba</p>
                        </div>

                        <div className="product-retro">
                            <img src="../public/assets/images/shoes/nikeblazer77.png" alt="blazer77"/>
                            <p>Nike Blazer '77</p>
                        </div>

                        <div className="product-retro">
                            <img src="../public/assets/images/shoes/clubc85.png" alt="reebokclubc"/>
                            <p>Reebok Club C</p>
                        </div>

                        <div className="product-retro">
                            <img src="../public/assets/images/shoes/stan-smith.png" alt="adidas-stansmith"/>
                            <p>Adidas Stan Smith</p>
                        </div>

                        <div className="product-retro">
                            <img src="../public/assets/images/shoes/conversehigh.png" alt="conversehigh"/>
                            <p>Converse Chuck Taylor</p>
                        </div>

                    </div>

                    <p className="para-3">Discover More</p>

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
                            <div className="category">
                                <img src="../public/assets/images/trendingshoes.jpeg" alt="shoes"/>
                            </div>

                            <div className="category">
                                <img src="../public/assets/images/tshirt.avif" alt="tshirt"/>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
            </html>
        </>
    )
}
export default HomePage;