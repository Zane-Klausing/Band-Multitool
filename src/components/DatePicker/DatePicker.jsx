import React from 'react';
import './DatePicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function DatePicker() {
    const history = useHistory();
    const[nameInput, setNameInput] = useState('');
    const[dateInput, setDateInput] = useState ('');
    const[priceInput, setPriceInput] = useState ('');

    const dates = useSelector(store => store.datesReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ 
        type: 'GET_DATES',
    });
    }, []);
    // console.log('#################')
    // console.log(dates)

    const onDateCreate = (e) => {
        e.preventDefault();
        dispatch({
        type: 'CREATE_SHOW',
        payload: { 
            name: nameInput,
            date: dateInput,
            ticketPrice:priceInput
        }
        })
    }
    function goToDate (date){
        dispatch({
            type: 'SET_TICKET_PRICE',
            payload: date['Ticket Price']
        })
        dispatch({
            type: 'GET_SHOW_DATA',
            payload: date.id
        })
        history.push(`/showinfo/${date.id}`);
    }
return (
    <div className="container">
        <form onSubmit={onDateCreate}>
        <input
        placeholder="Name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        />
        <input type="date"
        placeholder="Date"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        />
        <input type="number"
        placeholder="Ticket Price"
        value={priceInput}
        onChange={(e) => setPriceInput(e.target.value)}
        />
        <button>Create Date</button>
    </form>
        <div id="dateContainer">
        {dates?.map(date => {
            console.log(date)
                    return (
                        <div class="Date" id={date.id} onClick={()=>{goToDate(date)}}>
                            <h2>{date?.date}</h2>
                            <h3>Ticket Price:${date['Ticket Price']}</h3>
                        </div>
                    );
                })}
                {/* <div class="Date" >
                            <h3>{dates[0]?.date}</h3>
                        </div> */}
        </div>
    </div>
);
}

export default DatePicker;


{/* <Link className="navLink" to="/user">
Home
</Link> */}