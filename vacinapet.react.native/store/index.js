import { createStore, combineReducers } from 'redux';

import database from './reducers/DatabaseReducer';

export default createStore(combineReducers({ database }));