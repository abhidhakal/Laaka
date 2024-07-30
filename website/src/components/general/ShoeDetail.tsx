import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/customer/shoedetail.css';

interface ShoeDetailProps {
    id: number;
}

interface Shoe {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
}

function ShoeDetail({ id }: ShoeDetailProps) {
    const [shoe, setShoe] = useState<Shoe | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8070/api/shoes/${id}`)
                .then(response => {
                    console.log('Shoe details response:', response.data);
                    setShoe(response.data);
                })
                .catch(error => {
                    console.error('Error fetching shoe details:', error);
                });
        }
    }, [id]);

    if (!shoe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="shoe-detail-main">
            <img className="shoe-detail-img" src={`http://localhost:8070/images/${shoe.imageUrl}`} alt={shoe.name} />
            <div className="shoe-detail-info">
                <h1 className="shoe-detail-title">{shoe.name}</h1>
                <p className="shoe-detail-description">{shoe.description}</p>
                <p className="shoe-detail-price">Price: NRs {shoe.price}</p>
            </div>
        </div>
    );
}

export default ShoeDetail;
