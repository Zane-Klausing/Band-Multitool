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


function* createShow(action){
    // get all movies from the DB
try {
    const dates = yield axios.post('/dates', action.payload);
    console.log('get dates:', dates.data);
    yield put({ type: 'GET_DATES'});

} catch(error){
    console.log(error);
    }
}


function* deleteShow(action){
    try {
        console.log('+_+_+_+_+_+_+_+_+')
        console.log(action.payload)
        const dates = yield axios.delete(`/dates/${action.payload}`);
        yield put({type: 'GET_DATES'});
    } catch(error){
        console.log(error);
        }
}


function* showDateSaga() {
    yield takeLatest('GET_DATES', getShowDates);
    yield takeLatest('CREATE_SHOW', createShow);
    yield takeLatest('DELETE_SHOW', deleteShow);
}

export default showDateSaga;
