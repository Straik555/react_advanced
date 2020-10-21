import {
    CONNECTED_NEW_USER,
    DISCONNECTED_USER,
    RECEIVE_NEW_MESSAGE
} from '../actionType';

export const connectedNewUser = ({userID, userName})  => {
        return {
            type: CONNECTED_NEW_USER,
            userID,
            userName
        }
}

export const disconnectUser = ({userID}) => {
    return {
        type: DISCONNECTED_USER,
        userID
    }
}

export const receiveNewMessage = ({author, text, time, color}) => {
    return {
        type: RECEIVE_NEW_MESSAGE,
        author,
        text,
        time,
        color
    }
}
