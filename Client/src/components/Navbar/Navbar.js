import React from 'react'
import './Navbar.css'
import Logo from '../../Assets/QwikChatLogo2.png'

const Navbar = ({ theme }) => {
    return (
        theme === "dark" ? (<div className="navbar-light">
            <span className="navbar-brand" ><img src={Logo} className="nav-logo" alt="Infix2Postfix_logo" /></span>
            <div className="vs">Made by <a href="https://vishruth-s.github.io/Me">VS</a></div>
        </div>) : (<div className="navbar-dark">
            <span className="navbar-brand" ><img src={Logo} className="nav-logo" alt="Infix2Postfix_logo" /></span>
            <div className="vs">Made by <a href="https://vishruth-s.github.io/Me">VS</a></div>
        </div>)

    )
}

export default Navbar
