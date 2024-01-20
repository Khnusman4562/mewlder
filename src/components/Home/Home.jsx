import React from 'react';
import Buttons from './Buttons';
import HomeServices from './HomeServices';
import RecentProject from './RecentProject';
import FabricationProcess from '../services/subServices/FabricationProcess';
import ServicesArea from './ServicesArea';
import HomeReview from '../Review/HomeReview';
import AllRepairing from '../dynamic_servicesc/AllRepairing';

import FAQ from '../Common/FAQ';
import '../comp_css/heading.css';


const Home = () => {
    // Define an array of slide data
    const slides = [
        {
            id: 1,
            captionBefore: "main entrance Gate",
            imageBefore: '/images/recent/gate/g7.jpg',
        },
        {
            id: 2,
            captionBefore: "double door gate",
            imageBefore: '/images/recent/gate/g10.jpg',
        },
        {
            id: 3,
            captionBefore: "Railing",
            imageBefore: '/images/recent/railing/r3.jpg',
        },
        {
            id: 4,
            captionBefore: "Box Grill with shed",
            imageBefore: '/images/recent/grill/gr2.jpg',
        },
        {
            id: 5,
            captionBefore: "single door gate",
            imageBefore: '/images/recent/gate/g2.jpg',
        },
        {
            id: 6,
            captionBefore: "collapsible Gate",
            imageBefore: '/images/recent/gate/g5.jpg',
        },
        {
            id: 7,
            captionBefore: "step stair",
            imageBefore: '/images/recent/stair/ld1.jpg',
        },
        {
            id: 8,
            captionBefore: "collapsible shutter",
            imageBefore: '/images/recent/shutter/st3.jpg',
        },
        {
            id: 9,
            captionBefore: "box grill",
            imageBefore: '/images/recent/grill/gr1.jpg',
        },
        // Add more slide data here
    ];

    return (
        <div className='container' style={{ marginTop: '4rem', background: "#f5f5f5", color: "#333333" }}>
            <Buttons />
            <hr />
            <div>

                <h2 className="m-2 pb-2 heading-3d"> Our Recent Project </h2>

                {/* Pass the slides prop to the RecentProject component */}
                <RecentProject slides={slides} />
            </div>
            <hr />
            {/* // Inside your Home component */}
            <div className=" ">
                <HomeServices />
            </div>
            <hr />
            <div>
                <h2 >Repairing Work</h2>

                <AllRepairing />
            </div>
            <hr />

            <div>
                <h2 >How It Works</h2>

                <FabricationProcess />
            </div>
            <div className='  mb-5'>
                <ServicesArea />

            </div>
            <div className='container'>

                <FAQ />
            </div>

            {/* Apply modified styles to ServicesArea */}
            <div className=' ' >
                <HomeReview />
            </div>




        </div>
    );


};

export default Home;
