export const GET_VIDEO = 'GET_VIDEO'
export const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS'
export const GET_VIDEO_FAIL = 'GET_VIDEO_FAIL'

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