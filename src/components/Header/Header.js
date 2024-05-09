import React, { useState } from 'react';
import signatureLogo from './../../assets/salman-signature.png';
import './Header.css';
import Button from '../Button/Button';
import navItem from './navItems.json';

const Header = () => {

    const [navItems, setNavItems] = useState(navItem);

    // const { id, navText, navLink } = navItems

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/#">
                        <img src={signatureLogo} alt="signature_gif" width={150} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                navItems.map((currValue) => {
                                    return (
                                        <>
                                            <li className="nav-item" key={currValue.id}>
                                                <a className="nav-link" aria-current="page" href={currValue.navLink}>{currValue.navText}</a>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                        <span className='middleLine'></span>
                        <div className='social_icons'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-github"></i>
                        </div>
                        <Button children={'Download CV'}></Button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;