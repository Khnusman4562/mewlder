import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../comp_css/ReviewComponent.css';
import ReviewForm from './ReviewForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ReviewComponent = () => {
    const [reviews, setReviews] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);

    const fetchReviews = async () => {
        try {
            const response = await Axios.get('http://localhost/php-server/routes/reviewRoute.php');
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleFormSubmit = async (formData) => {
        try {
            const response = await Axios.post('http://localhost/php-server/routes/reviewRoute.php', formData);
            const newReview = response.data;
            const updatedReviews = [...reviews, newReview];
            setReviews(updatedReviews);
            setSuccessMessage('Review submitted successfully');
            setIsSuccessVisible(true);

            setTimeout(() => {
                setIsSuccessVisible(false);
            }, 3000);

            // Fetch the updated reviews after submitting the form
            fetchReviews();
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const handleDeleteReview = async (id) => {
        try {
            await Axios.delete(`http://localhost/php-server/routes/reviewRoute.php/${id}`);
            const updatedReviews = reviews.filter((review) => review.id !== id);
            setReviews(updatedReviews);
        } catch (error) {
            console.error('Error deleting review:', error);
        }
    };

    return (
        <div className="container" style={{ position: 'relative', top: '5rem', height: "auto" }}>
            <h2>Review page</h2>

            <ReviewForm onSubmit={handleFormSubmit} />
            {isSuccessVisible && (
                <div className="alert alert-success">
                    {successMessage}
                    <button
                        className="btn btn-success"
                        style={{ float: 'right' }}
                        onClick={() => setIsSuccessVisible(false)}
                    >
                        OK
                    </button>
                </div>
            )}
            <h2 className="mt-3">Customers' Reviews</h2>
            {Array.isArray(reviews) && reviews.map((review, index) => (
                <div key={index} className="review custom-card">
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
                    <p className="review-text">{review.text}</p>
                    <div onClick={() => handleDeleteReview(review.id)}></div>
                </div>
            ))}
        </div>
    );
};

export default ReviewComponent;
