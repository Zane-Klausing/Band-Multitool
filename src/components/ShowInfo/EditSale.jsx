import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import './ShowInfo.css'
import { Button, Select, TextField } from '@material-ui/core';
function EditSale(){
    const params = useParams();
    const history = useHistory();
    const saleToEdit = useSelector(store => store.saleToEdit)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({
            type:'GET_SALE_INFO',
            payload: Number(params.id)
        })
    }, [])

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
    function handleBackButton (){
        history.push(`/showinfo/${saleToEdit.show_id}`);
    }

    const handleNameEdit = (e) => {
        dispatch({
            type: `UPDATE_NAME`,
            payload: e.target.value
        })
    }

    const handleAmountEdit = (e) => {
        dispatch({
            type: `UPDATE_AMOUNT`,
            payload: e.target.value
        })
    }
    const handlePriceEdit = (e) => {
        dispatch({
            type: `UPDATE_PRICE`,
            payload: e.target.value
        })
    }
    const handleStatusEdit = (e) => {
        dispatch({
            type: `UPDATE_STATUS`,
            payload: e.target.value
        })
    }
    const handleMethodEdit = (e) => {
        dispatch({
            type: `UPDATE_METHOD`,
            payload: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type:'UPDATE_SALE_INFO',
            payload: {
                id: Number(params.id),
                Name: saleToEdit.Name,
                Amount: Number(saleToEdit.Amount),
                Price: Number(saleToEdit.Price),
                status: saleToEdit.status,
                method: saleToEdit.method
            }
        })
        history.push(`/showinfo/${saleToEdit.show_id}`);
    }

    const handleDelete = (e) => {
        dispatch({
            type: `DELETE_SALE`,
            payload: params.id
        })
        history.push(`/showinfo/${saleToEdit.show_id}`);
    }

    return(
        <div className='editSale'>
            
                    <form onSubmit={handleSubmit}>
                    <label for="nameInput">Name:</label>
                        <TextField type='text'
                        placeholder='Name'
                        value={saleToEdit.Name}
                        onChange={handleNameEdit}
                        id="nameInput"></TextField>
                        

                        <label for="amountInput">Amount:</label>
                        <TextField type='number' 
                        placeholder='Amount of tickets'
                        value={saleToEdit.Amount}
                        onChange={handleAmountEdit}
                        id="amountInput"></TextField>

                        <label for="priceInput">Price:</label>
                        <TextField type='number' 
                        placeholder='Price'
                        value={saleToEdit.Price}
                        onChange={handlePriceEdit}
                        id="priceInput"></TextField>

                        <label for="statusInput">Complete?:</label>
                        <Select type='checkbox'
                        value={saleToEdit.status}
                        onChange={handleStatusEdit}
                        id="statusInput">
                            <option value="true" >Complete</option>
                            <option value="false" >Pending Payment</option>
                        </Select>

                        <label for="methodInput">Method:</label>
                        <TextField type='text' 
                        placeholder='Method'
                        value={saleToEdit.method}
                        onChange={handleMethodEdit}
                        id="methodInput"></TextField>

                        <Button Button className={`${classes.btn1} ${classes.btn2}`} variant='contained' onClick={handleSubmit}>Submit Sale</Button>
                    </form>
                    <Button Button className={`${classes.btn1} ${classes.btn2}`} variant='contained' onClick={handleDelete}>Delete Sale</Button>
            
            <Button className={`${classes.btn1} ${classes.btn2}`} variant='contained' onClick={()=>{handleBackButton()}}>Back</Button>
        </div>
    )
}

export default EditSale;






