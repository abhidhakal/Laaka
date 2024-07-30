import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/customer/products.css';

interface Shoe {
    shoeId: number; // Adjusted to match the API response
    name: string;
    imageUrl: string;
    category: string;
}

interface RetroProductsProps {
    onShoeClick: (id: number) => void;
}

function RetroProducts({ onShoeClick }: RetroProductsProps) {
    const [retroShoes, setRetroShoes] = useState<Shoe[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8070/api/shoes/category/Retro')
            .then(response => {
                setRetroShoes(response.data);
            })
            .catch(error => {
                console.error('Error fetching retro shoes:', error);
            });
    }, []);

    const getImageUrl = (imageUrl: string) => {
        if (!imageUrl) return '';
        if (imageUrl.startsWith('http')) return imageUrl;
        return `http://localhost:8070/images/${imageUrl}`;
    };

    const handleShoeClick = (id: number) => {
        onShoeClick(id);
    };

    return (
        <div className="products-retro">
            {retroShoes.map(shoe => (
                <div
                    className="product-retro"
                    key={shoe.shoeId} // Adjusted to match the API response
                    onClick={() => handleShoeClick(shoe.shoeId)} // Adjusted to match the API response
                >
                    <img src={getImageUrl(shoe.imageUrl)} alt={shoe.name} />
                    <p className={"productname"}>{shoe.name}</p>
                </div>
            ))}
        </div>
    );
}

export default RetroProducts;
