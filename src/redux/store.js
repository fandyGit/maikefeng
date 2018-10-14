import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {user} from './reducers'

export default createStore(user,composeWithDevTools(applyMiddleware(thunk)))

