import React from 'react';
import './Tools.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Tools() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const dates = useSelector(store => store.datesReducer)
    useEffect(() => {
        dispatch({ 
        type: 'GET_DATES',
    });
    }, []);

    console.log('################')
    console.log(dates)

return (
    <div className="container">
    <div id="toolContainer">
        <Link className="Tool" to="/DatePicker">Ticket Tracker</Link>
        <Link className="Tool" to="/gearChecker">Gear Checker</Link>
    </div>
    </div>
);
}

export default Tools;


{/* <Link className="navLink" to="/user">
Home
</Link> */}