import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSaleInfo (action){
    try {
        const response = yield axios.get(`/showInfo/sales/${action.payload}`);
        console.log('getSaleInfo response data', response.data)
        yield put({
            type: 'SET_SALE',
            payload: response.data
        })
    }
    catch(err){
        console.log(err)
    }
}
function* updateSale(action){
    // get all movies from the DB
try {
    console.log('this is the updated info:', action.payload)
    const update = yield axios({
        method:'PUT',
        url: `/showInfo/sales/${action.payload.id}`,
        data: action.payload
    })
    console.log('updated info:', update.data);
} catch(error){
    console.log(error);
    }
}

function* deleteSale(action){
    try{
        const update = yield axios.delete(`/showInfo/sales/${action.payload}`);
        yield put({
            type: 'GET_SALE_INFO',
            payload: action.payload
    });
    }catch(err){
        console.log(err)
    }
}




function* saleInfoSaga() {
    yield takeLatest('GET_SALE_INFO', getSaleInfo);
    yield takeLatest('UPDATE_SALE_INFO', updateSale);
    yield takeLatest('DELETE_SALE', deleteSale);
}

export default saleInfoSaga;