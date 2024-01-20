import React from 'react'
import { Link } from 'react-router-dom';
import "./cardCss/servicesCard.css"
const GrillCard = () => {
    return (
        <div className="container">
            <div className="row">
                <h2 className=" pb-2">Our Products and Materials</h2>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/grill_icon/decorative.jpg" alt="decorative grill" />
                        <h5 className="m-2"> Decorative Metal Grills</h5>
                        <div className="image-overlay">
                            <p className="card-text">Customize your design, add decorative grills beside your gate, matching your preferred style</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/grill_icon/box-grill.jpg" alt="window box grill" />
                        <h5 className="m-2"> Window Box Grills </h5>
                        <div className="image-overlay">
                            <p className="card-text">Window grills provide both security and style, offering extra space for outdoor AC units and clothes drying</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/grill_icon/plane.jpg" alt="window plane grill" />
                        <h5 className="m-2">Plain Window Grills</h5>
                        <div className="image-overlay">

                            <p className="card-text">For fixed bathroom windows, opt for plain grills to enhance safety. Adding a 0.5-inch wire mesh prevents pests from entering.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 mb-4">
                    <Link to='/quote' className="card image-container">
                        <img src="/images/service_icon/grill_icon/shed_grill.jpg" alt="window box grill" />
                        <h5 className="m-2">Window Box Grills ( with Shed)</h5>
                        <div className="image-overlay">

                            <p className="card-text">Shed atop box grills diverts rainwater, minimizing interior water ingress and enhancing curb appeal</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6 mx-auto mb-4">
                    <Link to='/repairing' className="card image-container">
                        <img src="/images/service_icon/grill_icon/repairing.jpg" alt="window  grill repairing " />
                        <h5 className="m-2"> Grills Repairing</h5>
                        <div className="image-overlay">

                            <p className="card-text">Safeguard your property's safety and aesthetics with our grill repair expertise. We restore and strengthen grills for lasting protection.</p>
                        </div>
                    </Link>
                </div>

            </div>

            <div className="row mt-4">
                <div className="threeD">
                    <div className="">
                        <div className="">
                            <h4 className="pt-3 text-center">Price List (per square foot)</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>1. Square Iron Rods & Round Iron Rods:</strong> Available in various sizes including 8mm, 9mm, 10mm, 12mm
                                    <br />
                                    8mm: ₹100/sqft
                                    <br />
                                    9mm: ₹120/sqft
                                    <br />
                                    10mm: ₹140/sqft
                                    <br />
                                    12mm: ₹180/sqft
                                    <br />

                                </li>
                                <li className="list-group-item">
                                    <strong>2. Patti (Metal Strips):</strong>
                                    <ul>
                                        <li>18/2.5 patti</li>
                                        <li>18/4 patti</li>
                                        <li>20/5 patti</li>
                                        <li>20/3 patti</li>
                                    </ul>
                                </li>
                                <li className="list-group-item">
                                    <strong>3. Rod, Patti & Angle (Grill Framing):</strong> Options for grill framing.
                                </li>
                                <li className="list-group-item">
                                    <strong>4. Bracket (Support):</strong> Option for additional support below the grill.
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
                                    <strong>Concrete Iron Nails:</strong> Used for fitting grills, doors, or other items.

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

        </div>

    )
}

export default GrillCard