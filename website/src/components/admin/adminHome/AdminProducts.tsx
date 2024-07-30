import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/admin/adminproducts.css';

interface Shoe {
    shoeId: number;
    name: string;
    category: string;
    brand: {
        brandId: number;
        brandName: string;
    };
    price: number;
    stock: number;
    imageUrl: string;
    trending: boolean;
}

function AdminProducts() {
    const [trendingShoes, setTrendingShoes] = useState<Shoe[]>([]);

    useEffect(() => {
        fetchTrendingShoes();
    }, []);

    const fetchTrendingShoes = () => {
        axios.get('http://localhost:8070/api/shoes/trending')
            .then(response => {
                const data = response.data;
                console.log('Data to set in state:', data); // Debugging line
                setTrendingShoes(data);
            })
            .catch(error => {
                console.error('Error fetching trending shoes:', error);
            });
    };

    const scrollLeft = () => {
        const productsDiv = document.querySelector('.adminproducts');
        productsDiv?.scrollBy({ left: -750, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const productsDiv = document.querySelector('.adminproducts');
        productsDiv?.scrollBy({ left: 750, behavior: 'smooth' });
    };

    const getImageUrl = (imageUrl: string) => {
        if (!imageUrl) return '';
        if (imageUrl.startsWith('http')) return imageUrl;
        return `http://localhost:8070/images/${imageUrl}`;
    };

    const deleteShoe = (id: number) => {
        if (!id) {
            console.error("Invalid shoe ID");
            return;
        }
        console.log(`Deleting shoe with id: ${id}`); // Debugging line

        axios.delete(`http://localhost:8070/api/shoes/${id}`)
            .then(response => {
                console.log("Shoe deleted successfully", response);
                // Refresh the list of shoes after deletion
                fetchTrendingShoes();
            })
            .catch(error => {
                console.error("Error deleting shoe:", error);
            });
    };

    return (
        <div className="adminproducts">
            <button className="adminscroll-btn left" onClick={scrollLeft}>
                <img src="/assets/icons/left-arrow.svg" alt="Scroll Left" />
            </button>

            {trendingShoes.map(shoe => (
                <div className="adminproduct" key={shoe.shoeId}>
                    <div className="imgdiv">
                        <img className="imgg" src={getImageUrl(shoe.imageUrl)} alt={shoe.name} />
                        <img
                            className="deleteicon"
                            src="/assets/icons/delete-icon.svg"
                            alt="Delete"
                            onClick={() => deleteShoe(shoe.shoeId)} // Ensure shoe.shoeId is passed
                        />
                        <img className="editicon" src="/assets/icons/edit-icon-product.svg" alt="Edit" />
                    </div>
                    <p>{shoe.name}</p>
                </div>
            ))}

            <button className="adminscroll-btn right" onClick={scrollRight}>
                <img src="/assets/icons/right-arrow.svg" alt="Scroll Right" />
            </button>
        </div>
    );
}

export default AdminProducts;