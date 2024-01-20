import React from 'react';
import { Link } from 'react-router-dom';
import ServicesArea from '../Home/ServicesArea';
import RecentProject from '../Home/RecentProject';
import FabricationProcess from './subServices/FabricationProcess';
import RailingCard from './subServices/RailingCard';
import '../comp_css/heading.css';

const RailingFabrication = () => {
    const slides = [
        {
            id: 1,
            captionBefore: "Balcony & Stair Railing",
            imageBefore: '/images/recent/railing/r1.jpg',
        },
        {
            id: 2,
            captionBefore: "Balcony Railing",
            imageBefore: '/images/recent/railing/r2.jpg',
        },
        {
            id: 3,
            captionBefore: "Balcony Railing",
            imageBefore: '/images/recent/railing/r3.jpg',
        },
        {
            id: 4,
            captionBefore: "Stair Railing",
            imageBefore: '/images/recent/railing/r4.jpg',
        },
        {
            id: 5,
            captionBefore: "Railing",
            imageBefore: '/images/recent/railing/r5.jpg',
        },
        {
            id: 6,
            captionBefore: "Bridge Railing",
            imageBefore: '/images/recent/railing/r6.jpg',
        },

        // Add more slide data here
    ];
    return (
        <div className="container bg-light " style={{ position: 'relative', top: '5rem' }}>
            <h2 className='shadow-heading'>Custom Railing Fabrication</h2>
            <hr />
            <div>
                <h2>Recent project</h2>

                <RecentProject slides={slides} />
            </div>
            <hr />

            <RailingCard />
            <hr />

            <div className="bg-white ">
                <h2 className="py-2 ">Client Testimonials</h2>
                <div className="card-deck">
                    {/* Testimonials for railing fabrication services */}
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"The stair railing you provided is not only functional but also adds elegance to our home. Great work!"</p>
                            <p className="card-text"><em>- Alok Sharma</em></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Our balcony railings look fantastic. The use of metal angle and pipes ensures durability and style."</p>
                            <p className="card-text"><em>- Priya Gupta</em></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"The roof railings you designed are just what we needed for safety and aesthetics. Thank you!"</p>
                            <p className="card-text"><em>- Rajat Verma</em></p>
                        </div>
                    </div>
                    {/* End of testimonials for railing fabrication services */}
                </div>
            </div>

            <div className="threeD my-2 pb-2 ">
                <h2 className="py-2 heading-3d">Request a Tailored Quote</h2>
                <p>Ready to get started? Request a personalized quote for your custom railing fabrication project:</p>
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

export default RailingFabrication;
