import { Button, Input, Paper, Select, TextField, Typography } from '@material-ui/core';
import { number } from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ShowInfoTable from './ShowInfoTable';
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function ShowInfo() {
    const history = useHistory();
    const params = useParams();
    const selectedDate = useSelector((store) => store.selectedDate);
    const ticketPrice = useSelector((store)=> store.selectedTicketPrice)
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(params.id)
        dispatch({
            type: 'GET_SHOW_DATA',
            payload: params.id
        })
    }, [])
    console.log(ticketPrice)
    const[nameInput, setNameInput] = useState('');
    const[ticketInput, setTicketInput] = useState (0);
    const[priceInput, setPriceInput] = useState(0);
    const[statusInput, setStatusInput] = useState (false);
    const[methodInput, setMethodInput] = useState('');

    function handleBackButton (){
        history.push(`/DatePicker`);
    }
    function handleDeleteButton (){
        dispatch({
            type: 'DELETE_SHOW',
            payload: params.id
        })
        history.push(`/DatePicker`);
    }
    function handleCreateDate(){
        let sale = {
            Name: nameInput,
            Amount: Number(ticketInput),
            Price: Number(priceInput),
            status: Boolean(statusInput),
            method: methodInput,
            id: params.id
        }
        dispatch({
            type:'CREATE_SALE',
            payload: sale
        })
        setNameInput('')
        setTicketAndPriceInput(0)
        setStatusInput(false)
        setMethodInput('')
        console.log(sale)
    }
    function setTicketAndPriceInput(value){
        setTicketInput(value)
        const calculatedPrice = ticketPrice * value
        console.log('calculatedPrice =', calculatedPrice)
        setPriceInput(calculatedPrice)
        console.log(priceInput)

    }
    const useStyles = makeStyles({
        table: {
            background: '#c6c1d1',
            width: '100%',
            alignItems:'center',
            justifyContent:'center'
        },
        form:{
            width: '118%',
            height: '90%',
            background: '#5b526d'
        },
        gridLeft:{
            marginRight: '1.25%',
            marginLeft: '1.25%'
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
            inputStyled:{
                color: 'black',
                '&::placeholder': {
                    color: 'black'
                }
            }
    })
    const classes = useStyles()
        return(
            <div className='showInfo'>
                <Grid container>
                    <Grid item xs={8} className={classes.gridLeft}>
                        <Paper className={classes.table}>
                        {selectedDate ? <ShowInfoTable show={selectedDate}/> : 'it did not work'}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                <Paper className={classes.form}>
                    <form className='showInfoForm'>
                        <div className='showInfoFormChild'>
                            <TextField type='text'
                            className={classes.inputStyled}
                            placeholder='Name'
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}></TextField>

                            <Input  type='number' 
                            className={classes.inputStyled}
                            placeholder='Amount of tickets'
                            // value={ticketInput}
                            onChange={(e) => setTicketAndPriceInput(Number(e.target.value))}></Input>

                            <TextField 
                            className={classes.inputStyled}
                            type='text' 
                            placeholder='Method'
                            value={methodInput}
                            onChange={(e) => setMethodInput(e.target.value)}></TextField>

                            <Select
                            value={statusInput}
                            onChange={(e) => setStatusInput(e.target.value)}
                            id="statusInput">
                                <option value="true" >Complete</option>
                                <option value="false" >Pending Payment</option>
                            </Select>
                        </div>
                        <div className='showInfoFormChild'>
                            <Paper className={`${classes.table} total`}>
                                <Typography 
                                align='center'
                                variant='h4'
                                className='showInfoFormChild'
                                value={priceInput}
                                // onChange={(e) => setPriceInput(e.target.value)}
                                >Ticket Price Total: {priceInput}
                                </Typography>
                            </Paper>
                        </div>
                        <div className='showInfoFormChild'>
                            <Button 
                            className={`${classes.btn1} ${classes.btn2}`}
                            onClick={()=>{handleCreateDate()}}
                            variant='contained'
                            size='large'
                            >Create Sale</Button>
                        </div>
                    </form>

                </Paper>
                <Button size='large' className={`${classes.btn1} ${classes.btn2}`} variant='contained' onClick={()=>{handleBackButton()}}>Back</Button>
                <Button size='large' className={`${classes.btn1} ${classes.btn2}`} variant='contained' onClick={()=>{handleDeleteButton(); console.log("Delete")}}>Delete Show</Button>
                </Grid>
                </Grid>

            </div>
        )
}

export default ShowInfo;


{/* <Link className="navLink" to="/user">
Home
</Link> */}