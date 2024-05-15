import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className='container' id="contact">
                <div className="row">
                    <div className="col-12">
                        <h2 className='sectionHeading'>Contact</h2>
                    </div>
                </div>
                <div className="contactTxt">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='heading'>Lets Talk!</h3>
                            <p className='para'>CALL ME OR SEND ME A REQUEST/PROPOSAL</p>
                            <div className='contactSource'>
                                <p><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:salmanrafiqchottani@gmail.com">salmanrafiqchottani@gmail.com</a></p>
                                <p><i class="fa fa-phone-square" aria-hidden="true"></i><a href="tel:+923122558011">+923122558011</a></p>
                            </div>
                            <div className="location">
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i>Karachi, Pakistan</p>
                            </div>
                            <div className='social_icons'>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-github"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact