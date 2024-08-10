import { useEffect, useState } from 'react';
import '../styles/customer/shoedetail.css';
import axios from "axios";

interface ShoeDetailProps {
    id: number;
}

interface Shoe {
    shoeId: number;
    name: string;
    imageUrl: string;
    description: string;
    stock: number;
    price: number;
}

function ShoeDetail({ id }: ShoeDetailProps) {
    const [shoe, setShoe] = useState<Shoe | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8070/api/shoes/${id}`)
                .then(response => {
                    setShoe(response.data);
                })
                .catch(error => {
                    console.error('Error fetching shoe details:', error);
                });
        }
    }, [id]);

    const getStockStatus = (stock: number) => {
        if (stock > 5) {
            return "Available";
        } else if (stock > 0) {
            return "Available, Low Stock";
        } else {
            return "Not Available Currently";
        }
    };

    return (
        <div className="shoe-main-frame">
            {shoe ? (
                <>
                    <div className="shoe-detail-main">
                        <img className="shoe-detail-img" src={`http://localhost:8070/images/${shoe.imageUrl}`} alt={shoe.name} />
                        <div className="shoe-detail-info">
                            <h1 className="shoe-detail-title">{shoe.name}</h1>
                            <p className="shoe-detail-price">Price: NRs {shoe.price}</p>
                            <p className="shoe-detail-price">Stock: {getStockStatus(shoe.stock)}</p>
                            <div className="shoe-detail-order">
                                <button className="order-product-btn">Order Now</button>
                                <button className="cart-product-btn">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="payment-options">
                        <p>Pay Using: </p>
                        <img className="payment-img" src='/assets/images/payment/esewa.webp' alt="Esewa" />
                        <img className="payment-img" src='/assets/images/payment/khalti.png' alt="Khalti" />
                        <img className="payment-img" src='/assets/images/payment/visa.jpeg' alt="VISA" />
                        <img className="payment-img" src='/assets/images/payment/cod.svg' alt="COD" />
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default ShoeDetail;
