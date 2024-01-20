import React, { useState } from 'react';
import '../comp_css/Reviewform.css';

const ReviewForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        rating: 5,
        text: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', rating: 5, text: '' });
    };

    const handleTextChange = (e) => {
        const inputText = e.target.value;

        // Limit text to 100 characters
        const truncatedText = inputText.slice(0, 150);

        setFormData({ ...formData, text: truncatedText });
    };

    return (
        <div className="review-form">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Enter Your Name (Area)"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <select
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    >
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Comment:</label>
                    <textarea
                        id="text"
                        name="text"
                        value={formData.text}
                        onChange={handleTextChange}
                        maxLength={100} // Set the maximum length
                        rows="4"
                        required
                        placeholder="Please share your professional review here "
                    ></textarea>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
