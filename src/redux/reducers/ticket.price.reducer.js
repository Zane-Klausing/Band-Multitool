const selectedTicketPrice = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TICKET_PRICE':
            return action.payload;
        default:
            return state;
    }
}
export default selectedTicketPrice;