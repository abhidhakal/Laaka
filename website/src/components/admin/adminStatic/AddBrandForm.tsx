import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/admin/adminbrandpage.css';

const AddBrandForm = () => {
    const [brandName, setBrandName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8070/api/brands', { brandName: brandName });
            console.log('Brand added successfully:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error adding brand:', error.response?.data);
            } else {
                console.error('Error adding brand:', error);
            }
        }
    };

    return (
        <form className="addbrand" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Brand Name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
            />
            <button className="addbrand-btn" type="submit">Add Brand</button>
        </form>
    );
};

export default AddBrandForm;
