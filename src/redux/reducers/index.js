import {combineReducers} from 'redux';
import { pizzaReducer } from '../reducers/pizzaReducer'

export const rootReducer = combineReducers({
  main: pizzaReducer,
})
