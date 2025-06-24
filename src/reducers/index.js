import { combineReducers } from 'redux';
import {counterReducer}from './counterReducer'
import {cardReducer} from './cardReducer'

let rootReducer = combineReducers({counterR : counterReducer , card : cardReducer });

export default rootReducer;