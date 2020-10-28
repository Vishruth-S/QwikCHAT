import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false
    const trimmedName = name.trim().toLowerCase();
    let isAdmin = false
    if (user === trimmedName) {
        isSentByCurrentUser = true
    }
    if (user === 'admin') {
        isAdmin = true
    }

    return (
        <div>
            {isSentByCurrentUser ?
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
                : isAdmin ?
                    <div className="messageContainer justifyCenter">
                        <div className="adminMessageBox backgroundGrey">
                            <p className="adminmessageText colorWhite">{ReactEmoji.emojify(text)}</p>
                        </div>
                        {/* <p className="sentText pl-10">{user}</p> */}
                    </div>
                    :
                    <div className="messageContainer justifyStart">
                        <div className="messageBox backgroundLight">
                            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                        </div>
                        <p className="sentText pl-10">{user}</p>
                    </div>
            }
        </div>
    )

}

export default Message
