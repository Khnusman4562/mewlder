import React from 'react';
import { Link } from 'react-router-dom';
import ServicesArea from '../Home/ServicesArea';
import RecentProject from '../Home/RecentProject';
import FabricationProcess from './subServices/FabricationProcess';
import ShedCard from './subServices/ShedCard';
import '../comp_css/heading.css';

const RoofingShedFabrication = () => {
    const slides = [
        {
            id: 1,
            captionBefore: "Roofing Shed",
            imageBefore: '/images/recent/shed/sh1.jpg',
        },
        {
            id: 2,
            captionBefore: "Roofing Shed",
            imageBefore: '/images/recent/shed/sh2.jpg',
        },
        {
            id: 3,
            captionBefore: "Roofing Shed",
            imageBefore: '/images/recent/shed/sh3.jpg',
        },
        {
            id: 4,
            captionBefore: "Roofing Shed On Grill",
            imageBefore: '/images/recent/shed/sh4.jpg',
        },
        {
            id: 5,
            captionBefore: "Roofing Shed",
            imageBefore: '/images/recent/shed/sh6.jpg',
        },



        // Add more slide data here
    ];
    return (
        <div className="container bg-light " style={{ position: 'relative', top: '5rem' }}>
            <h2 className='shadow-heading'>Custom Roofing Shed Fabrication</h2>
            <hr />
            <div>
                <h2>Recent project</h2>

                <RecentProject slides={slides} />
            </div>
            <hr />

            <ShedCard />

            <hr />
            <div className="bg-white  mt-5">
                <h2 className="py-2 heading-3d">Client Testimonials</h2>
                <div className="card-deck">
                    {/* Testimonials for roofing shed services */}
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">Modern shed, expert craftsmanship, perfect blend of durability and style</p>
                            <p className="card-text"><em>- Rajesh</em></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text"> Outstanding industrial sheds, top-notch protection, long-lasting durability, excellent results.</p>
                            <p className="card-text"><em>- Suresh Kumar</em></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">Transformed outdoor space, enhanced functionality, unique aesthetic touch, commendable professionalism and detail.</p>
                            <p className="card-text"><em>- Pooja Sharma</em></p>
                        </div>
                    </div>
                    {/* End of testimonials for roofing shed services */}
                </div>
            </div>



            <div className="threeD my-2 pb-2 ">
                <h2 className="py-2 heading-3d">Request a Tailored Quote</h2>
                <p>Ready to get started? Request a personalized quote for your custom roofing shed project:</p>
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

export default RoofingShedFabrication;
