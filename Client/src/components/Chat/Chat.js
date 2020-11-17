import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css'
import Infobar from '../Infobar/Infobar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages'
import UsersInRoom from '../UsersInRoom/UsersInRoom';



let socket;

const Chat = (props) => {
    const location = props.routeParams.location
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'https://qwikchat.herokuapp.com/'
    // const ENDPOINT = 'http://localhost:5000/'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                socket.emit('disconnect')
                socket.off()
                return alert(error)
            }
        })
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
        socket.on('roomData', ({ users }) => {
            setUsers(users);
        })
    })

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <div>
            <div className={`outerContainer outerContainer-${props.theme}`}>
                <div className={`container container-${props.theme}`}>
                    <Infobar room={room} />
                    <Messages messages={messages} name={name} theme={props.theme} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} theme={props.theme} />
                </div>
                <UsersInRoom users={users} theme={props.theme} />
            </div>
        </div>
    )


}

export default Chat
