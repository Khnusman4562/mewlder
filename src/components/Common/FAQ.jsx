import React from 'react';

const FAQ = () => {
    const faqData = [
        {
            question: "Do you provide fitting services for your products?",
            answer: "Yes, we offer professional fitting services for all our products. Our experienced team ensures that the installation is done correctly and efficiently to meet your requirements."
        },
        {
            question: "Is there a visiting charge for assessment?",
            answer: "No, our visiting assessment is completely free of charge. We believe in providing transparent and cost-effective solutions to our clients."
        },
        {
            question: "What is the typical turnaround time for fitting?",
            answer: "Typically, our team completes the fitting process within 5 to 7 days after your order confirmation. We strive to deliver prompt and reliable service to meet your needs."
        },
        {
            question: "Do you provide products in black color?",
            answer: "Yes, we offer products in two default colors: black and red. These colors are readily available for your selection. If you prefer a different color, please feel free to discuss your color preferences with our team, and we will do our best to accommodate your choice."
        },
        {
            question: "Do you provide repair services for your products?",
            answer: "Yes, we offer professional repair services for all our products. Whether it's fixing a malfunction or replacing worn-out parts, our skilled team is here to ensure your products are in top-notch condition. Please contact our customer service for more details and assistance."
        }
    ];


    return (
        <div>
            <h2 className='heading-3d'>Frequently Asked Questions (FAQ)</h2>

            <div className="accordion" id="faqAccordion">
                {faqData.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <h3 className="accordion-header" id={`question${index + 1}`}>
                            <button className={`accordion-button ${index === 0 ? 'show' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#answer${index + 1}`} aria-expanded={index === 0} aria-controls={`answer${index + 1}`}>
                                {`${index + 1}. ${item.question}`}
                            </button>
                        </h3>
                        <div id={`answer${index + 1}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`question${index + 1}`} data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
