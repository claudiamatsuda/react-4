// sagas
import { takeLatest, call, put } from 'redux-saga/effects';
import { showCharacters, REQUEST_CHARACTERS } from './types';

import Api from '../../utils/api';

function* getCharacters(action) {
  try {
    // const characters = ['saga1', 'saga2', action.payload];
    // console.log('estou no saga');
    const response = yield call(Api.nameStartsWith, action.payload);
    // console.log(response.data.data.results);
    yield put(showCharacters(response.data.data.results));
  } catch (err) {
    console.error(err);
  }
}

export const charactersSagas = [takeLatest(REQUEST_CHARACTERS, getCharacters)];
