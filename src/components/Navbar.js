import React from 'react'
import Logo from '../spiral.png'

export default function Navbar(){
    return (
        <nav>
            <img src={Logo} alt='logo' className='nav-icon'></img>
            <h2 className='nav-logo-text'>airbnb</h2>
        </nav>
    )
}