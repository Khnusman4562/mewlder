import React from 'react';
import Form from '../form/Form';
import VisitLocation from './VisitLocation';

// import '../comp_css/AboutUs.css'; // Import your CSS file for custom styles

const AboutUs = () => {

    return (
        <div className="container about-us-container" style={{ position: 'relative', top: '5rem' }}>
            <h2 className=" about-us-heading mb-4 custom-h">About Mewelder</h2>

            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body custom-card">
                            <p className="card-text custom-h">
                                Mewelder is a team of dedicated professionals based in Mumbai, Maharashtra.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body custom-card">
                            <p className="card-text custom-h">
                                We specialize in crafting elegant gates, grills, shutters, sheds, stair railings, and providing expert repair services.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body custom-card">
                            <p className="card-text custom-h">
                                Our creations enhance both security and aesthetics, reflecting precision workmanship and creative designs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body custom-card">
                            <div className="card-text custom-h">
                                Our commitment to excellence includes:
                                <ul className="about-us-list">
                                    <li>Skilled Team: Our experts ensure top-notch quality.</li>
                                    <li>Premium Materials: We use the best for durability.</li>
                                    <li>Custom Solutions: Tailored to your needs and vision.</li>
                                    <li>Punctual Delivery: On-time, without compromising quality.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body custom-card">
                            <p className="card-text custom-h">
                                Our vision is to be a trusted leader in the industry, delivering cutting-edge, cost-effective, and top-tier products and services.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body custom-card">
                            <p className="card-text custom-h">
                                We are dedicated to transforming spaces, ensuring security, elegance, and uniqueness for every client.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" container card custom-card contact-info-container">
                <h3>Contact Information</h3>
                <p className="contact-info-item custom-h">Address: Shop No 1, Building No R8, Opposite Mankhurd Police Station, Hiranandani Lallubhai Compound, Mankhurd, Mumbai, 400043</p>
                <p className="contact-info-item"><strong>Email:</strong> info@mewelder.com</p>
            </div>

            <div className="threeD mt-4" >
                <VisitLocation />
            </div>
            <div className="" style={{ position: 'relative', bottom: '4rem' }}>
                <Form />
            </div>
        </div>
    );
};

export default AboutUs;
