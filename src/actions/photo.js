import axios from 'axios';
import {USER_PHOTOS_API, USER_PHOTOS_API_SUCCESS, USER_PHOTOS_API_ERROR} from 'ReactNativeRedux/src/constants/photo'
import {POPULAR_PHOTOS_API, POPULAR_PHOTOS_API_SUCCESS, POPULAR_PHOTOS_API_ERROR} from 'ReactNativeRedux/src/constants/photo'

export const getUserPhotos = () => {
    return (dispatch) => {
        dispatch({type: USER_PHOTOS_API});
        axios({
            method: 'post',
            url: 'functions/feed/profile/load-batch',
            data: {
                "isThumbnailsOnly": true,
                "limit": 5,
                "userId": 2707798,
                "_method": "POST",
                "_version": "5.0.5",
                "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g"
            }
        }).then( (response) => {
            dispatch({type: USER_PHOTOS_API_SUCCESS, userPhotos: response.data.result})
        }).catch(function (error) {
            dispatch({type: USER_PHOTOS_API_ERROR, error})
        });
    }
};

export const getPopularPhotos = () => {
    return (dispatch) => {
        dispatch({type: POPULAR_PHOTOS_API});
        axios({
            method: 'post',
            url: 'functions/feed/popular/load-batch',
            data: {
                "isThumbnailsOnly": true,
                "limit": 18,
                "_method": "POST",
                "_version": "5.0.5",
                "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g"
            }
        }).then( (response) => {
            dispatch({type: POPULAR_PHOTOS_API_SUCCESS, popularPhotos: response.data.result})
        }).catch(function (error) {
            dispatch({type: POPULAR_PHOTOS_API_ERROR, error})
        });
    }
};