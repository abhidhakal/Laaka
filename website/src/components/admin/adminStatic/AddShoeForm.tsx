import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/admin/adminbrandpage.css';

interface Brand {
    brandId: number;
    brandName: string;
}

const AddShoeForm: React.FC = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [brandName, setBrandName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [trending, setTrending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [brands, setBrands] = useState<Brand[]>([]);

    useEffect(() => {
        fetchBrands();
    }, []);

    const fetchBrands = async () => {
        try {
            const response = await axios.get('http://localhost:8070/api/brands');
            setBrands(response.data);
        } catch (error) {
            console.error('Error fetching brands:', error);
            setError('Error fetching brands. Please try again.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!brandName) {
            setError('Please select a brand');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('brandName', brandName);
        formData.append('price', price.toString());
        formData.append('stock', stock.toString());
        formData.append('trending', trending.toString());
        if (imageFile) {
            formData.append('image', imageFile);
        }

        try {
            const response = await axios.post('http://localhost:8070/api/shoes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Shoe added:', response.data);
            setError(null);
            // Reset form fields
            setName('');
            setCategory('');
            setBrandName('');
            setPrice(0);
            setStock(0);
            setImageFile(null);
            setTrending(false);
        } catch (error: any) {
            console.error('There was an error uploading the shoe:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
            setError(error.response?.data || 'There was an error uploading the shoe. Please try again.');
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    return (
        <form className="addshoe" onSubmit={handleSubmit}>
            <div className="shoecontent">
                <label className="shoecontent-label">Name:</label>
                <input className="shoecontent-input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="shoecontent">
                <label className="shoecontent-label">Category:</label>
                <input className="shoecontent-input" type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div className="shoecontent">
                <label className="shoecontent-label">Brand:</label>
                <select
                    className="shoecontent-input"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    required
                >
                    <option value="">Select a brand</option>
                    {brands.map((brand) => (
                        <option key={brand.brandId} value={brand.brandName}>
                            {brand.brandName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="shoecontent">
                <label className="shoecontent-label">Price:</label>
                <input className="shoecontent-input" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
            </div>
            <div className="shoecontent">
                <label className="shoecontent-label">Stock:</label>
                <input className="shoecontent-input" type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} required />
            </div>
            <div className="shoecontent">
                <label className="shoecontent-label">Image:</label>
                <input className="shoecontent-input" type="file" accept="image/*" onChange={handleImageChange}/>
            </div>
            <div className="shoecontent">
                <label className="shoecontent-label">
                    <input
                        className="checkboxx"
                        type="checkbox"
                        checked={trending}
                        onChange={(e) => setTrending(e.target.checked)}
                    />
                    Trending
                </label>
            </div>
            <button className="addshoe-btn" type="submit">Add Shoe</button>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default AddShoeForm;