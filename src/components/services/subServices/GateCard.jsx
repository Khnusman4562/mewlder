import React from 'react';
import { Link } from 'react-router-dom';

import "./cardCss/servicesCard.css"

const GateCard = () => {
    return (
        <div className="container">
            <div className="row">
                <h2 className=" pb-2 ">Our Products and Materials</h2>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card  image-container">
                        <img src="/images/service_icon/gate_icon/maingate.jpg" alt="main entarance gate" />

                        <h5 className="m-2">Main Entrance Gates</h5>

                        <div className="image-overlay">

                            <p className="card-text">Grand entrances with secure elegance for a lasting impression.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card  image-container">

                        <img src="/images/service_icon/gate_icon/single_door.jpg" alt="metal single door" />
                        <h5 className="m-2">Safety Single Door</h5>
                        <div className="image-overlay">
                            <p className="card-text">Stylish security solutions for single-door entrances.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">

                        <img src="/images/service_icon/gate_icon/double_door.jpg" alt="metal single door" />
                        <h5 className="m-2">Safety Double Door</h5>
                        <div className="image-overlay">
                            <p className="card-text">Dual-door security with modern and sleek designs.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/gate_icon/channel_gate.jpg" alt="metal single door" />
                        <h5 className="m-2">Collapsible Gate</h5>
                        <div className="image-overlay">
                            <p className="card-text">Compact, sturdy, and durable gates that optimize space, enhance aesthetics, and ensure longevity.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6 mx-auto mb-4">
                    <Link to='/repairing' className="card image-container">
                        <img src="/images/service_icon/gate_icon/repairing.jpg" alt="metal single door" />
                        <h5 className="m-2"> Gates Repairing</h5>
                        <div className="image-overlay">
                            <p className="card-text">Enhance the safety and aesthetics of your property with our professional gate repair services. Our skilled team specializes in restoring and strengthening gates for long-lasting protection of your home or business.</p>
                        </div>

                    </Link>
                </div>
            </div>

            <div className="threeD">
                <div className="">
                    <div className="">
                        <div className="">
                            <h2 className="pt-3 text-center">Price List (per square foot)</h2>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>1. Main Entrance Gate:</strong>
                                    <br />
                                    Standard Design Main Entrance Gate: ₹500/sqft
                                    <br />
                                    <strong>2. Light Angle Door (1.25 inch outer angle and 1 inch inner angle, light)</strong>
                                    <br />
                                    Safety Single Door: ₹300/sqft
                                    <br />
                                    Safety Double Door: ₹350/sqft
                                    <br />
                                    <strong>3. Thick Angle Door (1.25 inch outer angle and 1 inch inner angle, thick)</strong>
                                    <br />
                                    Safety Single Door: ₹400/sqft
                                    <br />
                                    Safety Double Door: ₹450/sqft
                                    <br />
                                    <strong>4. Collapsible Gate:</strong> ₹350/sqft
                                    <br />

                                    <div>
                                        <div className="text-center mt-4 p-4 bg-secondary text-white">
                                            <p>Interested in a custom design or need more details?</p>
                                            <p>Contact us today to discuss your specific requirements.</p>
                                            <a href="/contact" className="cta-link">
                                                <button className="btn btn-warning">Contact Us</button>
                                            </a>
                                        </div>

                                        <br />
                                        <strong> Concrete Iron Nails:</strong> Used for fitting grills, doors, or other items.

                                        <br />
                                        <div className="alert alert-info mt-4">
                                            <strong>Note:</strong> Prices may vary based on design, size, materials, quantity, and market conditions.
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Content */}
            <div className="threeD mt-2 ">
                <h2 className="py-3">We utilize high-quality materials </h2>

                <ul>
                    <li>Angle Bars</li>
                    <li>Rectangle Pipes</li>
                    <li>Round Pipes</li>
                </ul>
                <p>These materials ensure durability and a timeless aesthetic.</p>
            </div>
        </div>
    );
};

export default GateCard;