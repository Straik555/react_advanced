import React, {useEffect, useRef} from "react";
import {connect} from 'react-redux'

import ChatHeader from "../../components/ChatHeader";
import MessageItem from "../../components/MessageItem";
import ChatControl from "../../components/ChatControl";
import {receiveNewMessage} from "../../actions";

const MessagesList = ({messages}) => {

    const ulRef = useRef();
    const chatRef = useRef()

    useEffect(() => {
        chatRef.current.scrollTop = ulRef.current.scrollHeight
    }, )

    return(
        <div className="chat">
            <ChatHeader />
            <div
                className="chat-history"
                ref={chatRef}
            >
                <ul
                    ref={ulRef}
                >
                    {
                        messages.map(message =>
                            <MessageItem
                                key={message.time}
                                {...message}
                            />
                        )
                    }
                </ul>
            </div>
            <div className="chat-message clearfix">
                <ChatControl />
            </div>
        </div>
    )
}

const mapStateToProps = ({messages}) => {
    return {messages}
}

const mapDispatchToProps = ({
    newMessage: receiveNewMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);