import React, { useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
import '../comp_css/heading.css';
// import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const locations = {
    'Chembur': [72.9025, 19.0526],
    'Govandi': [72.9167, 19.0552],
    'Ghatkopar': [72.9090, 19.0860],
    'Vashi': [73.0007, 19.0760],
    'Tilak Nagar': [72.8839, 19.0623],
    'Panvel': [73.1100, 18.9882],
    'Vadala': [72.8582, 19.0176],
    'DN Nagar': [72.8242, 19.1287],
    'Mumbai': [72.8777, 19.0760],  // Replace with actual coordinates for 'Other' area
    "Navi Mumbai": [73.0260, 19.0330],
    "Other": [72.9616, 19.2183]
};

const ServicesArea = () => {
    const [selectedLocation, setSelectedLocation] = useState('Chembur');

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;


        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 10,
            center: locations[selectedLocation]
        });

        new mapboxgl.Marker()
            .setLngLat(locations[selectedLocation])
            .setPopup(new mapboxgl.Popup().setText(selectedLocation))
            .addTo(map);

        return () => map.remove();
    }, [selectedLocation]);

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    return (
        <div className="container " style={{ position: 'relative', top: '2rem' }}>
            <hr />
            <h2 className='heading-3d'>Service Area </h2>
            <div className="row" style={{ height: '50%' }}>
                <div className="col-md-6 col-xs-12 ">
                    <label htmlFor="locationSelect">Select Location: </label>
                    <select id="locationSelect" value={selectedLocation} onChange={handleLocationChange} className="form-select">
                        {Object.keys(locations).map(location => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                </div>

            </div>

            <div className=" row mt-4">
                <div className="col-md-12 container-box-shadow">
                    <p>We provide services in this area</p>
                    <div
                        id="map"
                        style={{
                            maxWidth: '100%',
                            width: '100%',
                            height: '55vh',
                            margin: '0 auto',
                            overflow: 'hidden',
                        }}
                    ></div>
                </div>
            </div>
        </div>

    );
};

export default ServicesArea;
