import React from 'react';
import { Link } from 'react-router-dom';

import "./cardCss/servicesCard.css"

const ShedCard = () => {
    return (
        <div className="container">
            <div className="row">
                <h2 className=" pb-2 ">Our Products and Materials</h2>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/sheds_icon/ind_shed.jpg" alt="industrial sheds  " />
                        <h5 className="m-2">Industrial Roofing Sheds</h5>
                        <div className="image-overlay">
                            <p className="card-text">Discover durable and reliable industrial roofing sheds designed to safeguard your assets and enhance workspace efficiency.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/sheds_icon/resi_sheds.jpg" alt="home sheds " />

                        <h5 className="m-2">Residential Roofing Sheds</h5>
                        <div className="image-overlay">
                            <p className="card-text">Discover durable and stylish residential roofing sheds for reliable protection and a modern look for your home.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/sheds_icon/grill_shed.jpg" alt=" repairing sheds " />

                        <h5 className="m-2">New Sheds On Grill </h5>
                        <div className="image-overlay">
                            <p className="card-text">Upgrade your outdoor space with new sheds on grills, enhancing both functionality and aesthetics</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/repairing' className="card image-container">

                        <img src="/images/service_icon/sheds_icon/repairing.jpg" alt="sheds " />
                        {/* FontAwesome icon */}
                        <h5 className="m-2">Sheds Repairing  </h5>
                        <div className="image-overlay">
                            <p className="card-text">Renew and strengthen your sheds with expert repair services, ensuring lasting durability and functionality. </p>
                        </div>
                    </Link>
                </div>

            </div>

            <div className="threeD">
                <div className="">
                    <div className="">
                        <div className="">
                            <h2 className="pt-3 text-center">Price List For Sheds (per square foot)</h2>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Roofing Sheds:</strong>
                                    <ul>
                                        <li>2*2 GI Square pipe, GI Iron Roofing Sheet 0.5mm: ₹200/sqft</li>
                                    </ul>
                                </li>
                                <li className="list-group-item">
                                    <strong>On Grill Sheds:</strong>
                                    <ul>
                                        <li>20*3 patti frame and 0.5mm plane GI Color Coated Sheet: ₹170/sqft</li>
                                        <li>20*3 patti frame and 23 gauge plane Aluminum Sheet: ₹200/sqft</li>
                                    </ul>
                                </li>
                                <div>
                                    <div className="text-center mt-4 p-4 bg-secondary text-white">
                                        <p>Interested in a custom design or need more details?</p>
                                        <p>Contact us today to discuss your specific requirements.</p>
                                        <a href="/contact" className="cta-link">
                                            <button className="btn btn-warning">Contact Us</button>
                                        </a>
                                    </div>

                                    <br />
                                    <strong>. Concrete Iron Nails:</strong> Used for fitting grills, doors, or other items.

                                    <br />
                                    <div className="alert alert-info mt-4">
                                        <strong>Note:</strong> Prices may vary based on design, size, materials, quantity, and market conditions.
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Additional Content */}
            <div className="threeD mt-2">
                <h3 className="py-2">We utilize high-quality materials </h3>
                <ul>
                    <li>2*2 GI Pipe</li>
                    <li>20*3, 20*5 Patti & 8mm Square rod for framing</li>
                    <li>0.5mm GI Color Coated Sheet</li>
                    <li>Galvanized Self Drilling Screw for Sheds</li>
                </ul>
                <p>These materials ensure durability and a timeless aesthetic.</p>
            </div>

        </div>
    );
};

export default ShedCard;