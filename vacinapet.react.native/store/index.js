import { createStore, combineReducers } from 'redux';

import firebase from './reducers/FirebaseReducer';

export default createStore(combineReducers({ firebase }));