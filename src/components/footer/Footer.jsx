import React from 'react'
import './Footer.css'
import {PAGES} from '../../config/text'

const Footer = () => {
    const {logo,home,about,team,services,copyright} = PAGES.FOOTER
    return (
        <div className='footer-container'>
            <div className="footer-logo">
            <img src={logo} alt="" />
            </div>
            <div className="links">
                <p>{home}</p>
                <p>{about}</p>
                <p>{team}</p>
                <p>{services}</p>
            </div>
            <p className='copyright'>{copyright}</p>
        </div>
    ) 
}

export default Footer
