import {createStore, applyMiddleware} from 'redux';
import { rootReducer } from './redusers';
import createSagaMiddleware from '@redux-saga/core'
import rootWatcher from '../sagas';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export {store};

sagaMiddleware.run(rootWatcher)