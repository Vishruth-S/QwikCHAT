import React from 'react'
import './Navbar.css'
import Logo from '../../Assets/QwikChat.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navbar-brand" ><img src={Logo} className="nav-logo" alt="Infix2Postfix_logo" /></span>
            <span className="nav-right">Made by VS</span>
        </div>
    )
}

export default Navbar
