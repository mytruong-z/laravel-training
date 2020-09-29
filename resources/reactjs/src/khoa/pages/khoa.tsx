import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalReducer from '../store/reducers/GlobalReducer';
import TodoApp from '../components/TodoApp';
import thunk from 'redux-thunk';

const  store= createStore(GlobalReducer, applyMiddleware(thunk));

const ReactTodo = () => {
    return (
        <Provider store={store as any}>
            <TodoApp/>
        </Provider>
    );
};

export default ReactTodo;