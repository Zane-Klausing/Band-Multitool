import React from 'react';
import './DatePicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { user } from 'pg/lib/defaults';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function DatePicker() {
    const dates = useSelector(store => store.datesReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ 
        type: 'GET_DATES',
    });
    }, []);
    console.log('#################')
    console.log(dates)
return (
    <div className="container">
        <div id="dateContainer">
        {/* {dates.map(date => {
                    return (
                        <div class="Date" key={date?.id} >
                            <h3>{date?.date}</h3>
                        </div>
                    );
                })} */}
                <div class="Date" >
                            <h3>{dates[0]?.date}</h3>
                        </div>
        </div>
    </div>
);
}

export default DatePicker;


{/* <Link className="navLink" to="/user">
Home
</Link> */}