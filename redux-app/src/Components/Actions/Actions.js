import {ADD_TODO} from '../Constants'

export function addTodo (payload) {
    return {
        type: ADD_TODO,
        payload
    }
}