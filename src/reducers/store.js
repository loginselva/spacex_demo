import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducer';

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        logger
    ),
  )

export default function configureStore(initialState) {
    return createStore(
        appReducer,
        initialState,
        enhancer
    )
}