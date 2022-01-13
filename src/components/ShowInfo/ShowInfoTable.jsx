import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ShowInfo.css'
function ShowInfoTable(prop){
    const history = useHistory();
    const params = useParams();
    const showDate = prop.show;
function handleEditClick(sale){
    history.push(`/editSale/${sale.ID}`)
}

return (
    <table className='showInfoTable'>
    <thead>
        <tr>
            <td>
                Name
            </td>
            <td>
                Ticket Amount
            </td>
            <td>
                Price
            </td>
            <td>
                Status
            </td>
            <td>
                Method
            </td>
            <td>
                Actions
            </td>
        </tr>
    </thead>
    <tbody>
        {showDate?.map((sale)=> 
        <tr>
            <td>
                {sale?.Name}
            </td>
            <td>
                {sale?.Amount}
            </td>
            <td>
                {sale?.Price}
            </td>
            <td>
                {sale?.status ? 'Sale Finished' : 'Pending Payment'}
            </td>
            <td>
                {sale?.method}
            </td>
            <td>
                <button onClick={()=>{handleEditClick(sale)}}>
                    Edit
                </button>
            </td>
        </tr>
        )}
    </tbody>
</table>
)

}
export default ShowInfoTable;