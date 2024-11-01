import React, { useState } from 'react';
import '../styles/step1.css'
import Button from './Button';

const Step1 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = { name: '', email: '', phone: '' };

        if (!name) newErrors.name = 'This field is required';
        if (!email) newErrors.email = 'This field is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Enter a valid email';
        if (!phone) newErrors.phone = 'This field is required';
        else if (!/^\+?\d{1,15}$/.test(phone)) newErrors.phone = 'Enter a valid number';

        setErrors(newErrors);
        console.log(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.phone) {
            console.log({ name, email, phone });
            // Here you can handle the form submission
        }
    };

    return (
        <form onSubmit={handleSubmit} className="step1-form">
            <div className="form-group">
                <div className='error-name-container'>
                    <label htmlFor="name">Name</label>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Stephen King"
                    className={errors.name ? 'error' : ''}
                />
            </div>
            <div className="form-group">
                <div className='error-name-container'>
                    <label htmlFor="email">Email Address</label>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. stephenking@lorem.com"
                    className={errors.email ? 'error' : ''}
                />
            </div>
            <div className="form-group">
                <div className='error-name-container'>
                    <label htmlFor="phone">Phone Number</label>
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 234567890"
                    className={errors.phone ? 'error' : ''}
                />
            </div>
            < Button type={"submit"} text={"Next Step"}/>
        </form>
    );
};

export default Step1;
