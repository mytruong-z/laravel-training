import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from 'react-redux';
import RootReducers from "./store/reducers/RootReducer";
import MainApp from "./components/MainApp";
import thunk from "redux-thunk";
import TodoReducers from './store/reducers/TodoReducers'

const store = createStore(
	combineReducers({TodoReducers}),
	applyMiddleware(thunk)
);

const Sen = () => {
	return (
		<Provider store={store as any}>
			<MainApp/>
		</Provider>
	);
};

export default Sen;