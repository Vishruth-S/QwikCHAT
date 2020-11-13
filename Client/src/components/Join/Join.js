import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imgdark from '../../Assets/chatDark.png'
import imglight from '../../Assets/chatLight.png'
import './Join.css'

const Join = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className={`${props.theme}`}>
            <div className="joinOuterContainer">
                <div className="welcomeContainer">
                    <h2 className="welcome">Welcome to <span style={{ color: "#a329ff" }}>Qwik</span>Chat</h2>
                    <p>A simple chat application</p>
                    <img className="welcome-image" src={props.theme === "dark" ? imgdark : imglight} alt="chat"></img>
                </div>
                <div className="joinInnerContainer">
                    <h1 className={`heading heading-${props.theme}`}>Join a chat room</h1>
                    <div>
                        <input placeholder="Your Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <input placeholder="Room code" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                    </div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="submit">Join</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Join
