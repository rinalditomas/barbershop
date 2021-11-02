import React from 'react'
import './Information.css'
import { PAGES } from '../../config/text'
const Information = () => {
    const {title,address,phone,week,saturday,sunday,action} = PAGES.INFORMATION
    return (
        <div className='information-container'>
            <h1>{title}</h1>
            <div className="information">
                <div className="info">
                <ion-icon id='logo' name="location-outline"></ion-icon>
                <p>{address}</p>
                </div>
                <div className="info">
                <ion-icon id='logo' name="call-outline"></ion-icon>
                <p>{phone}</p>
                </div>
                <div className="info">
                <ion-icon id='logo' name="time-outline"></ion-icon>
                <div className="days">
                    <p>{week}</p>
                    <p>{saturday}</p>
                    <p>{sunday}</p>
                </div>
                </div>
            </div>
            <button className='button info-btn'><p>{action}</p></button>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.626545781529!2d10.501525752747279!3d43.842840837821356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5838cad2b180f%3A0xbd07bffd6c8b7c8b!2sBarbiere%20Bianchi%20e%20Lazzareschi%20di%20Ernesto%2C%20Luciano%20e%20Dania!5e0!3m2!1sen!2sie!4v1635879739949!5m2!1sen!2sie" width="600" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}

export default Information
