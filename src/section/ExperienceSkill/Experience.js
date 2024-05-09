import React, { useState } from 'react';
import './Experience.css';
import experiences from './experiences.json';
import skills from './skills';

const Experience = () => {

    const [experienceList, setExperienceList] = useState(experiences);

    return (
        <>
            <div className="container" id="experience">
                <div className="row">
                    <div className="col-12">
                        <h2 className='sectionHeading'>Experience & Skills</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        experienceList.map((item) => {
                            return (
                                <>
                                    <div className="col-12 mt-3" key={item.id}>
                                        <div className="row">
                                            <div className="col-3">
                                                <div className='circle'></div>
                                                <div className="center-line"></div>
                                            </div>
                                            <div className="col-9 exp_col">
                                                <h3 className='designation'>{item.designation}</h3>
                                                <h4 className='companyName'>{item.companyName}</h4>
                                                <h5 className='timeDura'>{item.duration}</h5>
                                                <p className='expPara'>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="row">
                <h2 className='text-center text-white my-5'>My Skills</h2>
                    <div className="skillCards">
                        {
                            skills.map((item) => {
                                return (
                                    <>
                                        <div className="card" key={item.id}>
                                        <img className='skillsIcon' src={item.icon} alt="" />
                                            <h5>{item.language}</h5>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience