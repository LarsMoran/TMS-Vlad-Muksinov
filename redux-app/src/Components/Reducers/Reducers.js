import {ADD_TODO} from '../Constants'

const initialState = {
    todos: []
}
    
function rootReducer(state = initialState, action) {
    if(action.type === ADD_TODO) {
        return Object.assign({}, state, {
            todos: state.todos.concat(action.payload)
        })
    }
    
    return state
}

export default rootReducer