import {applyMiddleware, legacy_createStore as Store} from 'redux'
import { reducer } from './Reducer'
import thunk from 'redux-thunk'

export const store= Store(reducer,applyMiddleware(thunk));