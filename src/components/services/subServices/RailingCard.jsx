import React from 'react';
import { Link } from 'react-router-dom';

import "./cardCss/servicesCard.css"

const RailingCard = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className=" pb-2 ">Discover Our Railing Options</h2>
        <p className="m-2">Explore our range of custom metal railing designs tailored to meet your specific needs:</p>
        <div className="col-md-6 mb-4">
          <Link to='/quote' className="card image-container">
            <img src="/images/service_icon/railing_icon/balcony.jpg" alt="railing " />
            <h5 className="m-2">Balconies</h5>
            <div className="image-overlay">
              <p className="card-text">Metal railing for balconies.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 mb-4">
          <Link to='/quote' className="card image-container">
            <img src="/images/service_icon/railing_icon/stair.jpg" alt="railing " />
            <h5 className="m-2">Staircases</h5>
            <div className="image-overlay">

              <p className="card-text">Metal railing for staircases.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 mb-4">
          <Link to='/quote' className="card image-container">
            <img src="/images/service_icon/railing_icon/bridge.jpg" alt="railing " />
            <h5 className="m-2">Bridges</h5>
            <div className="image-overlay">

              <p className="card-text">Metal railing for bridges.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 mb-4">
          <Link to='/quote' className="card image-container">
            <img src="/images/service_icon/railing_icon/ind.jpg" alt="railing " />
            <h5 className="m-2">Industrial Areas</h5>
            <div className="image-overlay">

              <p className="card-text">Metal railing for industrial areas.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-6 mx-auto mb-4">
          <Link to='/repairing' className="card image-container">
            <img src="/images/service_icon/railing_icon/repairing.jpg" alt="railing " />
            <h5 className="m-2">Railing Repairing</h5>
            <div className="image-overlay">

              <p className="card-text">Expert metal railing repair, ensuring safety, durability, and aesthetics for your space. Choose us today!</p>
            </div>

          </Link>
        </div>
      </div>


      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <h2 className="pt-3 text-center">Metal Railing Price (per square foot)</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>.Railing:</strong>
                  <br />
                  - Rectangular Pipe Railing (Outer 2*1, inner 1*1, Spacing 5-Inch" 16 Gauge) : ₹300/sqft
                  <br />
                  {/* Call to Action */}
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
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="threeD mt-2">
        <h2 className="py-2">We utilize high-quality materials </h2>
        <div className="">

          <ul>
            <li>Rectangle Pipes</li>
            <li>Round Pipes</li>
          </ul>
          <p>These materials ensure durability and a timeless aesthetic.</p>
        </div>
      </div>

    </div>
  );
};

export default RailingCard;