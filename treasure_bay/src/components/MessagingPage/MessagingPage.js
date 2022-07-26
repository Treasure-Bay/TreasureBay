import React from 'react'
import Conversations from '../Conversations/Conversations';
import Messages from '../Messages/Messages'
import './MessagingPage.css'

function MessagingPage() {
    return (
        <div className='messaging-container'>
            <div className='conversations'>
                <Conversations />
            </div>
            <div className='messaging'>
                <Messages />
            </div>
        </div>
    )
}

export default MessagingPage;