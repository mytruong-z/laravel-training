import React from "react";

import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import myReducer from './reducers/index';
import thunk from "redux-thunk";
import TodoContainer from './container/TodoContainer';

const store = createStore(myReducer, applyMiddleware(thunk));

const NgocApp: React.FC = () => {
	return (
		<Provider store={store as any}>
			<TodoContainer />
		</Provider>
	);
};

export default NgocApp;
