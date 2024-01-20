import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../repairing.css';

const ShutterRepairing = () => {
    const [services] = useState([
        {
            title: 'Shutter Spring Replacement',
            design: 'Click Service',
            image: '/images/shutter_repairing/iconForSutter/shutter/shutter_m_icon.jpg',
            paragraph: 'Expert service ensuring reliable shutter spring replacements for your convenience',
            options: [
                { name: 'Small Shutter Spring ₹800', image: '/images/shutter_repairing/iconForSutter/shutter/spring32.jpg', title: 'Small Shutter ₹800 ', price: 800 },
                { name: 'Medium Shutter Spring ₹1200', image: '/images/shutter_repairing/iconForSutter/shutter/spring42.jpg', title: 'Medium Shutter ₹1200 ', price: 1200 },
                { name: 'Gear Shutter Spring ₹1500', image: '/images/shutter_repairing/iconForSutter/shutter/spring52.jpg', title: 'Gear Shutter ₹1500 ', price: 1500 },
                { name: 'Shutter Other Works ', image: '/images/icon/shutter.jpg', title: 'Shutter Other Works', price: 0 },
                // Add other options with prices
            ],
        },
        {
            title: 'Shutter Lock Repairing',
            design: 'Click Services',
            image: '/images/shutter_repairing/iconForSutter/shutter/lock_m_icon.jpg',
            paragraph: 'Expert service ensuring reliable shutter lock replacement & repair for your convenience',
            options: [
                { name: 'Sm Lock Patti ₹500', image: '/images/shutter_repairing/iconForSutter/shutter/sm_lock.jpg', title: 'Sm Lock Patti ₹500', price: 500 },
                { name: 'Lg Lock Patti ₹600', image: '/images/shutter_repairing/iconForSutter/shutter/lock.jpg', title: 'Lg Lock Patti ₹600', price: 600 },
                { name: 'Key Lock Fitting', image: '/images/shutter_repairing/iconForSutter/shutter/key_lock.jpg', title: 'Key Lock Fitting ', price: 0 },
                { name: 'Shutter Lock Plate', image: '/images/shutter_repairing/iconForSutter/shutter/lockplate.jpg', title: 'Shutter Lock Plate ', price: 0 },
                { name: 'New Key Lock ₹3000', image: '/images/shutter_repairing/iconForSutter/shutter/key_lock2.jpg', title: 'New Key Lock ₹3000', price: 3000 },
                { name: 'Shutter Other Works', image: '/images/icon/shutter.jpg', title: 'Shutter Other Works', price: 0 },
            ],
        },
        {
            title: 'Shutter Other Part Replacement',
            design: 'Click Services',
            image: '/images/icon/shutter.jpg',
            paragraph: 'Expert service ensuring reliable shutter other part replacements for your convenience',
            options: [
                { name: 'Shutter Handle ₹500', image: '/images/shutter_repairing/iconForSutter/shutter/handle.jpg', title: 'Shutter Handle ₹500', price: 500 },
                { name: 'Shutter Curtain', image: '/images/shutter_repairing/iconForSutter/shutter/curtain.jpg', title: 'Shutter Curtain', price: 0 },
                { name: 'Shutter Cover', image: '/images/shutter_repairing/iconForSutter/shutter/cover.jpg', title: 'Shutter Cover', price: 0 },
                { name: 'Shutter Guide', image: '/images/shutter_repairing/iconForSutter/shutter/guide.jpg', title: 'Shutter Guide', price: 0 },

                { name: 'Shutter Stoper ₹500', image: '/images/shutter_repairing/iconForSutter/shutter/stoper.jpg', title: 'Shutter Stoper ₹500', price: 500 },
                { name: 'Shutter Other Works', image: '/images/icon/shutter.jpg', title: 'Shutter Other Works', price: 0 },
                // Add other options with prices
            ],
        },
        {
            title: 'Shutter Greasing And Painting ',
            design: ' Click Services',
            image: '/images/shutter_repairing/iconForSutter/shutter/s_paint.jpg',
            paragraph: 'Expert shutter greasing, painting, maintenance for reliable functionality, convenient solutions.',
            options: [
                { name: 'Shutter Greasing', image: '/images/shutter_repairing/iconForSutter/shutter/spring_repair.jpg', title: 'Shutter Greasing', price: 0 },
                { name: 'Shutter Painting', image: '/images/shutter_repairing/iconForSutter/shutter/s_paint.jpg', title: 'Shutter Painting', price: 0 },
                { name: 'Shutter Other Work', image: '/images/shutter_repairing/iconForSutter/shutter/other.jpg', title: 'Shutter Other Work', price: 0 },

                // Add other options with prices
            ],
        },
        // below are shes part 
        {
            title: 'Grill Shed Repairing & Replacement',
            design: 'Click Services',
            image: '/images/shutter_repairing/iconForSutter/sheds/shed_m_icon2.jpg',
            paragraph: 'Expert grill shed repair and replacement for durable, reliable solutions.',
            options: [
                { name: 'GI Sheet 0.5mm', image: '/images/shutter_repairing/iconForSutter/sheds/gi.jpg', title: 'GI Sheet 0.5mm', price: 0 },
                { name: 'GI Sheet 0.6mm', image: '/images/shutter_repairing/iconForSutter/sheds/gi.jpg', title: 'GI Sheet 0.6mm', price: 0 },
                { name: '0.5mm Aluminum Sheet', image: '/images/shutter_repairing/iconForSutter/sheds/aluminium.jpg', title: '0.5mm Aluminum Sheet', price: 0 },
                { name: 'Polycarbonate Sheet', image: '/images/shutter_repairing/iconForSutter/sheds/polycarbonate.jpg', title: 'Polycarbonate Sheet', price: 0 },
                { name: 'Shed Other Works', image: '/images/shutter_repairing/iconForSutter/sheds/shed_m_icon1.jpg', title: 'Shed Other Works', price: 0 },
                // Add other options with prices
            ],
        },
        // below are grill repairing part  
        {
            title: 'Grill Repairing And Painting',
            design: 'Click Services',
            image: '/images/shutter_repairing/iconForSutter/gril_stair/grill.jpg',
            paragraph: 'Professional grill repair and painting services for durable, vibrant results',
            options: [
                { name: 'Grill Resizing', image: '/images/shutter_repairing/iconForSutter/gril_stair/box_resize.jpg', title: 'Grill Resizing', price: 0 },
                { name: 'Grill Platform Repairing', image: '/images/shutter_repairing/iconForSutter/gril_stair/plateform_1.jpg', title: 'Platform Repairing', price: 0 },
                { name: 'Door in Grill', image: '/images/shutter_repairing/iconForSutter/gril_stair/door_in_grill.jpg', title: 'Door in Grill', price: 0 },
                { name: 'Grill Support Bracket', image: '/images/shutter_repairing/iconForSutter/gril_stair/bracket.jpg', title: 'Grill Support Bracket', price: 0 },
                { name: 'Grill Replacement', image: '/images/shutter_repairing/iconForSutter/gril_stair/grill.jpg', title: 'Grill Replacement', price: 0 },
                { name: 'Rat Mesh Gi', image: '/images/shutter_repairing/iconForSutter/gril_stair/rat_jali.jpg', title: 'Rat Mesh Gi', price: 0 },
                { name: 'Cloth Drying Pipe', image: '/images/shutter_repairing/iconForSutter/gril_stair/pipe.jpg', title: 'Cloth Drying Pipe', price: 0 },
                { name: 'Cloth Drying bracket', image: '/images/shutter_repairing/iconForSutter/gril_stair/dry_brakcet.jpg', title: 'Cloth Drying bracket', price: 0 },
                { name: 'Grill Painting', image: '/images/shutter_repairing/iconForSutter/gril_stair/painting_work.jpg', title: 'Grill Painting', price: 0 },
                { name: 'Grill Other Works', image: '/images/shutter_repairing/iconForSutter/gril_stair/grill.jpg', title: 'Grill Other Works', price: 0 },
                // Add other options with prices
            ],
        },
        {
            title: 'Stair & Railing Repairing ',
            design: 'Click Services',
            image: '/images/shutter_repairing/iconForSutter/gril_stair/railing.jpg',
            paragraph: 'Expert stair and railing repair for reliable and stylish solutions.',
            options: [
                { name: 'Stair Repairing', image: '/images/shutter_repairing/iconForSutter/gril_stair/stair.jpg', title: 'Stair Repairing', price: 0 },
                { name: 'Railing Repairing', image: '/images/shutter_repairing/iconForSutter/gril_stair/railing.jpg', title: 'Railing Repairing', price: 0 },
                { name: 'Step Replacement', image: '/images/shutter_repairing/iconForSutter/gril_stair/step.jpg', title: 'Step Replacement', price: 0 },
                { name: 'Adding Railing', image: '/images/shutter_repairing/iconForSutter/gril_stair/add_railing.jpg', title: 'Adding Railing ', price: 0 },
                { name: 'Stair Painting', image: '/images/shutter_repairing/iconForSutter/gril_stair/painting_work2.jpg', title: 'Painting', price: 0 },
                { name: 'Stair Other Works', image: '/images/shutter_repairing/iconForSutter/gril_stair/stair.jpg', title: 'Other Works', price: 0 },
                // Add other options with prices
            ],
        },
        {
            title: 'Gate & Safetydoor Repairing ',
            design: 'Click Services',
            image: '/images/shutter_repairing/iconForSutter/gate/main.jpg',

            paragraph: 'Professional gate and safety door repair for reliable security solutions',
            options: [
                { name: 'Lock', image: '/images/shutter_repairing/iconForSutter/gate/lock.jpg', title: 'Lock', price: 0 },
                { name: 'Key Lock', image: '/images/shutter_repairing/iconForSutter/gate/lock1.jpg', title: 'Key Lock', price: 0 },
                { name: 'Gate Wheel', image: '/images/shutter_repairing/iconForSutter/gate/wheel.jpg', title: 'Gate Wheel ', price: 0 },
                { name: 'Hinges', image: '/images/shutter_repairing/iconForSutter/gate/hinges.jpg', title: 'Hinges', price: 0 },
                { name: 'Gate Resizing', image: '/images/shutter_repairing/iconForSutter/gate/resizing.jpg', title: 'Resizing', price: 0 },
                { name: 'Add Gi Sheet Gate', image: '/images/shutter_repairing/iconForSutter/gate/sheet.jpg', title: 'Add Gi Sheet', price: 0 },
                { name: 'Add Gi polycarbonate  Gate', image: '/images/shutter_repairing/iconForSutter/gate/polycarbonate.jpg', title: 'Add polycarbonate', price: 0 },
                { name: 'Gate Painting', image: '/images/shutter_repairing/iconForSutter/gate/painting_work.jpg', title: 'Gate Painting', price: 0 },
                { name: 'Gate Other Works', image: '/images/shutter_repairing/iconForSutter/gate/other.jpg', title: 'Other Works', price: 0 },
                // Add other options with prices
            ],
        },

        // Add other services similarly
    ]);

    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    const toggleService = (service) => {
        const isSelected = selectedServices.includes(service.title);
        if (isSelected) {
            setSelectedServices(selectedServices.filter((selected) => selected !== service.title));
            setSelectedOptions({ ...selectedOptions, [service.title]: [] });
        } else {
            setSelectedServices([...selectedServices, service.title]);
        }
    };

    const toggleOption = (serviceTitle, optionName) => {
        const updatedOptions = selectedOptions[serviceTitle] || [];
        const isOptionSelected = updatedOptions.includes(optionName);
        let updatedSelectedOptions = {};

        if (isOptionSelected) {
            updatedSelectedOptions = {
                ...selectedOptions,
                [serviceTitle]: updatedOptions.filter((selected) => selected !== optionName),
            };
        } else {
            updatedSelectedOptions = {
                ...selectedOptions,
                [serviceTitle]: [...updatedOptions, optionName],
            };
        }

        setSelectedOptions(updatedSelectedOptions);

        // Calculate total price after updating state
        let totalPrice = 0;
        services.forEach((service) => {
            if (updatedSelectedOptions[service.title]) {
                service.options.forEach((option) => {
                    if (updatedSelectedOptions[service.title].includes(option.name)) {
                        totalPrice += option.price;
                    }
                });
            }
        });
        setTotalPrice(totalPrice);
    };



    const isServiceSelected = (serviceTitle) => {
        return selectedServices.includes(serviceTitle);
    };

    const isOptionSelected = (serviceTitle, optionName) => {
        return selectedOptions[serviceTitle] && selectedOptions[serviceTitle].includes(optionName);
    };

    const allOptionsSelected = Object.keys(selectedOptions).some((key) => selectedOptions[key].length > 0);

    return (
        <div className="text-center" style={{ position: 'relative', top: '5rem' }}>
            <div className="container my-2">
                <h2>Repairing Works</h2>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="mx-auto">
                            <div className="service-card ">
                                <button
                                    onClick={() => toggleService(service)}
                                    className={`service-link text-decoration-none text-dark ${isServiceSelected(service.title) ? 'selected' : ''}`}
                                    style={{ display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}
                                >
                                    <img className=' fix_icon' src={service.image} alt={service.title} />
                                    <div className="right">
                                        <h4 className="service_title">{service.title}</h4>
                                        <p className="paragraph">{service.paragraph}</p>
                                        <span className="newbtn">{service.design}</span>
                                    </div>
                                </button>
                                <div className="options-container">
                                    <div className="options-wrapper">
                                        {isServiceSelected(service.title) &&
                                            service.options.map((option, optionIndex) => (
                                                <div
                                                    key={optionIndex}
                                                    className={`option ${isOptionSelected(service.title, option.name) ? 'selected' : ''}`}
                                                >
                                                    <img
                                                        onClick={() => toggleOption(service.title, option.name)}
                                                        className="option_image threeD"
                                                        src={option.image}
                                                        alt={option.name}
                                                    />
                                                    <p className="small-text">{option.title}</p>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {allOptionsSelected && (
                    <div className='final_submit'
                        style={{
                            display: 'flex',
                            justifyContent: 'center', // Horizontally center the content
                            marginTop: '10px',
                            position: 'fixed',
                            bottom: '50px',
                            zIndex: '1000',
                            cursor: 'pointer',
                            width: '100%', // Occupy entire width
                        }}
                    >
                        <Link to={`/form/${selectedServices.join('-')}/${Object.values(selectedOptions).flat().join('-')}/${totalPrice}`}>
                            <button className="btn btn-success btn-lg">Confirm : Items: {Object.values(selectedOptions).flat().length}</button>
                        </Link>


                    </div>
                )}
            </div>
        </div>
    );
};

export default ShutterRepairing;
