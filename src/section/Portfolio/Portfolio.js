import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <>
            <div className="container" id='project'>
                <div className="row">
                    <div className="col-12">
                        <h2 className='sectionHeading'>Projects</h2>
                    </div>
                </div>
                <div className="row">
                    <OwlCarousel items={4} margin={8} autoplay={true} loop={true} >
                        <div className="portfolioCard"></div>
                        <div className="portfolioCard"></div>
                        <div className="portfolioCard"></div>
                        <div className="portfolioCard"></div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default Portfolio