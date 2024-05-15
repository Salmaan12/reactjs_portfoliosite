import React from 'react'
import Header from '../Header/Header'
import About from '../../section/About/About'
import Portfolio from '../../section/Portfolio/Portfolio'
import Experience from '../../section/ExperienceSkill/Experience'
import Contact from '../../section/Contact/Contact'

const Default = () => {
    return (
        <>
            <Header></Header>
            <About></About>
            <Portfolio></Portfolio>
            <Experience></Experience>
            <Contact></Contact>
        </>
    )
}

export default Default