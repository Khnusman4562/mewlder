import React, { useState } from 'react';
import '../comp_css/heading.css';
import { useNavigate } from 'react-router-dom';

const validPincodes = Array.from({ length: 105 }, (_, index) => 400001 + index);


const servicesOptions = [
    {
        service: 'Iron gate fabrication',
        categories: ['Main Enterence Gate', 'Double Door', 'Single Door'],
        materials: ['Light Angle(1.25 Outer, 1 Inner,3mm Thick)', 'Thick Angle(1.25 Outer, 1 Inner,5mm Thick)', 'Rectangular Pipe (1.25 Outer Angle, 2*1 Pipe)'],
        designs: ['design No. 1', 'design No. 2', 'design No. 3', 'customis gate.'],
    },
    {
        service: 'Grill fabrication',
        categories: ['Plane grill', 'Box grill', 'Box grill with shed'],
        materials: ['8mm', '9mm', '10mm', '12mm'],
        designs: ['maharaja design', 'normal design', 'bilder model design'],

    },
    {
        service: 'Shutter',
        categories: ['Rolling Shutter', 'Manual Gear Shutter', 'Channel Shutter'],
        materials: ['23 Gauge GI Curtain', '22 Gauge GI Curtain'],

    },
    {
        service: 'Roofing shed fabrication',
        categories: ['Industrial Roofing Sheds', 'Residential Roofing Sheds', 'New Sheds on Grill'],
        materials: [' Roofing Sheds(0.5mm Gi Color Coated Sheet) ', 'On Grill (23 Gauge Alluminium Sheet)', 'On Grill (0.5mm Gi Color Coated Sheet)'],

    },

    {
        service: 'Stair Fabrication',
        categories: ['Plane Ladder', 'Step Metal Stair', 'Step Metal Stair With Side Railing '],
        materials: ['Plane Ladder (2*2 Square 18 Gauge Pipe )', 'Angle (1.25 Outer 1*1 inner With 5mm Thick)', 'Angle (1.25 Outer 1*1 inner With 3mm Thick)'],

    },
    {
        service: 'Railing fabrication ',
        categories: ['Balconies', 'Stair', 'Bridges'],
        materials: ['Pipe 18 Gauge (Outer (2*1) and Inner (1*1)  )', 'Pipe 18 Gauge (Outer (2*2) and Inner (1.25*1) )', 'Angle (Outer (2*2) and Inner (1.25 * 1.25 ) ) 5mm Thick'],

    },
];

const QuoteForm = () => {
    const initialQuoteData = {
        name: '',
        phone: '',
        pincode: '',
        services: '',
        category: '',
        material: '',
        size: '',
        box: '',
        Address: '',
    };

    const [quoteData, setQuoteData] = useState(initialQuoteData);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuoteData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !quoteData.name ||
            !quoteData.phone ||
            !quoteData.services ||
            !quoteData.category ||
            !quoteData.material
        ) {
            setErrorMessage('Please fill in all required fields.');
            setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 5 seconds
            return;
        }

        if (quoteData.phone.length !== 10) {
            setErrorMessage('Please enter a valid phone number');
            setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 5 seconds
            return;
        }

        // Validate pincode
        const enteredPincode = parseInt(quoteData.pincode);
        if (!validPincodes.includes(enteredPincode)) {
            setErrorMessage(
                'Sorry, we do not provide services in your location. But we still appreciate your interest in our services! 😊'
            );
            setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 5 seconds
            return;
        }

        try {
            const response = await fetch('http://localhost/php-server/routes/quoteRoute.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(quoteData),
            });

            if (response.ok) {
                setSuccessMessage('Quotation submitted successfully!');
                setErrorMessage('');
                setQuoteData(initialQuoteData); // Reset the form after successful submission
                setTimeout(() => setSuccessMessage(''), 4000); // Clear success message after 5 seconds
                setTimeout(() => {
                    setSuccessMessage(false);
                    navigate('/'); // Redirect to home page after successful form submission
                }, 6000);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error);
                setTimeout(() => setErrorMessage(''), 4000); // Clear error message after 5 seconds
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(
                'Oops! Something went wrong while processing your request. Please try again later.'
            );
            setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 5 seconds
        }
    };
    const handleServiceChange = (selectedService) => {
        const matchingService = servicesOptions.find(
            (option) => option.service === selectedService
        );
        if (matchingService) {
            setQuoteData({
                ...quoteData,
                services: selectedService,
                category: '',
                material: '',
                box: '',
                Address: '',
            });
        }
    };

    return (
        <div className="container " style={{ position: 'relative', top: '5rem' }}>
            <h2 className="shadow-heading">Request a Free Quotation</h2>
            {errorMessage && <div className="alert alert-danger fixed-top w-100 text-center">{errorMessage}</div>}
            {successMessage && (
                <div className="alert alert-success fixed-top w-100 text-center">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit} className='threeD'>
                <div className="row justify-content-center  ">
                    <div className="col-md-6">
                        <select
                            name="services"
                            value={quoteData.services}
                            onChange={(e) => {
                                handleChange(e);
                                handleServiceChange(e.target.value);
                            }}
                            className="form-select "
                        >
                            <option value="">Select a Service*</option>
                            {servicesOptions.map((option) => (
                                <option key={option.service} value={option.service}>
                                    {option.service}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-12">
                        <select
                            name="category"
                            value={quoteData.category}
                            onChange={handleChange}
                            className="form-select "
                        >
                            <option value="">Select a Category*</option>
                            {servicesOptions.find(
                                (option) => option.service === quoteData.services
                            )?.categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <select
                            name="material"
                            value={quoteData.material}
                            onChange={handleChange}
                            className="form-select mt-3"
                        >
                            <option value="">Select a Material*</option>
                            {servicesOptions.find(
                                (option) => option.service === quoteData.services
                            )?.materials.map((material) => (
                                <option key={material} value={material}>
                                    {material}
                                </option>
                            ))}
                        </select>
                        {/* Width section */}
                        {quoteData.services === 'Grill fabrication' && (
                            <select
                                name="box"
                                value={quoteData.box}
                                onChange={handleChange}
                                className="form-select mt-3"
                                autoComplete="name" // Add this attribute
                            >
                                <option value="">Select a Box Size*</option>
                                <option value="Box 1 foot">box 1 foot</option>
                                <option value="Box 1.5 feet">box 1.5 feet</option>
                                <option value="Box 2 feet">box 2 feet</option>
                                <option value="Without box">without box</option>
                            </select>
                        )}
                    </div>
                    <div className="input-container  mt-4">
                        <div className="input-group ">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name*"
                                value={quoteData.name}
                                onChange={handleChange}
                                className="form-control my-1 custom40"
                                autoComplete="name"
                            />
                            <input
                                type="number"
                                name="phone"
                                placeholder="Enter phone*"
                                value={quoteData.phone}
                                onChange={handleChange}
                                className="form-control my-1 custom40"
                                autoComplete="tel"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="number"
                                name="pincode"
                                placeholder="Enter pincode*"
                                value={quoteData.pincode}
                                onChange={handleChange}
                                className="form-control my-1 custom40"
                                autoComplete="postal-code"
                            />
                            <input
                                type="text"
                                name="Address"
                                placeholder="Enter Address"
                                value={quoteData.Address}
                                onChange={handleChange}
                                className="form-control my-1 custom40"
                                autoComplete="address-line1"
                            />
                        </div>
                    </div>

                </div>
                <div className="row-12  ">
                    <div className="col-md-12 my-3">
                        <label className="form-label">Size</label>
                        <textarea
                            rows={3}
                            name="size"
                            placeholder="Enter size in feet (length x breadth)"
                            value={quoteData.size}
                            onChange={handleChange}
                            className="form-control"
                            autoComplete="name" // Add this attribute
                        />
                    </div>
                </div>
                <div className="row  ">
                    <div className="col-md-12 text-center  ">
                        <button className="btn btn-primary " type="submit">
                            Submit
                        </button>
                    </div>
                </div>
                <div
                    className="alert alert-info mt-4"
                    style={{
                        borderRadius: '28px',
                        background: 'white',
                        color: 'black',
                        fontSize: '23px',
                    }}
                >
                    For custom design inquiries and assistance, please feel free to
                    contact us:
                    <br />
                    <a
                        href="https://wa.me/9372479517"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-whatsapp "></i>
                    </a>
                    <a href="mailto:info@mewelder.com">
                        <i className="far fa-envelope m-4"></i>
                    </a>
                    <a href="tel:9372479517">
                        <i className="fas fa-phone"></i>
                    </a>
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;