import { number } from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ShowInfoTable from './ShowInfoTable';
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
        return(
            <div className='showInfo'>
                {selectedDate ? <ShowInfoTable show={selectedDate}/> : 'it did not work'}
                <div>
                    <form onSubmit={()=>{handleCreateDate()}}>
                        <input type='text'
                        placeholder='Name'
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}></input>

                        <input type='number' 
                        placeholder='Amount of tickets'
                        // value={ticketInput}
                        onChange={(e) => setTicketAndPriceInput(Number(e.target.value))}></input>

                        <p type='number' 
                        placeholder='Price'
                        value={priceInput}
                        // onChange={(e) => setPriceInput(e.target.value)}
                        >{priceInput}
                        </p>

                        <select
                        value={statusInput}
                        onChange={(e) => setStatusInput(e.target.value)}
                        id="statusInput">
                            <option value="true" >Complete</option>
                            <option value="false" >Pending Payment</option>
                        </select>

                        <input type='text' 
                        placeholder='Method'
                        value={methodInput}
                        onChange={(e) => setMethodInput(e.target.value)}></input>

                        <button>Create Sale</button>
                    </form>
                </div>
                <button onClick={()=>{handleBackButton()}}>Back</button>
                <button onClick={()=>{handleDeleteButton(); console.log("Delete")}}>Delete Show</button>
            </div>
        )
}

export default ShowInfo;


{/* <Link className="navLink" to="/user">
Home
</Link> */}