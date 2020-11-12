import React from 'react'

import closeIcon from '../../Assets/icons/closeIcon.png'
import onlineIcon from '../../Assets/icons/onlineIcon.png'
import './Infobar.css'

const Infobar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close" /></a>
            </div>
        </div>
    )
}

export default Infobar