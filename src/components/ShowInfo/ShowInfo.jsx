import { useEffect } from 'react';
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
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(params.id)
        dispatch({
            type: 'GET_SHOW_DATA',
            payload: params.id
        })
    }, [])

    function handleBackButton (){
        history.push(`/DatePicker`);
    }
        return(
            <div>
                {selectedDate ? <ShowInfoTable show={selectedDate}/> : 'it didnt work'}
                <div>
                    <form>
                        <input type='text' placeholder='Name'></input>
                        <input type='number' placeholder='Amount of tickets'></input>
                        <input type='checkbox'></input>
                        <input type='text' placeholder='Method'></input>
                    </form>
                </div>
                <button onClick={()=>{handleBackButton()}}>Back</button>
            </div>
        )
}

export default ShowInfo;


{/* <Link className="navLink" to="/user">
Home
</Link> */}