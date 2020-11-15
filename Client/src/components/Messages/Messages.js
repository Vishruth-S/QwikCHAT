import React from 'react'
import { css } from 'emotion';

import ScrollToBottom from 'react-scroll-to-bottom'


import './Messages.css'
import Message from '../Messages/Message/Message'
const ROOT_CSS = css({
    height: 400,
    paddingBottom: 10
    // width: 400
});

const Messages = ({ messages, name, theme }) => {
    console.log(theme)
    return (
        <ScrollToBottom className={ROOT_CSS}>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} theme={theme} /></div>)}
        </ScrollToBottom >
    )
}

export default Messages
