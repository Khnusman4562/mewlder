import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../comp_css/carousel.css'; // Your custom CSS file for carousel styles

const RecentProject = ({ slides }) => {
    const settings = {
        infinite: true,
        centerPadding: '0',
        speed: 300,
        autoplay: false,
        autoplaySpeed: 8000,
        slidesToShow: 2, // Show only one slide at a time
        slidesToScroll: 1,
        dots: true, // Show dots
        prevArrow: false, // Hide previous arrow
        nextArrow: false, // Hide next arrow
    };

    return (
        <div className="carousel-container ">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={slide.id}>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex justify-content-center " style={{ padding: '2px' }}>
                                <div className="pb-5 mheight ">

                                    <img
                                        src={slide.imageBefore}
                                        className="card-img-top  img-fluid h-100"
                                        alt={`Before ${index + 1}`}
                                    />
                                    <label>{slide.captionBefore}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RecentProject;
