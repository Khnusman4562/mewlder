import React, { useState } from 'react';
import ReviewForm from './ReviewForm'; // Import the ReviewForm component

const Review = () => {
    // Sample reviews data for testing
    const initialReviews = [
        { id: 1, text: 'Sample review 1' },
        { id: 2, text: 'Sample review 2' },
    ];

    const [reviews, setReviews] = useState(initialReviews);

    const addReview = (newReview) => {
        setReviews([...reviews, newReview]);
    };

    return (
        <div>
            <h1>Reviews</h1>
            <ReviewForm addReview={addReview} /> {/* Render the ReviewForm component */}

            {/* Display the list of reviews */}
            <div>
                <h2>Customer Reviews</h2>
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>{review.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Review;
