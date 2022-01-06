import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions

function* fetchShowDetails(action){
    try {
        const response = yield axios.get(`/showInfo/${action.payload}`);
        console.log('Date details:', response.data);
        yield put({ type: 'SET_SELECTED_DATE', payload: response.data });
        
} catch (err){
    console.log('GET DATE DETAILS ERROR');
    console.log(err)
}
}





function* showInfoSaga() {
    yield takeLatest('GET_SHOW_DATA', fetchShowDetails);
}

export default showInfoSaga;
