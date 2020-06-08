import { combineReducers } from 'redux';
import { eventReducer } from './events'
import {operationLogs} from './operationLogs'

export const rootReducer = combineReducers({events: eventReducer, operationLogs: operationLogs});

