import React from 'react';
import { Link } from 'react-router-dom';

import "./cardCss/servicesCard.css"

const ShutterCard = () => {
    return (
        <div className="container">
            <div className="row">
                <h2 className=" pb-2">Our Products and Materials</h2>
                <p>Explore our range of custom shutter designs tailored to meet your specific needs:</p>
                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/shutter_icon/rolling_shutter.jpg" alt="rolling shutter " />
                        <h5 className="m-2"> Rolling Shutters</h5>
                        <div className="image-overlay">
                            <p className="card-text">Enhance security with our rolling shutters, crafted from high-quality metal with 23 gauge GI shutter Curtain.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/shutter_icon/gear_shutter.jpg" alt="rolling shutter " />
                        <h5 className="m-2">Manual Gear Shutters</h5>
                        <div className="image-overlay">

                            <p className="card-text">Experience ease of use with our manual gear shutters, constructed using metal and 22 gauge GI shutter Curtain.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/shutter_icon/channel_shutter.jpg" alt="rolling shutter " />
                        <h5 className="m-2">Collapsible Shutters</h5>
                        <div className="image-overlay">

                            <p className="card-text">Opt for Collapsible shutters for robust protection, made from durable metal with 22 gauge GI shutter Curtain.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/repairing' className="card image-container">
                        <img src="/images/service_icon/shutter_icon/repairing.jpg" alt="rolling shutter " />
                        <h5 className="m-2">Shutters Repairing </h5>
                        <div className="image-overlay">

                            <p className="card-text">Get professional shutter repairing services to keep your shutters in top condition.</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="threeD">
                <div className="">
                    <div className="">
                        <div className="">
                            <h4 className="pt-3 text-center">Price List (per square foot):</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>1. Rolling Shutters:</strong>
                                    <br />
                                    ₹250/sqft 23 gauge Gi Curtain
                                    <br />
                                    <strong>2. Manual Gear Shutters</strong>
                                    <br />
                                    ₹450/sqft 22 gauge Gi Curtain
                                    <br />
                                    <strong>3. Collapsible Shutters</strong>
                                    <br />
                                    ₹500/sqft 22 gauge Gi Curtain
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
                                        <strong>. Concrete Iron Nails:</strong> Used for fitting grills, doors, or other items.

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
            <div className="threeD mt-2">
                <h2 className="py-3">We utilize high-quality materials</h2>
                <div className="">
                    <ul>
                        <li>Lath/Roller Curtain  gi 22 and 23 gauge  </li>
                        <li>Guid Rail / track</li>
                        <li>Bottom Lath</li>
                        <li>Bracket Plate</li>
                        <li>Locking Arrangement</li>
                        <li>etc </li>
                    </ul>
                    <p>These materials ensure durability and a timeless aesthetic.</p>
                </div>
            </div>
        </div>
    );
};

export default ShutterCard;
