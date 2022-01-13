import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            
                    <form onSubmit={handleSubmit}>
                    <label for="nameInput">Name:</label>
                        <input type='text'
                        placeholder='Name'
                        value={saleToEdit.Name}
                        onChange={handleNameEdit}
                        id="nameInput"></input>
                        

                        <label for="amountInput">Amount:</label>
                        <input type='number' 
                        placeholder='Amount of tickets'
                        value={saleToEdit.Amount}
                        onChange={handleAmountEdit}
                        id="amountInput"></input>

                        <label for="priceInput">Price:</label>
                        <input type='number' 
                        placeholder='Price'
                        value={saleToEdit.Price}
                        onChange={handlePriceEdit}
                        id="priceInput"></input>

                        <label for="statusInput">Complete?:</label>
                        <select type='checkbox'
                        value={saleToEdit.status}
                        onChange={handleStatusEdit}
                        id="statusInput">
                            <option value="true" >Complete</option>
                            <option value="false" >Pending Payment</option>
                        </select>

                        <label for="methodInput">Method:</label>
                        <input type='text' 
                        placeholder='Method'
                        value={saleToEdit.method}
                        onChange={handleMethodEdit}
                        id="methodInput"></input>

                        <button>Edit Sale</button>
                    </form>
                    <button onClick={handleDelete}>Delete Sale</button>
            
            <button onClick={()=>{handleBackButton()}}>Back</button>
        </div>
    )
}

export default EditSale;






