import { createStore, applyMiddleware } from 'redux'
import main from './../reducers/main.js'
import thunk from 'redux-thunk'
//import logger from 'redux-logger'
import { save, load } from 'redux-localstorage-simple'

const store = createStore(
	main,
	load({ states: ['favoriteIds'] }),
	applyMiddleware(
		thunk,
		//logger,
		save({ states: ['favoriteIds'] })
	)
)

export default store
