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
    onShoeClick: (id: number) => void;
}

function FootwearMain({ onShoeClick }: FootwearMainProps) {
    const [shoes, setShoes] = useState<Shoe[]>([]);

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
        if (!imageUrl) return '';
        if (imageUrl.startsWith('http')) return imageUrl;
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
        </div>
    );
}

export default FootwearMain;
