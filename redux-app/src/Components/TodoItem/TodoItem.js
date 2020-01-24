import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function TodoList() {
    const dispatch = useDispatch()
    const todo = useSelector(state => state)

    return (
        <div>
            <button onClick={() => dispatch({type: 'ADD_TODO'})}></button>
            <span></span>
        </div>
    )
}