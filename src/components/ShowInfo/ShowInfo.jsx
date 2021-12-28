import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function ShowInfo() {
    const history = useHistory();
    const params = useParams();
    const selectedMovie = useSelector((store) => store.selectedMovie);
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(params.id)
        dispatch({
            type: 'GET_SHOW_DATA',
            payload: params.id
        })
    }, [])

    function handleBackButton (){
        history.push(`/`);
    }
        return(
            <div>
                <h1>{selectedMovie.title}</h1>
                <img src={selectedMovie.poster}></img>
                <h3>{selectedMovie.description}</h3>
                <button onClick={()=>{handleBackButton()}}>Back</button>
                {selectedMovie.genres.map((genre)=>{
                    return (
                        <li>{genre}</li>
                    )}
                )}
            </div>
        )
}

export default ShowInfo;


{/* <Link className="navLink" to="/user">
Home
</Link> */}