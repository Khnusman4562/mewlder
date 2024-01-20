import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../comp_css/RepairingForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesArea from '../Home/ServicesArea';
import '../comp_css/heading.css';
import { useNavigate } from 'react-router-dom';

const RepairingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        pincode: '',
        phone: '',
        services: '',
        details: '',
        additionalServices: [],
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const clearMessages = () => {
            setSuccessMessage('');
            setErrorMessage('');
        };

        const successTimer = setTimeout(clearMessages, 4000);
        const errorTimer = setTimeout(clearMessages, 3000);

        return () => {
            clearTimeout(successTimer);
            clearTimeout(errorTimer);
        };
    }, [successMessage, errorMessage]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleAdditionalServiceChange = (e) => {
        const { name, checked } = e.target;
        const updatedServices = [...formData.additionalServices];

        if (checked) {
            updatedServices.push(name);
        } else {
            const index = updatedServices.indexOf(name);
            if (index !== -1) {
                updatedServices.splice(index, 1);
            }
        }

        setFormData({
            ...formData,
            additionalServices: updatedServices,
        });
    };

    const validatePhoneNumber = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    const validatePincode = (pincode) => {
        const pin = parseInt(pincode, 10);
        return pin >= 400000 && pin <= 400105;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validatePhoneNumber(formData.phone)) {
            setErrorMessage('Please enter a valid phone number.');
            return;
        }

        if (!validatePincode(formData.pincode)) {
            setErrorMessage('Sorry, we do not provide services in your location. But we still appreciate your interest in our services! 😊');
            return;
        }

        try {
            const formDataToSend = { ...formData };

            // Send a POST request to your backend API
            // const response =
            await axios.post('http://localhost/php-server/routes/repairingRoute.php', formDataToSend);

            setSuccessMessage('Form submitted successfully!');
            setTimeout(() => {
                setSuccessMessage(false);
                navigate('/'); // Redirect to home page after successful form submission
            }, 8000);

            setFormData({
                name: '',
                email: '',
                address: '',
                pincode: '',
                phone: '',
                services: 'Iron Gate Repair',
                details: '',
                additionalServices: [],
            });
        } catch (error) {
            setErrorMessage('Oops! Something went wrong while processing your request. Please try again later.');
        }
    };

    return (
        <div className="container mt-5" style={{ position: 'relative', top: '2rem' }}>
            {successMessage && (
                <div className="alert alert-success fixed-top w-100 text-center">{successMessage}</div>
            )}
            {errorMessage && (
                <div className="alert alert-danger fixed-top w-100 text-center">{errorMessage}</div>
            )}

            <h2 className="mb-4 text-center shadow-heading text-shadow">Welding Repair Services Request</h2>
            <div className="row">
                <div className="col col-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 row">

                                    <div className="col">
                                        <label htmlFor="service" className="form-label">Select Service:</label>
                                        <select
                                            id="service"
                                            name="services"
                                            value={formData.services}
                                            onChange={handleInputChange}
                                            className="form-select custom-input"
                                        >
                                            <option value="Iron Gate Repair">Iron Gate Repair</option>
                                            <option value="Grill Repair">Grill Repair</option>
                                            <option value="Shutter Repair">Shutter Repair</option>
                                            <option value="Roofing Shed Repair">Roofing Shed Repair</option>
                                            <option value="Stair Railing Repair">Stair Railing Repair</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col">
                                        <label htmlFor="name" className="form-label">Name:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="form-control custom-input"
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="phone" className="form-label">Phone Number:</label>
                                        <input
                                            type="number"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="form-control custom-input"
                                            required
                                        />
                                    </div>

                                </div>
                                <div className="mb-3 row">
                                    <div className="col">
                                        <label htmlFor="address" className="form-label">Address:</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="form-control custom-input"
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="pincode" className="form-label">Pincode:</label>
                                        <input
                                            type="number"
                                            id="pincode"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                            className="form-control custom-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="details" className="form-label">Repair Details:</label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        value={formData.details}
                                        onChange={handleInputChange}
                                        className="form-control custom-input"
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <h2 className="form-label">Additional Services:</h2>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="checkbox"
                                            id="shutterSpring"
                                            name="shutterSpring"
                                            checked={formData.additionalServices.shutterSpring}
                                            onChange={handleAdditionalServiceChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="shutterSpring" className="form-check-label">
                                            Shutter Spring Repair
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="checkbox"
                                            id="channelGate"
                                            name="channelGate"
                                            checked={formData.additionalServices.channelGate}
                                            onChange={handleAdditionalServiceChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="channelGate" className="form-check-label">
                                            Channel Gate Repair
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="checkbox"
                                            id="weldingOnStructure"
                                            name="weldingOnStructure"
                                            checked={formData.additionalServices.weldingOnStructure}
                                            onChange={handleAdditionalServiceChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="weldingOnStructure" className="form-check-label">
                                            Welding on Structure
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="checkbox"
                                            id="gateFitting"
                                            name="gateFitting"
                                            checked={formData.additionalServices.gateFitting}
                                            onChange={handleAdditionalServiceChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="gateFitting" className="form-check-label">
                                            Gate Fitting
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="checkbox"
                                            id="grillFitting"
                                            name="grillFitting"
                                            checked={formData.additionalServices.grillFitting}
                                            onChange={handleAdditionalServiceChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="grillFitting" className="form-check-label">
                                            Grill Fitting
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="checkbox"
                                            id="grillRemoval"
                                            name="grillRemoval"
                                            checked={formData.additionalServices.grillRemoval}
                                            onChange={handleAdditionalServiceChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="grillRemoval" className="form-check-label">
                                            Grill Removal
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="checkbox"
                                            id="resizeGrill"
                                            name="resizeGrill"
                                            checked={formData.additionalServices.resizeGrill}
                                            onChange={handleAdditionalServiceChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="resizeGrill" className="form-check-label">
                                            Resize Grill
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="checkbox"
                                            id="acOutdoorGrill"
                                            name="acOutdoorGrill"
                                            checked={formData.additionalServices.acOutdoorGrill}
                                            onChange={handleAdditionalServiceChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="acOutdoorGrill" className="form-check-label">
                                            AC Outdoor Grill Installation
                                        </label>
                                    </div>
                                    {/* Add more additional services as needed */}
                                </div>

                                <button type="submit" className="btn btn-primary custom-button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ServicesArea />
            </div>
        </div>
    );
};

export default RepairingForm;