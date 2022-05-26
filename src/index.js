import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store';

import App from './App';
import { theme } from './constants/theme';
import { refs } from './constants/refs';

import './index.css';
// import AppContainer from './components/AppContainer/AppContainer';

const root = ReactDOM.createRoot(refs.root);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
