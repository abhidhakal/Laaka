import '../styles/about.css';
import Footer from "../staticComponents/Footer.tsx";
import {useEffect, useState} from "react";

function AboutMain() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="about-frame">
            <h1 className="title">About Laaka</h1>
            <section className="about-section">
                <h2>Our Story</h2>
                <p>
                    Laaka was founded with a passion for footwear and a mission to revolutionize the way people shop for
                    shoes. Our journey began in 2024, with a vision to create a unique shopping experience that combines
                    quality, style, and comfort. Over the years, we have grown into a trusted brand, loved by shoe
                    enthusiasts around the world.
                </p>
                <h2 className="head">Our Mission</h2>
                <p>
                    At Laaka, our mission is to provide our customers with the finest selection of footwear that not
                    only looks great but also feels great. We believe that shoes are more than just a necessity – they
                    are a statement of individuality and style. We strive to offer a diverse range of shoes that cater
                    to every taste and occasion.
                </p>
                <h2 className="head">Our Values</h2>
                <p>
                    <strong>Quality:</strong> We are committed to offering products that meet the highest standards of
                    quality and craftsmanship.
                </p>
                <p>
                    <strong>Innovation:</strong> We continuously seek out the latest trends and technologies to bring
                    you the best in footwear.
                </p>
                <p>
                    <strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do. We
                    strive to provide exceptional service and a seamless shopping experience.
                </p>
                <p>
                    <strong>Sustainability:</strong> We are dedicated to making environmentally conscious choices in our
                    products and operations.
                </p>
                <h2 className="head">Why Choose Laaka?</h2>
                <p>
                    At Laaka, we go beyond selling shoes. We offer a curated collection that caters to every style and
                    need. Whether you are looking for the perfect pair of running shoes, stylish boots, or comfortable
                    everyday sneakers, we have you covered. Our team of experts handpicks every shoe to ensure it meets
                    our high standards of quality and design.
                </p>
                <h2 className="head">Join Our Community</h2>
                <p>
                    We invite you to join the Laaka community. Follow us on social media, and stay connected to get the
                    latest updates on new arrivals, exclusive offers, and more. At Laaka, we are more than just a shoe
                    store – we are a family of shoe lovers who are passionate about what we do.
                </p>
                <h2 className="head">Contact Us</h2>
                <p>
                    Have questions or need assistance? Our customer support team is here to help. Reach out to us
                    at <strong>laakanepal@gmail.com</strong>, and we will be happy to assist you.
                </p>
            </section>

            <Footer/>

            {showScrollButton && (
                <button className="scroll-to-top-btn" onClick={scrollToTop}>
                    <img src="../public/assets/images/arrow-up.svg" alt=""/>
                </button>
            )}

        </div>

    )
}

export default AboutMain;
