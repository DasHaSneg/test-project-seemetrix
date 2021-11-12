import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../../../redux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Main = () => {
	return (
		<Provider store={store}>
			<div className="app">

			</div>
		</Provider>
	);
};

export default Main;
