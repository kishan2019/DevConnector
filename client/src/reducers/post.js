import {
    GET_POST,
    POST_ERROR
} from '../actions/types';

const initialState = {
    post: [],
    posts: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case GET_POST:
        case POST_ERROR:
        default: 
        return {
            ...state,
            ...payload
        }
    }
}
