// src/components/Common/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();

    useEffect(
        () => {
            // Smoothly scroll to the top when the component is mounted or location.pathname changes
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Add smooth scrolling behavior
            });
        }, [location.pathname]
    );

    return null;
}

export default ScrollToTop;
