import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faTools, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../comp_css/button.css'; // Import the custom styles

const Buttons = () => {
    return (
        <div className=" pt-2">
            {/* <div className="d-grid col-5 mx-auto pt-2">
                <Link to="/repairing" className="btn newbtn  btn-warning" tabIndex="-1" role="button" aria-disabled="true">
                    <FontAwesomeIcon icon={faHammer} className="fa-icon" />
                    <span className="align- my-5">Repairing</span>
                </Link>
            </div> */}
            <div className="row  my-3 ">
                <Link to="/grill" className=" col-3 button4 mx-2 btn-light" tabIndex="-1" role="button" aria-disabled="true">
                    <div>
                        <FontAwesomeIcon icon={faTools} className="fa-icon me-" />
                    </div>
                    <span >Metal Grill</span>
                </Link>
                <Link to="/Repairing_work" className=" col-4 button4 mx-2 btn-light" tabIndex="-1" role="button" aria-disabled="true">
                    <div>
                        <FontAwesomeIcon icon={faHammer} className="fa-icon me-2" />
                    </div>
                    <span className="align-">Repairing</span>
                </Link>
                <Link to="/shutter" className="  button4 col-3 btn-light" tabIndex="-1" role="button" aria-disabled="true">
                    <div>
                        <FontAwesomeIcon icon={faShieldAlt} className="fa-icon me-2" />
                    </div>
                    <span className="align-">Shutter</span>
                </Link>
            </div>
        </div>
    );
};

export default Buttons;
