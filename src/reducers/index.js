import { combineReducers } from 'redux'
import user from 'ReactNativeRedux/src/reducers/userReducer'
import {userPhotosReducer as userPhotos, popularPhotosReducer as popularPhotos} from 'ReactNativeRedux/src/reducers/photoReducer'

const rootReducer = combineReducers({
    user,
    userPhotos,
    popularPhotos
});

export default rootReducer