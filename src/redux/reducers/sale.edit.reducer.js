const saleToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SALE':
            return action.payload;
        case 'UPDATE_NAME':
            return {...state, Name: action.payload}
        case 'UPDATE_AMOUNT':
            return {...state, Amount: action.payload}
        case 'UPDATE_PRICE':
            return {...state, Price: action.payload}
        case 'UPDATE_STATUS':
            return {...state, status: action.payload}
        case 'UPDATE_METHOD':
            return {...state, method: action.payload}
        default:
            return state;
    }
}
export default saleToEdit;