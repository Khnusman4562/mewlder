import React from 'react';
import { Link } from 'react-router-dom';
import ServicesArea from '../Home/ServicesArea';
import RecentProject from '../Home/RecentProject';
import ShutterCard from './subServices/ShutterCard';
import FabricationProcess from './subServices/FabricationProcess';
import '../comp_css/heading.css';

const ShutterFabrication = () => {
    const slides = [
        {
            id: 1,
            captionBefore: "rolling shutter",
            imageBefore: '/images/recent/shutter/st1.jpg',
        },
        {
            id: 2,
            captionBefore: "collapsible,gear shutter",
            imageBefore: '/images/recent/shutter/st2.jpg',
        },
        {
            id: 3,
            captionBefore: "collapsible shutter",
            imageBefore: '/images/recent/shutter/st3.jpg',
        },
        {
            id: 4,
            captionBefore: "collapsible shutter",
            imageBefore: '/images/recent/shutter/st4.jpg',
        },
        {
            id: 5,
            captionBefore: "collapsible shutter",
            imageBefore: '/images/recent/shutter/st5.jpg',
        },
        {
            id: 6,
            captionBefore: "collapsible shutter",
            imageBefore: '/images/recent/shutter/st8.jpg',
        },



        // Add more slide data here
    ];
    return (
        <div className="container bg-light " style={{ position: 'relative', top: '5rem' }}>
            <h2 className='shadow-heading'>Custom Shutter Fabrication</h2>
            <hr />
            <div>
                <h2>Recent project</h2>

                <RecentProject slides={slides} />
            </div>

            <hr />
            <ShutterCard />

            <hr />

            <div className="bg-white ">
                <h2 className="py-2 heading-3d">Client Testimonials</h2>
                <div className="card-deck">
                    {/* Testimonials for shutter services */}
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"The rolling shutter you provided for our store is excellent. It adds an extra layer of security to our business."</p>
                            <p className="card-text"><em>- Rajesh Kumar</em></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"The manual gear shutter is so easy to operate, and it looks great at our hospital. It gives a genuine and professional appearance."</p>
                            <p className="card-text"><em>- Dr. Priya Sharma</em></p>
                        </div>

                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"The channel shutter is perfect for our industrial space. It provides durability and functionality."</p>
                            <p className="card-text"><em>- Sanjay Patel</em></p>
                        </div>
                    </div>
                    {/* End of testimonials for shutter services */}
                </div>
            </div>



            <div className="threeD my-2 pb-2 ">

                <h2 className="py-2 heading-3d">Request a Tailored Quote</h2>
                <p>Ready to get started? Request a personalized quote for your custom shutter project:</p>
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

export default ShutterFabrication;
