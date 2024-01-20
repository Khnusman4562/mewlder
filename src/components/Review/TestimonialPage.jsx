import React from 'react';
import '../comp_css/TestimonialPage.css'; // Import your CSS file

function TestimonialPage() {
    const testimonials = [
        {
            service: 'Iron Gate Fabrication',
            name: 'Rajesh Kumar',
            comment: 'I had an iron gate fabricated for my property, and the craftsmanship was exceptional. Highly recommended!',
        },
        {
            service: 'Iron Gate Fabrication',
            name: 'Priya Patel',
            comment: 'The iron gate they fabricated for my home added both security and beauty to my property. Good work!',
        },
        {
            service: 'Iron Gate Fabrication',
            name: 'Amit Singh',
            comment: 'The iron gate they fabricated for my home added both security and beauty to my property. Good work!',
        },
        {
            service: 'Grill Fabrication',
            name: 'Neha Sharma',
            comment: 'I had a grill fabricated for my balcony, and it\'s both functional and visually appealing. Great service!',
        },
        {
            service: 'Grill Fabrication',
            name: 'Sanjay Verma',
            comment: 'The custom grill fabrication for my outdoor kitchen turned out fantastic. Good workmanship!',
        },
        {
            service: 'Grill Fabrication',
            name: 'Preeti Joshi',
            comment: 'The grill fabrication for my patio was done promptly and met my expectations. Good job!',
        },
        {
            service: 'Shutter Installation',
            name: 'Kishore Patel',
            comment: 'I needed shutters installed for my shop, and they did a solid job. Satisfied with the service!',
        },
        {
            service: 'Shutter Installation',
            name: 'Nitin Patel',
            comment: 'The shutter installation was smooth, and the shutters are of high quality. Very satisfied!',
        },
        {
            service: 'Shutter Installation',
            name: 'Rajesh Shah',
            comment: 'I\'m highly satisfied with the shutter installation service. The team was professional and efficient!',
        },
        {
            service: 'Roofing Shed Fabrication',
            name: 'Amit Joshi',
            comment: 'The roofing shed fabrication for my warehouse was excellent. It provides perfect shelter for my goods.',
        },
        {
            service: 'Roofing Shed Fabrication',
            name: 'Meera Desai',
            comment: 'I had a roofing shed fabricated for my backyard, and it looks great. They did an awesome job!',
        },
        {
            service: 'Roofing Shed Fabrication',
            name: 'Hemant Shah',
            comment: 'The roofing shed installation was done efficiently and at a reasonable cost. Happy with the outcome!',
        },
        {
            service: 'Stair Fabrication',
            name: 'Swati Patel',
            comment: 'The custom stair fabrication for my home is beautiful and sturdy. It adds elegance to my house.',
        },
        {
            service: 'Stair Fabrication',
            name: 'Rahul Gupta',
            comment: `I'm impressed with the stair fabrication work.It was completed on time and with attention to detail.`,
        },
        {
            service: 'Stair Fabrication',
            name: 'Sneha Sharma',
            comment: 'The new staircase they fabricated for my office building is both functional and attractive. Great job!',
        },
        {
            service: 'Railing Fabrication',
            name: 'Ankit Patel',
            comment: 'I had railings fabricated for my balcony, and they turned out beautifully. The craftsmanship is top-notch!',
        },
        {
            service: 'Railing Fabrication',
            name: 'Riya Singh',
            comment: 'The railing fabrication for my terrace is perfect. It enhances safety and looks great. Highly recommended!',
        },
        {
            service: 'Railing Fabrication',
            name: 'Aarav Deshmukh',
            comment: `I'm satisfied with the railing installation.The team did a great job, and the result is impressive.`,
        },
        {
            service: 'Weld Repairing for Metal Fabrication',
            name: 'Manish Yadav',
            comment: 'I needed weld repairing for my metal grill and shutter, and they fixed it effectively. Good service!',
        },
        {
            service: 'Weld Repairing for Metal Fabrication',
            name: 'Roshni Sharma',
            comment: 'The weld repairing work was completed on time and restored the integrity of my metal fixtures. Happy with the results!',
        },
        {
            service: 'Weld Repairing for Metal Fabrication',
            name: 'Ajay Verma',
            comment: `I'm satisfied with the weld repairing service.They addressed the issues promptly and professionally.`,
        },
    ];

    // Group testimonials by service
    const groupedTestimonials = {};
    testimonials.forEach((testimonial) => {
        if (!groupedTestimonials[testimonial.service]) {
            groupedTestimonials[testimonial.service] = [];
        }
        groupedTestimonials[testimonial.service].push(testimonial);
    });

    return (
        <div className="container " style={{ position: 'relative', top: '5rem' }}>

            <h2>Customer Testimonials for Metal Fabrication Services</h2>
            {Object.keys(groupedTestimonials).map((service, index) => (
                <div key={index} className="service-container">
                    <h2 className='text-light'>{service}</h2>
                    {groupedTestimonials[service].map((testimonial, i) => (
                        <div key={i} className="testimonial">
                            <p className="comment">{testimonial.comment}</p>
                            <p className="name">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TestimonialPage;
