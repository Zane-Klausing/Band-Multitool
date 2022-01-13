const datesReducer = (state = [{id: null, date: null, ticketPrice: null}], action) => {
    switch (action.type) {
        case 'SET_DATES':
            return action.payload;
        default:
            return state;
    }
}
export default datesReducer;