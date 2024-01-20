import React from 'react';
import { Link } from 'react-router-dom';
import ServicesArea from '../Home/ServicesArea';
import FabricationProcess from './subServices/FabricationProcess';
import RecentProject from '../Home/RecentProject';
import '../comp_css/heading.css';
import GrillCard from './subServices/GrillCard';

const GrillFabrication = () => {
    // Define an array of slide data
    const slides = [
        {
            id: 1,
            captionBefore: "Box Grill",
            imageBefore: '/images/recent/grill/gr1.jpg',
        },
        {
            id: 2,
            captionBefore: "Box Grill With Shed",
            imageBefore: '/images/recent/grill/gr2.jpg',
        },
        {
            id: 3,
            captionBefore: "Plane Grill",
            imageBefore: '/images/recent/grill/gr3.jpg',
        },
        {
            id: 4,
            captionBefore: "decorative window Grill",
            imageBefore: '/images/recent/grill/gr4.jpg',
        },
        {
            id: 5,
            captionBefore: "box grill Grill",
            imageBefore: '/images/recent/grill/gr5.jpg',
        },
        {
            id: 6,
            captionBefore: "box grill Grill",
            imageBefore: '/images/recent/grill/gr6.jpg',
        },
        {
            id: 7,
            captionBefore: "Plane Grill",
            imageBefore: '/images/recent/grill/gr7.jpg',
        },
        {
            id: 8,
            captionBefore: "window Grill",
            imageBefore: '/images/recent/grill/gr8.jpg',
        },
        {
            id: 9,
            captionBefore: "decorative Plane Grill",
            imageBefore: '/images/recent/grill/gr9.jpg',
        },
        {
            id: 10,
            captionBefore: "shed Grill",
            imageBefore: '/images/recent/grill/gr10.jpg',
        },
        // Add more slide data here
    ];
    return (
        <div className="container bg-light " style={{ position: 'relative', top: '5rem' }}>
            <h2 className='shadow-heading'>Custom Metal Grill Fabrication</h2>
            <hr />
            <div>
                <h2>Recent project</h2>
                <RecentProject slides={slides} />
            </div>
            <hr />

            <GrillCard />
            <hr />
            <div className="bg-white ">
                <h2 className="py-2 heading-3d">Client Testimonials</h2>
                <div className="card-deck">

                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Our metal grill is a true work of art. Thank you for bringing our vision to life!"</p>
                            <p className="card-text"><em>- Meera Desai</em></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"The elegant design of our metal grill has transformed our space. Exceptional craftsmanship!"</p>
                            <p className="card-text"><em>- Rahul Choudhary</em></p>
                        </div>
                    </div>
                </div>
            </div>






            <div className="threeD my-2 pb-2 ">
                <h2 className="py-2 heading-3d" >Request a Tailored Quote</h2>
                <p>Experience the realization of your vision. Request a personalized quote for your exceptional metal grill project:</p>
                <Link to="/quote" className="newbtn">Request a Quote</Link>
            </div>
            <div>
                <FabricationProcess />
            </div>
            <div>
                <ServicesArea />
            </div>
        </div>
    );
};

export default GrillFabrication;
