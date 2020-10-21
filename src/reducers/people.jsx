import {
    CONNECTED_NEW_USER,
    DISCONNECTED_USER
} from "../actionType";

const initialState = []

export const people = (state = initialState, {type, userID, userName}) => {
    switch (type){
        case CONNECTED_NEW_USER:
            return state.concat({id: userID, userName})
        case DISCONNECTED_USER:
            return state.filter(user => user.id !== userID)
        default:
            return state
    }
}