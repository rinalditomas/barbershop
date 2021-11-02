import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    // const [showBar, setShowBar] = useState(false)

    // useEffect(() => {
    //    window.addEventListener('scroll', ()=>{
    //     if (window.scrollY > 100) setShowBar(true);
    //     else setShowBar(false);
    //   });
    //   return () => {
    //     window.removeEventListener("scroll");
    //   };
    // }, [])

    return (
        <div className= 'navbar'>
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
