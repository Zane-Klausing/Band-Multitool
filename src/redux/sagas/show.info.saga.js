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
function* createSaleDetails(action){
    try {
        console.log('CREATE SALE ACTION.PAYLOAD:',action.payload)
        const response = yield axios.post(`/showInfo/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_SHOW_DATA', payload:action.payload.id});
        console.log(response)
        
} catch (err){
    console.log('GET DATE DETAILS ERROR');
    console.log(err)
}
}





function* showInfoSaga() {
    yield takeLatest('GET_SHOW_DATA', fetchShowDetails);
    yield takeLatest('CREATE_SALE', createSaleDetails);
}

export default showInfoSaga;
