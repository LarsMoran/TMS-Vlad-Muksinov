import {GET_VIDEO, GET_VIDEO_SUCCESS, GET_VIDEO_FAIL} from './Actions'

const initialState = {
    videos: [],
    loading: false,
    page: 1,
    inputValue: ''
}

export function videoReducer(state = initialState, action) {
    switch(action.type) {
        case GET_VIDEO: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_VIDEO_SUCCESS: {
            return {
                ...state,
                videos: [...state.videos, action.payload],
                loading: false,
                page: state.page + 1
            }
        }
        case GET_VIDEO_FAIL: {
            return {
                ...state,
                loading: false
            }
        }
        default: return state
    }
}