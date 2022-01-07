import { createStore, combineReducers } from 'redux';
import employeeReducer from './reducers/employeeResucer';

const rootReducer = combineReducers({ employee: employeeReducer });
const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
