import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import 'normalize.css'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
