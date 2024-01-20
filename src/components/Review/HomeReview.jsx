import React from 'react';
import '../comp_css/ReviewComponent.css'; // Import your CSS file
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'; // Import the Bootstrap Carousel component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Choose an appropriate icon

function HomeReview() {
    const reviews = [
        {
            name: 'Rajesh Kumar (Chembur)',
            rating: 5,
            comment: 'Outstanding work! The metal grill installation is top-notch.',
        },
        {
            name: 'Fatima Ahmed (Mumbai)',
            rating: 5,
            comment: `
            Installed a 10mm rod box grill with an 18-inch box; enhances security, cools room; highly satisfied. Thank you!`,
        },
        {
            name: 'Neha Sharma (Tilak Nagar)',
            rating: 5,
            comment: 'They did a fantastic job with the stair construction. Highly recommended!',
        },
        {
            name: 'Sanjay Verma (Vashi)',
            rating: 4,
            comment: 'I liked the railing installation. Good value for money.',
        },
        // Add more reviews as needed
    ];
    // Inside your HomeReview component
    // ...
    // Inside your HomeReview component
    // ...

    return (
        <div className='container mt-2'>
            <h2>Customer Reviews </h2>
            <Carousel indicators={false}>
                {reviews.map((review, index) => (
                    <Carousel.Item key={index} className="review threeD custom-card">
                        <div className="review-details">
                            <div className="circle">
                                <FontAwesomeIcon icon={faUser} className="icon" />
                            </div>
                            <div className="name-rating">
                                <p className="review-name">
                                    <span className="name">{review.name}</span>
                                </p>
                                <p className="right threeD">
                                    <span className="rating">{review.rating}★</span>
                                </p>
                            </div>
                        </div>
                        <p className="review-text">{review.comment}</p>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className='container mt-2'>
                <Link to="/Review" className=' newbtn'>Review Us</Link>
            </div>
        </div>
    );




}

export default HomeReview;