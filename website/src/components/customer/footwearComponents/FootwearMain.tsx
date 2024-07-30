import '../../styles/customer/footwear.css';
import Footer from "../../general/Footer.tsx";
import { useEffect, useState } from "react";
import axios from 'axios';

interface Shoe {
    shoeId: number;
    name: string;
    imageUrl: string;
    trending: boolean;
}

interface FootwearMainProps {
    onShoeClick: (id: number) => void; // Prop to handle shoe click
}

function FootwearMain({ onShoeClick }: FootwearMainProps) {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [shoes, setShoes] = useState<Shoe[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8070/api/shoes')
            .then(response => {
                setShoes(response.data);
            })
            .catch(error => {
                console.error('Error fetching shoes:', error);
            });
    }, []);

    const getImageUrl = (imageUrl: string) => {
        if (!imageUrl) return ''; // Return empty string or a placeholder image URL if no image
        if (imageUrl.startsWith('http')) return imageUrl; // If it's already a full URL, use it as is
        return `http://localhost:8070/images/${imageUrl}`;
    };

    return (
        <div className="footwear-frame">
            <h1 className="footwear-title">Footwear</h1>

            <div className="shoe-grid">
                {shoes.map(shoe => (
                    <div
                        className="footwears"
                        key={shoe.shoeId}
                        onClick={() => onShoeClick(shoe.shoeId)}
                    >
                        <img src={getImageUrl(shoe.imageUrl)} alt={shoe.name} />
                        <p>{shoe.name}</p>
                    </div>
                ))}
            </div>

            <Footer />

            {showScrollButton && (
                <button className="scroll-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <img src="../public/assets/images/arrow-up.svg" alt="Scroll to top" />
                </button>
            )}
        </div>
    );
}

export default FootwearMain;
