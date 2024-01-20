// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RepairingInclude from './RepairingInclude';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [flatRoomShop, setFlatRoomShop] = useState('');
    const [landmark, setLandmark] = useState('');
    const [zipCode, setZipCode] = useState('');
    const { service, option } = useParams();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };


    useEffect(() => {
        const parsedOptions = option.split('-');
        setSelectedOptions(parsedOptions);

        let initialPrice = 0;
        parsedOptions.forEach((opt) => {
            const optionPrice = getPriceForOption(opt);
            initialPrice += optionPrice;
        });
        setTotalPrice(initialPrice);
    }, [option]);

    const getPriceForOption = (optionName) => {
        const priceMapping = {
            'Small Shutter Spring ₹800': 800,
            'Medium Shutter Spring ₹1200': 1200,
            'Gear Shutter Spring ₹1500': 1500,
            // Shutter spring Replacement And Repairng
            'Sm Lock Patti ₹500': 500,
            'Lg Lock Patti ₹600': 600,
            'New Key Lock ₹3000': 3000,
            // Shutter Lock Replacement And Repairng
            'Shutter Handle ₹500': 500,
            'Shutter Stoper ₹500': 500,
            // Shutter Other Part Replacement


        };
        return priceMapping[optionName] || 0;
    };

    const handleDeleteOption = (index, e) => {
        e.preventDefault(); // Add this line to prevent form submission
        const updatedOptions = [...selectedOptions];
        const deletedOption = updatedOptions.splice(index, 1)[0];
        const optionPrice = getPriceForOption(deletedOption);
        const updatedTotalPrice = totalPrice - optionPrice;
        setTotalPrice(updatedTotalPrice);
        setSelectedOptions(updatedOptions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate location availability
        if (!latitude || !longitude) {
            alert("Please enable location access to proceed.");
            return;
        }

        // Validate WhatsApp number format
        const whatsappRegex = /^[0-9]{10,12}$/;
        if (!whatsappRegex.test(phoneNumber)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Validate required fields
        if (!name || !phoneNumber || !streetAddress || !zipCode || !landmark) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Validate zip code range
        const validZipCodes = /^400(0[0-9][1-9]|10[0-5])$/;
        if (!validZipCodes.test(zipCode)) {
            alert("Sorry, we do not provide services in your location. But we still appreciate your interest in our services! 😊");
            return;
        }

        const address = `${streetAddress}, ${flatRoomShop}, ${landmark}, ${zipCode}`;
        const formData = {
            name,
            phoneNumber,
            address,
            selectedOptions,
            totalPrice,
            latitude, // Include latitude in the form data
            longitude, // Include longitude in the form data
        };

        // Add Total Payable to the formData
        if (totalPrice > 0 && selectedOptions.filter(opt => getPriceForOption(opt) === 0).length > 0) {
            formData.totalPayable = `${totalPrice} + ${selectedOptions.filter(opt => getPriceForOption(opt) === 0).length}(Amt after checking)`;
        } else {
            formData.totalPayable = totalPrice;
        }
        if (totalPrice === 0) {
            formData.totalPayable = 'Amount to be determined after viewing';
        }
        try {
            const response = await fetch('http://localhost/php-server/routes/dynamicRepairing.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Form submitted successfully.');
                setSubmitSuccess(true); // Set submit success to true upon successful submission
                return; // Stop further execution after success
            }
            // const data = await response.text();
            // console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        if (submitSuccess) {
            // Redirect to the home page after 2 seconds
            const redirectTimer = setTimeout(() => {
                window.location.href = '/'; // Replace '/' with your home page URL
            }, 2000);

            // Clear timer on component unmount to avoid memory leaks
            return () => clearTimeout(redirectTimer);
        }
    }, [submitSuccess]);


    return (
        <div className="container" style={{ position: 'relative', top: '5rem' }}>
            <div className="card">
                <div className="card-body">
                    <h3>{service}</h3>
                    {/* <p>Total payable: {price}</p> */}
                    {totalPrice > 0 ? (
                        <p><strong>Payable Amount:</strong> {totalPrice}</p>
                    ) : (
                        <p><strong>Amount to be determined after viewing</strong></p>
                    )}
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '-1px', marginTop: '9px', padding: '5px' }}>
                    <strong>Fill Personal Details</strong>
                    <button className="btn btn-dark" type="button" onClick={handleGetLocation} style={{ marginLeft: 'auto' }}>On Location</button>
                </div>



                <div className="input-group">
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Enter Whatsapp No." value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Street Address" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
                    <input type="text" placeholder="Flat/Room/Shop No." value={flatRoomShop} onChange={(e) => setFlatRoomShop(e.target.value)} />
                    <div className="input-group">
                        <input type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                        <input type="text" placeholder="Landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                    </div>

                </div>

                <div className="selected-options-card">
                    <h4>Selected Services:</h4>
                    <ul >
                        {selectedOptions.map((selected, index) => (
                            <li className="newbtn" key={index}>
                                {selected}
                                <button className="remove-btn" onClick={(e) => handleDeleteOption(index, e)}></button>

                            </li>
                        ))}
                    </ul>
                    {/* <p><strong>Payable Amount:</strong> {totalPrice}</p> */}
                    <div className='btn btn-dark'>
                        {totalPrice > 0 && selectedOptions.filter(opt => getPriceForOption(opt) === 0).length > 0 && (
                            <p><strong>Total Payable:</strong> {totalPrice} + {selectedOptions.filter(opt => getPriceForOption(opt) === 0).length}(Amt after checking) </p>
                        )}
                        {totalPrice > 0 && selectedOptions.filter(opt => getPriceForOption(opt) === 0).length === 0 && (
                            <p><strong>Payable Amount:</strong> {totalPrice}</p>
                        )}
                        {totalPrice === 0 && (
                            <p><strong>Amount to be determined after viewing</strong></p>
                        )}
                    </div>



                </div>
                <button className="btn btn-success mt-2" type="submit">Submit</button>
            </form>
            <div className=' mt-5' >
                <hr />

                <RepairingInclude />
            </div>
        </div>

    );

};

export default FormComponent;
