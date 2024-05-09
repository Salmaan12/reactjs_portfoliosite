import React from 'react';
import './About.css';
import Button from '../../components/Button/Button';
import { TypeAnimation } from 'react-type-animation';
import aboutImage from './../../assets/about_art_transparent.png'

const contactMe = () => {
    console.log('Contact Button Fire');
}

const About = () => {
    return (
        <>
            <div className="container" id='about'>
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-12 text-white">
                                <h1 className='nameHeading'><span className='iam'>I'M</span> Salman Rafiq</h1>
                                <TypeAnimation
                                    sequence={['Web Developer', 900, 'Frontend Developer', 900]}
                                    style={{ fontSize: '1.6em', fontWeight: '500' }}
                                    repeat={Infinity}
                                    speed={30}
                                />
                            </div>
                            <div className="col-12 aboutPara">
                                <p>Salman Rafiq Chottani, A BS Software Engineer with well over A 3 Year's of practical experience in Frontend/Web Development.<br />
                                    I have always been A fan of Software Development, and the more knowledge I absorbed regarding the topic, The more interested I got towards Web Development which is probably why you spotted Web Development among the list of services I provide.</p>
                            </div>
                            <div className='col-12'>
                                <Button children={"contact me"} onClick={contactMe}></Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <img className='aboutImg' src={aboutImage} alt="about_image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About