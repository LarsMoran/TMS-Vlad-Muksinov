export const GET_VIDEO = 'GET_VIDEO'
export const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS'
export const GET_VIDEO_FAIL = 'GET_VIDEO_FAIL'
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'
export const LOAD_NEXT_PAGE = 'LOAD_MORE'
export const LOAD_PREVIOUS_PAGE = 'LOAD_PREVIOUS_PAGE'
export function getVideo(payload) {
    return {
        type: GET_VIDEO,
        payload: payload
    }
}
export function getVideoSuccess(payload) {
    return {
        type: GET_VIDEO_SUCCESS,
        payload: payload
    }
}
export function getVideoFail(payload) {
    return {
        type: GET_VIDEO_FAIL,
        payload: payload
    }
}
export function setInputValue(payload) {
    return {
        type: SET_INPUT_VALUE,
        payload: payload
    }
}

export function nextPage(payload) {
    return {
        type: NEXT_PAGE,
        payload: payload
    }
}

export function previousPage(payload) {
    return {
        type: PREVIOUS_PAGE,
        payload: payload
    }
}

export function loadNextPage(payload) {
    return {
        type: LOAD_NEXT_PAGE,
        payload: payload
    }
}


export function loadPreviousPage(payload) {
    return {
        type: LOAD_PREVIOUS_PAGE,
        payload: payload
    }
}
