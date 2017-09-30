import {USER_PROFILE_API, USER_PROFILE_API_SUCCESS, USER_PROFILE_API_ERROR} from 'ReactNativeRedux/src/constants/user'

//initial state.
const initialState = {
    loading: false
};

export default function userReducer (state = initialState, action = {}) {
    switch (action.type) {
        case USER_PROFILE_API:
            return Object.assign({}, state, {loading: true});
        case USER_PROFILE_API_SUCCESS:
            return Object.assign({}, state, {loading: false}, action.user);
        case USER_PROFILE_API_ERROR:
            return Object.assign({}, state, {loading: false});
        default:
            return state
    }
}