import React from 'react';
import { Link } from 'react-router-dom';

import "./cardCss/servicesCard.css"

const StairCard = () => {
    return (
        <div className="container">
            <div className="row">
                <h2 className=" pb-2 ">Discover Our Stair Options</h2>
                <p className="mb-4">Explore our range of custom metal stair designs tailored to meet your specific needs:</p>
                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/stair_icon/plane.jpg" alt="stair ladder   " />
                        <h5 className="m-2">Plain Metal Stairs</h5>
                        <div className="image-overlay">
                            <p className="card-text">
                                Discover our plain metal stairs for a simple and functional solution to your stair needs.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/stair_icon/stair.jpg" alt="stair ladder   " />
                        <h5 className="m-2">Step Metal Stairs</h5>
                        <div className="image-overlay">
                            <p className="card-text">
                                Explore our step metal stairs designed to provide safe and convenient access.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/stair_icon/stair_railing.jpg" alt="stair ladder   " />
                        <h5 className="m-2">Step Metal Stairs With Side Railing</h5>
                        <div className="image-overlay">
                            <p className="card-text">
                                Upgrade to step metal stairs with side railing for added safety and support.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/repairing' className="card image-container">
                        <img src="/images/service_icon/stair_icon/repairing.jpg" alt="stair ladder   " />
                        <h5 className="m-2">Stair Repairing </h5>
                        <div className="image-overlay">
                            <p className="card-text">
                                Trust us for expert stair repairing services, ensuring safety and functionality.
                            </p>
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
                                    <strong>1. Plane Metal Stair:</strong>
                                    <br />
                                    -Plane Ladder Angle (Inner and Outer 2*2 Angle 5mm Thick) : ₹300/sqft
                                    <br />
                                    -Plane Ladder Pipe (Inner and Outer 2*2 GI Pipe 18 Gauge) : ₹350/sqft
                                    <br />
                                    <strong>2.Step Metal Stairs </strong>
                                    <br />
                                    -Light Angle Stair (1.25 inch outer angle and 1 inch inner angle, 3mm Thick & 20*3 Patti): ₹500/sqft

                                    <br />
                                    -Thick Angle Stair (1.25 inch outer angle and 1 inch inner angle, 5mm Thick & 20*5 Patti): ₹700/sqft
                                    <br />

                                    <strong>3.Stair Railing</strong>
                                    <br />
                                    - 1*1 Square or Round Pipe : ₹80/sqft
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
                <h2 className="py-2 text-center">We utilize high-quality materials </h2>
                <div className="">

                    <ul>
                        <li>1. Angle Bars (1.25 Inch , 1 Inch , 3mm , 5mm etc. )</li>
                        <li>2. Round Pipes</li>
                    </ul>
                    <p>These materials ensure durability and a timeless aesthetic.</p>
                </div>
            </div>
        </div>
    );
};

export default StairCard;