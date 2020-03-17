import {GET_VIDEO,
    GET_VIDEO_SUCCESS,
    GET_VIDEO_FAIL,
    SET_INPUT_VALUE,
    NEXT_PAGE,
    PREVIOUS_PAGE,
    LOAD_NEXT_PAGE,
    LOAD_PREVIOUS_PAGE} from './Actions'

const initialState = {
    videos: [],
    loading: false,
    inputValue: '',
    // currentPage: 1,
    // previousPage: -1,
    translation: 0,
    pageToken: '',
    localStorage: ''
}

export function videoReducer(state = initialState, action) {
    switch(action.type) {
        case GET_VIDEO: {
            return {
                ...state,
                loading: true,
            }
        }
        case GET_VIDEO_SUCCESS: {
            return {
                ...state,
                videos: [...action.payload.videos],
                pageToken: action.payload.pageToken,
                loading: false,
                currentPage: 1,
                previousPage: -1,
                translation: 0,
            }
        }
        case GET_VIDEO_FAIL: {
            return {
                ...state,
                loading: false
            }
        }
        case SET_INPUT_VALUE: {
            return {
                ...state,
                inputValue: action.payload
            }
        }
        case NEXT_PAGE: {
            return {
                ...state,
                currentPage: state.currentPage + 1,
                previousPage: state.previousPage + 1,
                translation: -1600*state.currentPage
            }
        }
        case PREVIOUS_PAGE: {
            return {
                ...state,
                currentPage: state.currentPage - 1,
                previousPage: state.previousPage - 1,
                translation: -1600*state.previousPage
            }
        }
        case LOAD_NEXT_PAGE: {
            return {
                ...state,
                videos: [...state.videos, ...[...action.payload.videos]],
                pageToken: action.payload.pageToken,
                startValue: -1,
                endValue: 3
            }
        }

        case LOAD_PREVIOUS_PAGE: {
            return {
                ...state,
                videos: [action.payload],
                startValue: 44,
                endValue: 48,
            }
        }
        default: return state
    }
}