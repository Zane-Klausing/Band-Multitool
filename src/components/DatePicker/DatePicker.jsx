import React from 'react';
import './DatePicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Grid, TextField } from '@material-ui/core';


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function DatePicker() {

    const useStyles = makeStyles({
        Home: {
        background: "#aaa3b9",
        primary: '#aaa3b9',
        // color: 'white',
        padding: '6px',
        margin: '6px',
        boxShadow: '1px 2px 8px #111118F0'
        },
        NavLink:{
        color: 'white',
        padding: '1px',
        margin: '12px'
        },
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
            form:{
                padding:'5px',
                marginTop:'20px',
                marginLeft:'6px',
                width: '29%'
            }
    })
    const classes = useStyles();
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
        <Paper className={classes.form}>
        <form onSubmit={onDateCreate}>
        <TextField
        placeholder="Name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        />
        <TextField type="date"
        placeholder="Date"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        />
        <TextField type="number"
        placeholder="Ticket Price"
        value={priceInput}
        onChange={(e) => setPriceInput(e.target.value)}
        />
        <Button Button size='large' className={`${classes.btn1} ${classes.btn2}`} variant='contained' onClick={onDateCreate}>Create Date</Button>
    </form>
    </Paper>
        <div id="dateContainer">
        {dates?.map(date => {
            console.log(date)
                    return (
                        <Button variant="contained" className={classes.Home} id={date.id} onClick={()=>{goToDate(date)}}>
                            <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            >
                            <h1>{date.show_name}</h1>
                            <h2>{date?.date}</h2>
                            <h3>Ticket Price:${date['Ticket Price']}</h3>
                            </Grid>
                        </Button>
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