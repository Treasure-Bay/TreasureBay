import React, { createContext, useEffect, useContext } from 'react'
import Conversations from '../Conversations/Conversations';
import Messages from '../Messages/Messages'
import axios from 'axios';
import { useConversations } from '../../context/ConversationsProvider';
import UserContext from '../../context/UserProvider';
import './MessagingPage.css'

function MessagingPage() {

    const { user } = useContext(UserContext)
    const { setMessages, setConversations } = useConversations()

    useEffect(() => {
        getConversations()
    }, [user])

    const getConversations = async () => {
        try {
            await axios.all([
                axios.get(`https://treasure-bay-server.herokuapp.com/conversations/${user[0].user_id}`),
                axios.get('https://treasure-bay-server.herokuapp.com/messages')
            ])
                .then((response) => {
                    setConversations(response[0].data);
                    setMessages(response[1].data);
                })
        } catch (err) {

        }
    }


    return (
        <>
            {user && <div className='messaging-container'>
                <div className='conversations'>
                    <Conversations />
                </div>
                <div className='messaging'>
                    <Messages />
                </div>
            </div>}
        </>
    )
}

export default MessagingPage;