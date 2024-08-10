import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/customer/products.css';

interface Shoe {
    shoeId: number; // Adjusted to match the API response
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
                console.log('Trending shoes response:', response.data);
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

    const handleShoeClick = (id: number) => {
        console.log(`Products: handleShoeClick called with ID ${id}`);
        if (id !== undefined && id !== null) {
            onShoeClick(id);
        } else {
            console.error('Invalid shoe ID:', id);
        }
    };

    return (
        <div className="products">
            <button className="scroll-btn left" onClick={scrollLeft}>
                <img src="/assets/icons/left-arrow.svg" alt="Scroll Left" />
            </button>

            {trendingShoes.map(shoe => {
                console.log('Shoe object:', shoe); // Check the console to see if `shoeId` is present
                return (
                    <div
                        className="product"
                        key={shoe.shoeId} // Adjusted to match the API response
                        onClick={() => handleShoeClick(shoe.shoeId)}
                    >
                        <img src={getImageUrl(shoe.imageUrl)} alt={shoe.name} />
                        <p>{shoe.name}</p>
                    </div>
                );
            })}

            <button className="scroll-btn right" onClick={scrollRight}>
                <img src="/assets/icons/right-arrow.svg" alt="Scroll Right" />
            </button>
        </div>
    );
}

export default Products;
