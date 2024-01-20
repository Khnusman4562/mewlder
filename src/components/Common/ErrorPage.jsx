import React, { useEffect } from 'react';
import '../comp_css/ErrorPage.css'; // Your CSS file for styling

const ErrorPage = () => {
    useEffect(() => {
        // Redirect to the home page after 5 seconds
        const redirectTimer = setTimeout(() => {
            window.location.href = '/'; // Redirect to the home page
        }, 50000);

        // Clean up the timer on component unmount
        return () => clearTimeout(redirectTimer);
    }, []);

    const goToHome = () => {
        window.location.href = '/'; // Redirect to the home page
    };

    return (
        <div className="error-page ">
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but the page you are looking for does not exist.</p>
            <p>Redirecting to the home page...</p>
            <button className='newbtn' onClick={goToHome}>Go to Home</button>
        </div>
    );
};

export default ErrorPage;
