import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressCard, faHandshake, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import "./cardCss/servicesCard.css";

const FabricationStep = ({ title, content, icon }) => (
    <div className="custom_process_card">
        <div className={`card `}>
            <div className="card-body text-center">
                <FontAwesomeIcon icon={icon} size="2x" className="mb-3" />
                <h5 className='process-title'>{title}</h5>
                {<p className='process-para'>{content}</p>}
            </div>
        </div>
    </div>
);

const FabricationProcess = () => {

    const steps = [
        {
            title: 'Select your desired services',
            content: 'Choose from our range of services to meet your requirements.',
            icon: faUser,
        },
        {
            title: 'Provide Contactable Details',
            content: 'Share your contact information so we can reach out to you.',
            icon: faAddressCard,
        },
        {
            title: 'Zero Visiting Charge',
            content: 'Enjoy a free assessment with no visiting charge.',
            icon: faMoneyBillAlt, // Use a different icon here
        },
        {
            title: 'Get Quotes & Hire the best',
            content: 'Get quotes, choose wisely, hire the best for your needs.',
            icon: faHandshake,
        },
    ];

    return (
        <div className="custom-container ">
            <div className="custom-row container-box-shadow">
                {steps.map(({ title, content, icon }, index) => (
                    <FabricationStep
                        key={index}
                        title={title}
                        content={content}
                        icon={icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default FabricationProcess;