import React from 'react';
import { Link } from 'react-router-dom';

const googleMapsLink = 'https://maps.app.goo.gl/9dCTWxepRXk1pDux6';

const VisitLocation = () => (
    <div className=" mb-4">
        <div className="card location-container">
            <div>
                <h3 className="mb-3">Visit Our Location</h3>
                <p>
                    Learn more about our services and how we can assist you.{' '}
                    <Link className="google-maps-link" to={googleMapsLink} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-light">Google Maps</button>
                    </Link>
                </p>
            </div>
        </div>
    </div>
);

export default VisitLocation;
