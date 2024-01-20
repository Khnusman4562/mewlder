import React from 'react';
import Card from './Card';

const HomeServices = () => {
    const cardsData = [
        { title: 'Gate & Safety door', image: '/images/icon/gate.jpg', link: '/gate', description: 'Click to explore main entrance, single door, double door gates, and more for your entryway transformation' },

        { title: 'Grill', image: '/images/icon/grill.jpg', link: '/grill', description: "Discover window, plain, box, and shed grills for versatile home security and aesthetic appeal. Explore now!" },

        { title: 'Shutter', image: '/images/icon/shutter.jpg', link: '/shutter', description: "Explore rolling, gear, collapsible shutters, and expert shutter repair services for enhanced security and convenience." },

        { title: 'Channel gate', image: '/images/icon/channel_gate.jpg', link: '/gate', description: "Click to explore main entrance gate and Channel gate, and more for your entryway transformation" },

        { title: 'Railing Fabrication', image: '/images/icon/railing.jpg', link: '/railing', description: "Elevate safety and style with railings for balconies, staircases, bridges, industrial areas, and beyond. Discover today!" },

        { title: 'roofing shed', image: '/images/icon/sheds.jpg', link: '/shed', description: "Explore versatile shed options: industrial, residential roofing, and sheds on grills for functional and stylish solutions." },

        { title: 'Staircase', image: '/images/icon/stair.jpg', link: '/stair', description: "Explore metal stairs, plain and steps, railed options, and more for safe and stylish indoor and outdoor ascents." },

        { title: 'More Service', image: '/images/icon/more.jpg', link: '/MoreService', description: "Explore additional services such as metal table, stool ,washing-machine-stand, sheds , grill , brackets, school table , and more" },
    ];

    return (
        <div className="m-2" style={{ overflow: "hidden" }}>
            <h2 > Our Services</h2>

            <div className="row row-cols-2 row-cols-md-4 ">
                {cardsData.map((card, index) => (
                    <div className="col mb-2" key={index}>
                        <Card title={card.title} image={card.image} link={card.link} description={card.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeServices;
