import { composeWithDevTools } from 'redux-devtools-extension';
import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../../../redux/rootReducer';
import '../../../App.css';
import ChartPage from '../ChartPage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const Main = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<ChartPage />
			</div>
		</Provider>
	);
};

export default Main;
