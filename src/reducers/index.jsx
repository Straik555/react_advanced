import {combineReducers} from 'redux'

import {people} from './people'
import {messages} from "./messages";

const reducers = combineReducers({
    people,
    messages
})

export default reducers;