import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
    const images = [
        { path: 'm1.jpg', link: '/gate' },
        { path: 'm2.jpg', link: '/repairing' },
        { path: 'm3.jpg', link: '/shutter' },
        { path: 'm4.jpg', link: '/shed' },
        { path: 'm5.jpg', link: '/stair' },
        { path: 'm6.jpg', link: '/grill' },
        { path: 'm7.jpg', link: '/railing' }
    ];

    return (
        <div style={{ maxWidth: '100%', margin: '0 auto', position: 'relative', top: '4rem' }}>
            <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <Link to={image.link}>
                            <img
                                src={process.env.PUBLIC_URL + `/images/final/${image.path}`}
                                alt={`Slide ${index + 1}`}
                                style={{ maxHeight: '400px', width: '100%' }}
                            />
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MyCarousel;
