import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions

function* getShowDates(){
      // get all movies from the DB
    try {
        const dates = yield axios.get('/dates');
        console.log('get dates:', dates.data);
        yield put({ type: 'SET_DATES', payload: dates.data });

    } catch {
        console.log('get all error');
    }
        
}


function* createShow(action) {

}

function* showInfoSaga() {
    yield takeLatest('GET_DATES', getShowDates);
    yield takeLatest('CREATE_SHOW', createShow);
}

export default showInfoSaga;
