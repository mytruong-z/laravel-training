import {ADD_TODO, COMPLETE_TODO, DELETE_TODO, FETCH_TODO} from "../types";
import fetchTodos from "../apis/fetchTodos";

export const addTodo = (title: string) => ({
    type: ADD_TODO,
    title
});

export const completeTodo = (index: number) => ({
    type: COMPLETE_TODO,
    index
});

export const deleteTodo = (index: number) => ({
    type: DELETE_TODO,
    index
});

export const fetchTodoApi = (limit:number, offset:number) => async (dispatch: any) => {

    return await fetchTodos(limit, offset)
        .then((data) => {
            return dispatch({type: FETCH_TODO, payload: {data: [...data], error: false}});

        }).catch((error) => {
            alert('Can not load list todo!');
            return dispatch({type: FETCH_TODO, payload: {data: [], error: true}})
        });
};