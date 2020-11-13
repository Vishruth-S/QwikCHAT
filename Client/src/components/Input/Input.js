import React from 'react'
import './Input.css'

const Input = ({ message, setMessage, sendMessage, theme }) => {
    return (
        <form className="form">
            <input
                className={`input input-${theme}`}
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button className="sendButton" onClick={sendMessage}>Send</button>
        </form>
    )
}

export default Input
