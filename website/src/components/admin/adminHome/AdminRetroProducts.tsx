import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/admin/adminproducts.css';

interface Shoe {
    id: number;
    name: string;
    imageUrl: string;
    category: string;
}

function RetroProducts() {
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
        if (!imageUrl) return ''; // Return empty string or a placeholder image URL if no image
        if (imageUrl.startsWith('http')) return imageUrl; // If it's already a full URL, use it as is
        return `http://localhost:8070/images/${imageUrl}`;
    };

    return (
        <div className="admin-products-retro">
            {retroShoes.map(shoe => (
                <div className="admin-product-retro" key={shoe.id}>
                        <img src={getImageUrl(shoe.imageUrl)} alt={shoe.name} />
                    
                    <p className={"admin-productname"}>{shoe.name}</p>
                </div>
            ))}
        </div>
    );
}

export default RetroProducts;
