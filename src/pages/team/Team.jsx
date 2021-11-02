import React from 'react'
import { PAGES } from '../../config/text'
import './Team.css'


const Team = () => {
    const {title,img1,img2,img3,name1,name2,name3,action} =PAGES.TEAM
    return (
        <div className='team-container'>
            <div className="header">
                <h1>{title}</h1>
            </div>
            <div className="team">
                <div className="image-container">
                    <img src={img1} alt={PAGES.NOTFOUND} />
                    <p>{name1}</p>
                </div>
                <div className="image-container">
                    <img src={img2} alt={PAGES.NOTFOUND} />
                    <p>{name2}</p>
                </div>
                <div className="image-container">
                    <img src={img3} alt={PAGES.NOTFOUND} />
                    <p>{name3}</p>
                </div>

            </div>
            <div className='team-btn'>    
            <button className="button">
                <p>{action}</p>
            </button>

            </div>
            
        </div>
    )
}

export default Team
