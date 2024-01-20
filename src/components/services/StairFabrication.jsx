import React from 'react';
import { Link } from 'react-router-dom';
import ServicesArea from '../Home/ServicesArea';
import RecentProject from '../Home/RecentProject';

import FabricationProcess from './subServices/FabricationProcess';
import StairCard from './subServices/StairCard';
import '../comp_css/heading.css';

const StairFabrication = () => {
    const slides = [
        {
            id: 1,
            captionBefore: "step stair with railing",
            imageBefore: '/images/recent/stair/ld1.jpg',
        },
        {
            id: 2,
            captionBefore: "plane stair with railing",
            imageBefore: '/images/recent/stair/ld2.jpg',
        },
        {
            id: 3,
            captionBefore: "step stair with railing",
            imageBefore: '/images/recent/stair/ld3.jpg',
        },
        {
            id: 4,
            captionBefore: "step stair with railing",
            imageBefore: '/images/recent/stair/ld4.jpg',
        },
        {
            id: 5,
            captionBefore: "step stair with railing",
            imageBefore: '/images/recent/stair/ld5.jpg',
        },
        {
            id: 6,
            captionBefore: "step stair with railing",
            imageBefore: '/images/recent/stair/ld6.jpg',
        },


        // Add more slide data here
    ];
    return (
        <div className="container-fluid bg-light " style={{ position: 'relative', top: '5rem' }}>
            <h2 className='shadow-heading'>Custom Stair Fabrication</h2>
            <hr />
            <div>
                <h2>Recent project</h2>

                <RecentProject slides={slides} />
            </div>
            <hr />

            <StairCard />
            <hr />

            <div className="bg-white ">
                <h2 className="py-2 heading-3d">Client Testimonials</h2>
                <div className="card-deck">
                    {/* Testimonials for stair fabrication services */}
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"The metal angle stair you provided is sturdy and stylish. It fits perfectly in our industrial setting."</p>
                            <p className="card-text"><em>- Arjun Mehta</em></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"The step stair design you created is a marvel. It adds a unique touch to our office space."</p>
                            <p className="card-text"><em>- Priya Singh</em></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"We love our new plain metal stair. It's both functional and modern, just what we needed."</p>
                            <p className="card-text"><em>- Rajat Kapoor</em></p>
                        </div>
                    </div>
                    {/* End of testimonials for stair fabrication services */}
                </div>
            </div>



            <div className="threeD my-2 pb-2 ">

                <h2 className="py-2 heading-3d">Request a Tailored Quote</h2>
                <p>Ready to get started? Request a personalized quote for your custom metal stair fabrication project:</p>
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

export default StairFabrication;
