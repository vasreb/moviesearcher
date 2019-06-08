import { createStore, applyMiddleware } from 'redux'
import main from './../reducers/main.js'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const initState = {}

const store = createStore(main, initState, applyMiddleware(thunk, logger))

export default store
