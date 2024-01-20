import React from 'react';
import { Link } from 'react-router-dom';
import '../comp_css/Home_card.css';

const Card = ({ title, image, link, description }) => {
    const titleStyle = {
        color: 'black',
        fontSize: '14px',
        fontFamily: "",
        fontWeight: 'bold',
        marginTop: "5px",
        marginBottom: '7px',
    };

    // hgjhjhkj



    return (
        <div className="card-container h-100 threeD ">
            <div className="card-container-inner">

                <div className="card-image">
                    <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>
                        <img src={image} alt={title} style={{ width: '100%' }} />
                        <h5 className="card-title" style={titleStyle}>
                            {title}
                        </h5>
                    </Link>
                </div>
                <div className="card-description">
                    <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>

                        <p className="card-text">{description}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
