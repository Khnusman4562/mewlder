import React from 'react';
import { Link } from 'react-router-dom';
import ServicesArea from '../Home/ServicesArea';
import RecentProject from '../Home/RecentProject';
import GateCard from './subServices/GateCard';

import FabricationProcess from './subServices/FabricationProcess';
import '../comp_css/heading.css';


const IronGateFabrication = () => {
    const slides = [
        {
            id: 1,
            captionBefore: "Single Door  Gate",
            imageBefore: '/images/recent/gate/g1.jpg',
        },
        {
            id: 2,
            captionBefore: "Double Door  Gate",
            imageBefore: '/images/recent/gate/g3.jpg',
        },
        {
            id: 3,
            captionBefore: "Collapsible Gate",
            imageBefore: '/images/recent/gate/g5.jpg',
        },
        {
            id: 4,
            captionBefore: "Double Door  Gate",
            imageBefore: '/images/recent/gate/g11.jpg',
        },
        {
            id: 5,
            captionBefore: "Main Entrance Gate",
            imageBefore: '/images/recent/gate/g7.jpg',
        },
        {
            id: 6,
            captionBefore: "Double Door  Gate",
            imageBefore: '/images/recent/gate/g9.jpg',
        },
        {
            id: 7,
            captionBefore: "Double Door Gate",
            imageBefore: '/images/recent/gate/g10.jpg',
        },
        {
            id: 8,
            captionBefore: "Main Gate",
            imageBefore: '/images/recent/gate/g8.jpg',
        },
        {
            id: 9,
            captionBefore: "Single Door angle Gate",
            imageBefore: '/images/recent/gate/g2.jpg',
        },

        // Add more slide data here
    ];
    return (
        <div className="container  bg-light " style={{ position: 'relative', top: '5rem' }}>
            <h2 className='shadow-heading'>Custom Metal Gate Fabrication</h2>

            <hr />
            <div>
                <h2>Recent project</h2>

                <RecentProject slides={slides} />
            </div>
            <hr />
            <div>
                <GateCard />
            </div>

            <hr />

            <div className="bg-white  ">
                <h2 className="py-2 ">Client Testimonials</h2>
                <div className="card-deck">

                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Our metal gate is not just secure but also a work of art. Fantastic job!"</p>
                            <p className="card-text"><em>- Sanjay Singh</em></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">"Impressed by the attention to detail. Our entrance is now a masterpiece."</p>
                            <p className="card-text"><em>- Ananya Gupta</em></p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="threeD my-2 pb-2">
                <h2 className="py-2 heading-3d" >Request a Tailored Quote</h2>
                <p>Experience the realization of your vision. Request a personalized quote for your exceptional metal gate or security door project:</p>
                <Link to="/quote" className="newbtn">Request a Quote</Link>
            </div>
            <div>
                <FabricationProcess />
            </div>
            <div >
                <ServicesArea />
            </div>
        </div>
    );
};

export default IronGateFabrication;