import { createStore } from 'redux'
import { rootMiddleware } from './Middleware'
import { videoReducer } from './Reducer'
export const store = createStore(videoReducer, rootMiddleware)
