// RepairingInclude.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './RepairingInclude.css'; // Import the CSS file

const RepairingInclude = () => {
    return (
        <div className='threeD '>
            <h5 className='note '>What's Included</h5>
            <div className="repairing-container">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" className="icon_include" />
                <p>Accurate inspection followed by repair quotation</p>
            </div>

            {/* <div className="repairing-container">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" className="icon_include" />
                <p>Get up to 100 days warranty</p>
            </div> */}

            <div className="repairing-container">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" className="icon_include" />
                <p>High-quality parts and tools used in repairs</p>
            </div>



            {/* Additional points */}
            <div className="repairing-container">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" className="icon_include" />
                <p>Transparent pricing with detailed breakdown</p>
            </div>


            <div className="repairing-container">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" className="icon_include" />
                <p>Final checks</p>
            </div>


            <div >
                <h5 className='note'>Note</h5>
                <p className="note-container">

                    A ladder or stool is not carried by the welder; please arrange one if the work involves heights.
                </p>

            </div>
        </div>
    );
};

export default RepairingInclude;
