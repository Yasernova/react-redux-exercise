import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { heroes } from '../api/db';
import heroesSaga from '../sagas/heroes.saga';

export const setLoading = createAction('SET_LOADING');
export const fetchHeroes = createAction('FETCH_HEROES')
export const setHeroes = createAction('SET_HEROS');

const initialState = {
  loading: false,
  heroes,
}

const reducer = createReducer(initialState, {
  [setHeroes]: (state, { payload: heroes }) => ({ ...state, heroes }),
  [setLoading]: (state, { payload: loading }) => ({ ...state, loading }),
});

const saga = createSagaMiddleware()

const middleware = [saga];

const store = configureStore({ reducer, middleware });

saga.run(heroesSaga)

export default store;