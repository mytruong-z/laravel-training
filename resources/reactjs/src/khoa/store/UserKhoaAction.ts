import {FETCH_USER, ADD_USER} from '../types';

import fetchUsers from "../apis/fetchUsers";

// export const addTodo = (title: string) => ({
//     type: ADD_TODO,
//     title
// });
//
// export const completeTodo = (index: number) => ({
//     type: COMPLETE_TODO,
//     index
// });
//
// export const deleteTodo = (index: number) => ({
//     type: DELETE_TODO,
//     index
// });

export const fetchUserApi = (page:number) => async (dispatch: any) => {

    return await fetchUsers(page)
        .then((data) => {
            return dispatch({type: FETCH_USER, payload: {data: [...data], error: false}});

        }).catch((error) => {
            alert('Can not load list todo!');
            return dispatch({type: FETCH_USER, payload: {data: [], error: true}})
        });
};


export const addUser = (email:string, name: string) => async (dispatch: any) => {

    // return await fetchUsers(page)
    //     .then((data) => {
    //         return dispatch({type: FETCH_USER, payload: {data: [...data], error: false}});
    //
    //     }).catch((error) => {
    //         alert('Can not load list todo!');
    //         return dispatch({type: FETCH_USER, payload: {data: [], error: true}})
    //     });
};
