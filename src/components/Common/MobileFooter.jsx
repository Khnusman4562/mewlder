import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faShareSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../comp_css/Footer.css';
import { Link } from 'react-router-dom';

const MobileFooter = () => {
    const [showFooter, setShowFooter] = useState(true);

    const checkScrollPosition = () => {
        const scrollTop = window.scrollY;

        if (scrollTop === 0) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <footer className={`footer threeD  ${showFooter ? 'show' : ''}`}>
            <div className="container ">
                <div className="row ">
                    <div className="col">
                        <div className="contact-info call both_icon">
                            <Link to="mailto:info@mewelder.com">
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <div className='quotation_icon'>Email</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-info call phone">
                            <Link to="tel:9372479517" className='white_icon'>
                                <FontAwesomeIcon icon={faPhone} className="icon white_icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-info call both_icon">
                            <Link to="/quote">
                                <FontAwesomeIcon icon={faShareSquare} className="icon" />
                                <div className='quotation_icon'>Get Quote</div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MobileFooter;
