import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/customer/shoedetail.css';

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
    const [showPopup, setShowPopup] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');
    const [userName, setUserName] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [showPaymentPopup, setShowPaymentPopup] = useState(false);
    const [paymentImage, setPaymentImage] = useState('');

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

    const getStockStatus = (stock: number) => {
        if (stock > 5) {
            return "Available";
        } else if (stock > 0) {
            return "Available, Low Stock";
        } else {
            return "Not Available Currently";
        }
    };

    const handleOrderNowClick = () => {
        setShowPopup(true);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shoe) return;

    const orderData = {
        orderItems: [
            {
                shoe: { id: shoe.shoeId },
                quantity: quantity,
                price: shoe.price * quantity,
                size: size
            }
        ],
        totalPrice: shoe.price * quantity,
        orderStatus: 'Pending',
        billingAddress: billingAddress,
        paymentMethod: paymentMethod
    };

    console.log('Order Data:', orderData);  // Log order data before sending request

    axios.post('http://localhost:8070/api/orders', orderData)
        .then(response => {
            console.log('Order created:', response.data);
            setShowPopup(false);
        })
        .catch(error => {
            console.error('Error creating order:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
            }
        });
};


    const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const method = e.target.value;
        setPaymentMethod(method);
        if (method === 'Esewa') {
            setPaymentImage('/assets/images/payment/qr/esewa_qr.jpg');
            setShowPaymentPopup(true);
        } else if (method === 'Khalti') {
            setPaymentImage('/assets/images/payment/qr/khalti_qr.png');
            setShowPaymentPopup(true);
        }
    };

    if (!shoe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="shoe-main-frame">
            <div className="shoe-detail-main">
                <img className="shoe-detail-img" src={`http://localhost:8070/images/${shoe.imageUrl}`} alt={shoe.name} />
                <div className="shoe-detail-info">
                    <div>
                        <h1 className="shoe-detail-title">{shoe.name}</h1>
                        <p className="shoe-detail-description">{shoe.description}</p>
                        <p className="shoe-detail-price">Price: NRs {shoe.price}</p>
                        <p className="shoe-detail-price">Stock: {getStockStatus(shoe.stock)}</p>
                    </div>

                    <div className="shoe-detail-order">
                        <button className="order-product-btn" onClick={handleOrderNowClick}>Order Now</button>
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

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                    <span className="close-btn" onClick={() => setShowPopup(false)}>&times;</span>
                        <h2>Order Details</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-flex">
                                <label className="form-label">Quantity:</label>
                                <input className="form-input" type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} min="1" max={shoe.stock} required />
                            </div>
                            <div className="form-flex">
                                <label className="form-label">Size:</label>
                                <select className="form-select" value={size} onChange={(e) => setSize(e.target.value)} required>
                                    <option value="" disabled>Select Size</option>
                                    {[...Array(11).keys()].map(i => {
                                        const sizeValue = 35 + i;
                                        return (
                                            <option key={sizeValue} value={sizeValue}>{sizeValue}</option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="form-flex">
                                <label className="form-label">Full Name:</label>
                                <input className="form-input" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                            </div>
                            <div className="form-flex">
                                <label className="form-label">Billing Address:</label>
                                <input className="form-input" type="text" value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)} required />
                            </div>
                            <div className="form-flex">
                                <label className="form-label">Payment Method:</label>
                                <select className="form-select" value={paymentMethod} onChange={handlePaymentMethodChange} required>
                                    <option value="">Select Payment Method</option>
                                    <option value="Esewa">Esewa</option>
                                    <option value="Khalti">Khalti</option>
                                    <option value="Card">Card</option>
                                    <option value="Cash on Delivery">Cash on Delivery</option>
                                </select>
                            </div>
                            <button className="form-btn" type="submit">Confirm Order</button>
                        </form>
                        
                    </div>
                </div>
            )}

            {showPaymentPopup && (
                <div className="payment-popup-overlay">
                    <div className="payment-popup-content">
                        <img className="payment-image" src={paymentImage} alt={paymentMethod} />
                        <button className="payment-popup-btn" onClick={() => setShowPaymentPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShoeDetail;
