

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../comp_css/Navbar.css';
function Navbar() {
    const location = useLocation();
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    useEffect(() => {
        // Close the off-canvas menu when the route changes
        if (showOffcanvas) {
            setShowOffcanvas(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <nav className="navbar nav_height navbar-expand-lg fixed-top  " style={{ background: 'white' }}>
            <div className="container-fluid d-flex justify-content-between align-items-center  logo_center">
                <Link className="navbar-brand" to="/">
                    <img
                        src="images/logo.png"
                        alt="Me welder mewelder"
                        className="img-fluid logo_center black-logo " // Added a class for styling
                        style={{ width: '10rem', height: '3.5rem' }}
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setShowOffcanvas(!showOffcanvas)}
                    aria-expanded={showOffcanvas ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`offcanvas offcanvas-start${showOffcanvas ? ' show' : ''}`}
                    tabIndex="-1"
                    id="navbarNav"
                    style={{ width: '80%', height: '88%' }} // Set the desired width here
                >
                    <div className="offcanvas-header bg-dark height">
                        <Link className="navbar-brand" to="/">
                            <img
                                src="images/logo1.png"
                                alt="Mewelder"
                                className="img-fluid"
                                style={{ width: '9rem', height: '3.3=rem' }}


                            />
                        </Link>
                        <button
                            type="button"
                            className="btn-close text-reset  mx-2"
                            onClick={() => setShowOffcanvas(false)}
                            aria-label="Close"
                            style={{ backgroundColor: 'white' }}
                        ></button>
                    </div>
                    <div
                        className="offcanvas-body d-flex flex-column justify-content-between"
                        style={{ position: 'relative' }} // Update the background color and add 'position: relative'
                    >
                        <ul className="navbar-nav ">
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Services123
                                </Link>
                                <ul
                                    className="dropdown-menu threeD "
                                    aria-labelledby="navbarDropdownMenuLink"
                                    style={{ backgroundColor: 'white' }} // Change the background color to black
                                >
                                    <li>
                                        <Link className="dropdown-item " to="/gate" style={{ color: 'black' }}>
                                            Iron gate fabrication
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/grill" style={{ color: 'black' }}>
                                            Grill fabrication
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/shutter" style={{ color: 'black' }}>
                                            Shutter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/shed" style={{ color: 'black' }}>
                                            Roofing shed fabrication
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/stair" style={{ color: 'black' }}>
                                            Stair fabrication
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/Railing" style={{ color: 'black' }}>

                                            Railing fabrication
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/Repairing_work" style={{ color: 'black' }}>
                                            Repairing Work
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/MoreService" style={{ color: 'black' }}>
                                            More Service
                                        </Link>
                                    </li>


                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/ourwork"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Our Works
                                </Link>
                                <ul
                                    className="dropdown-menu threeD"
                                    aria-labelledby="navbarDropdownMenuLink"
                                    style={{ backgroundColor: 'white' }} // Change the background color to black
                                >
                                    {/* <li>
                                        <Link className="dropdown-item" to="/testimonial" style={{ color: 'black' }}>
                                            TESTIMONIALS

                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link className="dropdown-item" to="/Review" style={{ color: 'black' }}>
                                            REVIEWS

                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/Aboutus" >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/serviceArea" >
                                    Service Area
                                </Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="newbtn" to="/quote" style={{ color: 'black' }}>
                                    Free Estimate
                                </Link>
                            </li>
                        </ul>
                        <div
                            className="d-flex align-items-center justify-content-center" // Center the icons horizontally and vertically
                            style={{
                                position: 'absolute',
                                right: "34px",

                                bottom: '5px', // Adjust the distance from the bottom as needed
                                width: 'auto', // Ensure the icons span the full width
                            }}
                        >
                            <Link to="https://instagram.com/mewelder_com?igshid=NzZlODBkYWE4Ng==" className="text-black me-3">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </Link>
                            <Link to="https://api.whatsapp.com/send?phone=9372479517" className="text-black me-3">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </Link>

                            <Link to="https://facebook-link-here" className="text-black">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;

