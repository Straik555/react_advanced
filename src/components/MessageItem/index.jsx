import React from "react";

const MessageItem = ({
    text,
    author,
    time,
    color
}) => {
    return (
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time">{time}</span> &nbsp; &nbsp;
                    <span className="message-data-name">{author}</span> <i className="fa fa-circle me"></i>

                </div>
                <div className="message other-message float-right" style={{background: color}}>
                    {text}
                </div>
            </li>
    )
}

export default MessageItem;