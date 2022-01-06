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
        }
        })
    }
    function goToDate (id){
        dispatch({
            type: 'GET_SHOW_DATA',
            payload: id
        })
        history.push(`/showinfo/${id}`);
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
        <button>Create Date</button>
    </form>
        <div id="dateContainer">
        {dates?.map(date => {
                    return (
                        <div class="Date" id={date.id} >
                            <h3 onClick={()=>{goToDate(date.id)}}>{date?.date}</h3>
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