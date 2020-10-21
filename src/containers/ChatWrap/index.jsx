import React from "react";

import authHOC from "../AuthHOC";
import PeopleList from "../PeopleList";
import MessagesList from "../MessagesList";

const ChatWrap = () => {
    return (
        <div className="container clearfix">
            <PeopleList />
            <MessagesList />
        </div>
    )
}

export default authHOC(ChatWrap);