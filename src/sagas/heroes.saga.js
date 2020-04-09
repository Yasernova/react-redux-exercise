import { takeLatest, put, call } from 'redux-saga/effects';

import { fetchHeroes, setLoading, setHeroes } from '../store';
import { search } from '../api';

function* handleFetchHeros({ payload }) {
  try {
    yield put(setLoading(true))
    const heroes = yield call(search, payload);
    yield put(setHeroes(heroes));
  } finally {
    yield put(setLoading(false));
  }
}


export default function* () {
  yield takeLatest(fetchHeroes, handleFetchHeros);
}