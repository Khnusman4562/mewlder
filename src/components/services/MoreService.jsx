import React from 'react';
import './subServices/cardCss/MoreServiceComponent.css';
import ServicesArea from '../Home/ServicesArea';

function MoreService() {
    const services = [
        {
            title: 'Iron Table',
            description: 'High-quality iron tables for various purposes.',
            iconClass: 'fa fa-table fa-2x', // Larger Font Awesome table icon
            link: '/contact', // Replace with the actual link
        },
        {
            title: 'Stool',
            description: 'Sturdy and durable stools for home and commercial use.',
            iconClass: 'fa fa-chair fa-2x', // Larger Font Awesome chair icon
            link: '/contact', // Replace with the actual link
        },
        {
            title: 'Washing Machine Stand',
            description: 'Customized stands to support your washing machine.',
            iconClass: 'fa fa-wrench fa-2x', // Larger Font Awesome wrench icon
            link: '/contact', // Replace with the actual link
        },
        {
            title: 'Shed on Grill',
            description: 'Sheds designed to fit over your grill for added protection.',
            iconClass: 'fa fa-building fa-2x', // Larger Font Awesome building icon
            link: '/contact', // Replace with the actual link
        },
        {
            title: 'Brackets',
            description: 'Heavy-duty brackets for various applications.',
            iconClass: 'fa fa-code fa-2x', // Larger Font Awesome code icon
            link: '/contact', // Replace with the actual link
        },
        {
            title: 'Structure Welding',
            description: 'Professional welding services for structural projects.',
            iconClass: 'fa fa-cogs fa-2x', // Larger Font Awesome cogs icon
            link: '/contact', // Replace with the actual link
        },
        {
            title: 'Quantity Work',
            description: "Bulk welding and fabrication work, including gutter ducts with grills and plates, as well as other large-scale metalwork.",
            iconClass: 'fa fa-balance-scale fa-2x', // Larger Font Awesome balance-scale icon
            link: '/contact', // Replace with the actual link
        },
        {
            title: 'School Table',
            description: 'Tables specially designed for school use.',
            iconClass: 'fa fa-graduation-cap fa-2x', // Larger Font Awesome graduation-cap icon
            link: '/contact', // Replace with the actual link
        },
        {
            title: 'Steel Pipe in Grill Clothes Drying ',
            description: 'Sturdy clothes drying  steel pipes embedded in grill for efficient drying.',
            iconClass: 'fa fa-tshirt fa-2x', // Larger Font Awesome tshirt icon
            link: '/contact', // Replace with the actual link
        },
        {
            title: 'Contact Us',
            description: 'Need custom metal fabrication or have specific requirements? Contact us for personalized metalwork services.',
            iconClass: 'fa fa-phone fa-2x', // Larger Font Awesome phone icon
            link: '/contact', // Replace with the actual link
        },
    ];

    return (
        <div className=' text-center' style={{ position: 'relative', top: '5rem' }}>
            <div className="container my-2">
                <h2>More Services</h2>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-4 mx-auto"> {/* Center the column */}
                            <div className="service-card custom-h ">
                                <a href={service.link} className="service-link text-decoration-none text-dark"> {/* Added className="service-link" */}
                                    <i className={service.iconClass} aria-hidden="true"></i>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
                <div>
                    <ServicesArea />
                </div>
            </div>
        </div>
    );
}

export default MoreService;
