import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="https://pngimage.net/wp-content/uploads/2018/05/example-logo-png-1.png" alt="" />
            </div>
            <ul className='desktop'>
                <li>Home</li>
                <li>About Us</li>
                <li>The Team</li>
                <li>Services</li>
            </ul>
        </div>
    )
}

export default Navbar
