import {GET_VIDEO, NEXT_PAGE, getVideoSuccess, getVideoFail, loadNextPage, LOAD_NEXT_PAGE} from './Actions'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
const videoMiddleware = store => next => action => {
    const { inputValue } = store.getState()
    const { pageToken } = store.getState()
        if(action.type === GET_VIDEO) {
        
        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBV2wM89CFfkAfT53mxVUV9dS9pEBjheqY&type=video&part=snippet&maxResults=15&q=${inputValue}`)
        .then(res => res.json())
            .then(data => {
                const action = getVideoSuccess({videos: data.items, pageToken: data.nextPageToken})
                store.dispatch(action)
                    
            })
            .catch(() => {
            store.dispatch(getVideoFail())
        })
    }
    if(action.type === NEXT_PAGE) {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBV2wM89CFfkAfT53mxVUV9dS9pEBjheqY&type=video&part=snippet&maxResults=15&q=${inputValue}&pageToken=${pageToken}`)
        .then(res => res.json())
        .then(data => {
            const action = loadNextPage({videos: data.items, pageToken: data.nextPageToken})
            store.dispatch(action)
        })
    } 
    
    next(action)
}

export const rootMiddleware = composeWithDevTools(applyMiddleware(videoMiddleware)) 