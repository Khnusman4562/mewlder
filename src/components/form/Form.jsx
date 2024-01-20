import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const validPincodes = Array.from({ length: 105 }, (_, index) => 400001 + index); // Replace this with your actual valid pincodes

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [services, setServices] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [concern, setConcern] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    // const [emailError, setEmailError] = useState('');

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const servicesRef = useRef();
    const addressRef = useRef();
    const pincodeRef = useRef();
    const concernRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any of the fields are empty
        if (!name || !phone || !services || !address || !pincode || !concern) {
            setErrorMessage('Please fill in all the required fields.');
            setSuccessMessage('');
            return;
        }

        // Validate email format
        // if (!email.includes('@gmail.com')) {
        //     setEmailError('Email must be in the format example@gmail.com.');
        //     return;
        // } else {
        //     setEmailError('');
        // }

        // Validate phone number length
        if (phone.length !== 10) {
            setPhoneError('Please enter a valid phone number.');
            return;
        } else {
            setPhoneError('');
        }

        // Validate pincode
        if (!validPincodes.includes(Number(pincode))) {
            setErrorMessage('Sorry, we do not provide services in your location. But we still appreciate your interest in our services! 😊');
            setSuccessMessage('');
            return;
        }

        setErrorMessage('');
        setSuccessMessage('');

        const addUser = {
            name: name,
            email: email,
            phone: phone,
            services: services,
            address: address,
            pincode: parseInt(pincode),
            concern: concern,
        };

        try {
            const response = await fetch('http://localhost/php-server/routes/userRoute.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addUser),
            });

            const result = await response.json();
            if (!response.ok) {
                setErrorMessage(result.error);
                setSuccessMessage('');
            } else {
                setSuccessMessage('Form successfully submitted!');
                setName('');
                setEmail('');
                setPhone('');
                setServices('');
                setAddress('');
                setPincode('');
                setConcern('');
                setShowSuccessMessage(true);

                setTimeout(() => {
                    setShowSuccessMessage(false);
                    navigate('/'); // Redirect to home page after successful form submission
                }, 5000);
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Oops! Something went wrong while processing your request. Please try again later.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="container" style={{ position: 'relative', top: '5rem' }}>

            <h2 className="text-center">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && <div className="alert alert-danger ">{errorMessage}</div>}
                {showSuccessMessage && <div className="alert alert-success">{successMessage}</div>}
                <div className="row">
                    <div className="mb-3 col-6">
                        {/* <label className="form-label">Name</label> */}
                        <input
                            type="text"
                            className="form-control custom40"
                            value={name}
                            ref={nameRef}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    emailRef.current.focus();
                                }
                            }}
                            placeholder="Name*"
                        />
                    </div>
                    <div className="mb-3 col-6">
                        {/* <label className="form-label">Email address</label> */}
                        <input
                            type="email"
                            className={`form-control custom40 mt-1`} // ${emailError ? 'is-invalid' : ''}`}
                            value={email}
                            ref={emailRef}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    phoneRef.current.focus();
                                }
                            }}
                            placeholder="Email address "
                        />

                        {/* {emailError && <div className="invalid-feedback">{emailError}</div>} */}
                    </div>
                    <div className="mb-3 col-6">
                        {/* <label className="form-label">Phone number</label> */}
                        <input
                            type="number"
                            className={`form-control custom40 mt-1 ${phoneError ? 'is-invalid' : ''}`}
                            value={phone}
                            ref={phoneRef}
                            onChange={(e) => setPhone(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    servicesRef.current.focus();
                                }
                            }}
                            placeholder="Phone number*"
                        />
                        {phoneError && <div className="invalid-feedback">{phoneError}</div>}
                    </div>
                    <div className="mb-3 col-6">
                        {/* <label className="form-label">Services</label> */}

                        <select
                            className="form-select custom40 "
                            value={services}
                            ref={servicesRef}
                            onChange={(e) => setServices(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    addressRef.current.focus();
                                }
                            }}
                        >
                            <option value="">Select a service*</option>
                            <option value="Gate">Gate</option>
                            <option value="Grill">Grill</option>
                            <option value="Shutter">Shutter</option>
                            <option value="Sheds">Sheds</option>
                            <option value="Stair">Stair</option>
                            <option value="Railing">Railing</option>
                            <option value="Repairing">Repairing</option>
                        </select>
                    </div>
                    <div className="mb-3 col-6">
                        {/* <label className="form-label">Address</label> */}
                        <input
                            type="text"
                            className="form-control custom40"
                            value={address}
                            ref={addressRef}
                            onChange={(e) => setAddress(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    pincodeRef.current.focus();
                                }
                            }}

                            placeholder="Address*"

                        />
                    </div>
                    <div className="mb-3 col-6">
                        {/* <label className="form-label">Pincode</label> */}
                        <input
                            type="number"
                            className="form-control custom40 mt-1"
                            value={pincode}
                            name="pincode"
                            onChange={(e) => setPincode(e.target.value)}
                            ref={pincodeRef}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    concernRef.current.focus();
                                }
                            }}
                            placeholder="Pincode*"

                        />
                    </div>
                    <div className="mb-3 col-12">
                        {/* <label className="form-label">Describe your concern</label> */}
                        <textarea
                            className="form-control"
                            rows="4"
                            value={concern}
                            ref={concernRef}
                            onChange={(e) => setConcern(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSubmit(e);
                                }
                            }}
                            placeholder="Describe your concern *"

                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-success btn-lg btn-info">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
