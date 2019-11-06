// React imports 
import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
import { Provider } from 'react-redux';
import store from './redux/store';

import TodoApp from './TodoApp';

const rootElement = document.getElementById("root");


ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	rootElement
);