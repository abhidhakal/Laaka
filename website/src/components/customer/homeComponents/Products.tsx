import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/customer/products.css';

interface Shoe {
    shoeId: number;
    name: string;
    imageUrl: string;
    trending: boolean;
}

interface ProductsProps {
    onShoeClick: (id: number) => void;
}

function Products({ onShoeClick }: ProductsProps) {
    const [trendingShoes, setTrendingShoes] = useState<Shoe[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8070/api/shoes/trending')
            .then(response => {
                setTrendingShoes(response.data);
            })
            .catch(error => {
                console.error('Error fetching trending shoes:', error);
            });
    }, []);

    const scrollLeft = () => {
        const productsDiv = document.querySelector('.products');
        productsDiv?.scrollBy({ left: -750, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const productsDiv = document.querySelector('.products');
        productsDiv?.scrollBy({ left: 750, behavior: 'smooth' });
    };

    const getImageUrl = (imageUrl: string) => {
        if (!imageUrl) return '';
        if (imageUrl.startsWith('http')) return imageUrl;
        return `http://localhost:8070/images/${imageUrl}`;
    };

    return (
        <div className="products">
            <button className="scroll-btn left" onClick={scrollLeft}>
                <img src="/assets/icons/left-arrow.svg" alt="Scroll Left" />
            </button>

            {trendingShoes.map(shoe => (
                <div
                    className="product"
                    key={shoe.shoeId}
                    onClick={() => onShoeClick(shoe.shoeId)}
                >
                    <img src={getImageUrl(shoe.imageUrl)} alt={shoe.name} />
                    <p>{shoe.name}</p>
                </div>
            ))}

            <button className="scroll-btn right" onClick={scrollRight}>
                <img src="/assets/icons/right-arrow.svg" alt="Scroll Right" />
            </button>
        </div>
    );
}

export default Products;