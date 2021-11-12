import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Views/Main';

const render = (App: () => JSX.Element) => {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById('root')
	);
};

render(Main);
