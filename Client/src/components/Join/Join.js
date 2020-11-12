import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div>
            <div className="joinOuterContainer">
                <div className="welcomeContainer">
                    <text className="welcome">Welcome to <span style={{ color: "#a329ff" }}>Qwik</span>Chat</text>
                    <p>A simple chat application</p>
                </div>
                <div className="joinInnerContainer">
                    <h1 className="heading">Join a chat room</h1>
                    <div>
                        <input placeholder="Your Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <input placeholder="Room code" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                    </div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className={'button mt-20'} type="submit">Join</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Join
