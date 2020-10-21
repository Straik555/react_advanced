import {
    RECEIVE_NEW_MESSAGE
} from "../actionType";

const initialState = [];

export const messages = (state = initialState, {
    type,
    author,
    text,
    time,
    color
}) => {
    switch (type){
        case RECEIVE_NEW_MESSAGE:
            return state.concat({
                author,
                text,
                time,
                color
            })
        default:
            return state
    }
}