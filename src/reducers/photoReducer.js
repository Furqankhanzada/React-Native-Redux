import {USER_PHOTOS_API, USER_PHOTOS_API_SUCCESS, USER_PHOTOS_API_ERROR} from 'ReactNativeRedux/src/constants/photo'
import {POPULAR_PHOTOS_API, POPULAR_PHOTOS_API_SUCCESS, POPULAR_PHOTOS_API_ERROR} from 'ReactNativeRedux/src/constants/photo'

//initial state.
const initialState = {
    loading: false
};

export function userPhotosReducer (state = initialState, action = {}) {
    switch (action.type) {
        case USER_PHOTOS_API:
            return Object.assign({}, state, {loading: true});
        case USER_PHOTOS_API_SUCCESS:
            return Object.assign({}, state, {loading: false}, action.userPhotos);
        case USER_PHOTOS_API_ERROR:
            return Object.assign({}, state, {loading: false});
        default:
            return state
    }
}

export function popularPhotosReducer (state = initialState, action = {}) {
    switch (action.type) {
        case POPULAR_PHOTOS_API:
            return Object.assign({}, state, {loading: true});
        case POPULAR_PHOTOS_API_SUCCESS:
            return Object.assign({}, state, {loading: false}, action.popularPhotos);
        case POPULAR_PHOTOS_API_ERROR:
            return Object.assign({}, state, {loading: false});
        default:
            return state
    }
}