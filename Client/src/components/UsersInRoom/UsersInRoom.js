import React from 'react'

import './UsersInRoom.css'
import onlineIcon from '../../Assets/icons/onlineIcon.png'

function UsersInRoom({ users }, theme) {
    let usersArr = Array.from(users)
    return (
        <div className={`users-room users-room-${theme}`}>
            <h2>Users currently in room </h2>
            <div>
                {usersArr.map(user => (
                    <div key={user.id}>
                        <img className="onlineIcon" src={onlineIcon} alt="online" /><span>{user.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsersInRoom
