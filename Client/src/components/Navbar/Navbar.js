import React from 'react'
import './Navbar.css'
import Logo from '../../Assets/QwikChat.png'

const Navbar = ({ theme }) => {
    return (
        theme === "dark" ? (<div className="navbar-light">
            <span className="navbar-brand" ><img src={Logo} className="nav-logo" alt="Infix2Postfix_logo" /></span>
            <span className="nav-right">Made by VS</span>
        </div>) : (<div className="navbar-dark">
            <span className="navbar-brand" ><img src={Logo} className="nav-logo" alt="Infix2Postfix_logo" /></span>
            <span className="nav-right">Made by VS</span>
        </div>)

    )
}

export default Navbar
