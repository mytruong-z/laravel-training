import {TodoState, initialState, Actions } from '../../models/todo';
import {ADD_TODO, DELETE_TODO, COMPLETE_TODO, FETCH_TODO} from '../../types';

export default function TodoKhoaReducer(state: TodoState = initialState, action: Actions) {
    switch (action.type) {
        case ADD_TODO:
            let newTodo = {
                title: action.title,
                completed: false,
            };
            state.results.splice(0, 0, newTodo);
            return {error: false, results: [...state.results]};

        case COMPLETE_TODO:
            // state.results[action.index].completed = !state.results[action.index].completed;
            const newList = state.results.map((todo, index) => {
                return index === action.index ? { ...todo, completed: !todo.completed } : todo
            });

            return {error: false, results: newList};


        case DELETE_TODO:

            return {error: false, results: state.results.filter((todo, index) => index !== action.index)};

        case FETCH_TODO:
            if (typeof action.payload != "undefined") {
                return {error: action.payload.error, results: [...action.payload.data]};
            }

            return {error: false, results: []};
        default:
            return state;
    }
};





