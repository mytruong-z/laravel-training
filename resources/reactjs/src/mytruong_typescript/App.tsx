import React from 'react';
import { Provider } from 'react-redux';
import Todo from './components/Todo';
import GlobalReducer from './store/reducers/GlobalReducer';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
	GlobalReducer,
	applyMiddleware(thunk)
);

const AppMy = () => {
	return <Provider store={store as any}>
		<Todo />
	</Provider>;
};
export default AppMy;