import React from 'react';
import './Tools.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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

    const useStyles = makeStyles({
        btn1: {
            primary: '#393444',
            color: 'Black',
            padding: '5px',
            margin: '6px',
            boxShadow: '1px 2px 8px #111118F0',
            cursor: 'pointer',
            backgroundSize: '200%',
            transition: '0.4s',
            '&:hover': {
            backgroundPosition: 'right'
            },
        },
            btn2:{
                backgroundImage: 'linear-gradient(45deg, #504860, #ffffff)'
            },
            NavLink:{
                color: 'Black',
                padding: '1px',
                margin: '8px'
            },
    
    })
    const classes = useStyles()

return (
    <div className="container">
    <div>
        <Button className={`${classes.btn1} ${classes.btn2}`} variant='contained' size='large'>
        <Link className={classes.NavLink} to="/DatePicker">Ticket Tracker</Link>
        </Button>
        <Button className={`${classes.btn1} ${classes.btn2}`} variant='contained' size='large'>
        <Link className={classes.NavLink} to="/gearChecker">Gear Checker</Link>
        </Button>
    </div>
    </div>
);
}

export default Tools;


{/* <Link className="navLink" to="/user">
Home
</Link> */}