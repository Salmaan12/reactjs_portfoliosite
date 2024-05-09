import React from 'react';
import './Portfolio.css'

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
                    <div id="portfolioWrapper">
                        <div className="portfolioCard"></div>
                        <div className="portfolioCard"></div>
                        <div className="portfolioCard"></div>
                        <div className="portfolioCard"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio