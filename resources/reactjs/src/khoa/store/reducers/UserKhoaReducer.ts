import {UserState, initialState, Actions } from '../../models/user';
import {FETCH_USER, ADD_USER} from '../../types';

export default function UserKhoaReducer(state: UserState = initialState, action: Actions) {
    switch (action.type) {
        case ADD_USER:
            let newUser = {
                email: action.email,
                name: action.name,
            };
            if (typeof action.payload != "undefined") {
                return {error: action.payload.error, results: [...action.payload.data]};
            }

            return {error: false, results: []};
        case FETCH_USER:
            if (typeof action.payload != "undefined") {
                return {error: action.payload.error, results: [...action.payload.data]};
            }

            return {error: false, results: []};
        default:
            return state;
    }
};





