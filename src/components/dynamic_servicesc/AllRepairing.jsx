// AllRepairing.js
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './allrepairing.css';

function AllRepairing() {
    const boxData = [
        // Add data for each box here
        { id: 1, imageUrl: "/images/shutter_repairing/iconForSutter/gate/polycarbonate.jpg", title: "Gate Repairing", link: "/Repairing_work" },
        { id: 2, imageUrl: "/images/shutter_repairing/iconForSutter/gril_stair/grillrepairing.jpg", title: "Grill Repairing", link: "/Repairing_work" },
        { id: 3, imageUrl: "/images/shutter_repairing/iconForSutter/shutter/shutter_m_icon.jpg", title: "Shutter Repairing", link: "/Repairing_work" },
        { id: 4, imageUrl: "/images/shutter_repairing/iconForSutter/sheds/shed_m_icon2.jpg", title: "Shed Repairing", link: "/Repairing_work" },
        { id: 5, imageUrl: "/images/shutter_repairing/iconForSutter/gril_stair/stair.jpg", title: "Stair Repairing", link: "/Repairing_work" },
        { id: 6, imageUrl: "/images/shutter_repairing/iconForSutter/gril_stair/railing.jpg", title: "Railing Repairing", link: "/Repairing_work" },
        { id: 7, imageUrl: "/images/shutter_repairing/iconForSutter/gril_stair/painting_work.jpg", title: "Painting Work", link: "/Repairing_work" },
        { id: 8, imageUrl: "/images/shutter_repairing/iconForSutter/gril_stair/other_r.jpg", title: "Other Repairing", link: "/Repairing_work" },

        // ... Repeat for the remaining boxes
    ];

    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const isMobileDevice = window.innerWidth <= 767;
        setIsMobile(isMobileDevice);
    }, []);


    const handleScroll = (scrollOffset) => {
        const scrollBox = scrollRef.current;
        const newScrollLeft = scrollBox.scrollLeft + scrollOffset;

        scrollBox.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth', // Add smooth scrolling behavior
        });
    };

    return (
        <div className="image-scroll-container" style={{ position: 'relative', top: '' }}>
            <div className="image-scroll-box" ref={scrollRef}>
                {boxData.map((box) => (
                    <Link to={box.link} className="link" key={box.id}>
                        <div className="scroll-container">
                            <img
                                src={box.imageUrl}
                                alt={box.title}
                                className="scroll-image"
                            />
                        </div>
                        <div className="box-info">
                            <h3 className="title">{box.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Next and Previous Icons for laptops and tablets */}
            {!isMobile && (
                <div className="buttons-container">
                    <button className="arrow-button" onClick={() => handleScroll(-150)}>
                        <span>&#9665;</span>
                    </button>
                    <button className="arrow-button" onClick={() => handleScroll(150)}>
                        <span>&#9655;</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default AllRepairing;