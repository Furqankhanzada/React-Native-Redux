import axios from 'axios';
import {USER_PROFILE_API, USER_PROFILE_API_SUCCESS, USER_PROFILE_API_ERROR} from 'ReactNativeRedux/src/constants/user'

export const getUser = () => {
    return (dispatch) => {
        dispatch({type: USER_PROFILE_API});
        axios({
            method: 'post',
            url: 'classes/User/318381',
            data: {
                "_method": "GET",
                "_version": "5.0.5",
                "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g"
            }
        }).then( (response) => {
            dispatch({type: USER_PROFILE_API_SUCCESS, user: response.data})
        }).catch(function (error) {
            dispatch({type: USER_PROFILE_API_ERROR, error})
        });
    }
};