import {GET_VIDEO, getVideoSuccess, getVideoFail} from './Actions'

export const videoMiddleware = store => next => action => {
    if(action.type === GET_VIDEO) {
        const { inputValue } = store.getState()

        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDcwn37GRSeD7QtM2eq9VPjkHJFbLEc0Sw&type=video&part=snippet&maxResults=15&q=${inputValue}`)
        .then(res => res.json())
        .then(data => {})
    }
}