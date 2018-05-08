import { FETCH_PATIENTS, NEW_PATIENT } from '../actions/types';

const initialState = {
    items: [],
    item:{}
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_PATIENTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_PATIENT:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}