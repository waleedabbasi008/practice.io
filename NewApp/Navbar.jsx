import React from 'react'
import './Navbar.scss'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="images/logo.png" alt="" className='logoImg' />
                </div>
                <ul className='nav-items' >
                    <li className='nav-item item1' > <a href="#" > Home </a>  </li>
                    <li className='nav-item item2'> <a href="#about" > About </a> </li>
                    <li className='nav-item item3'> <a href="#Services" > Services </a> </li>
                    <li className='nav-item item4'> <a href="#Contact" > Contact </a> </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar;