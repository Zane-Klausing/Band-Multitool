import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ShowInfo.css'
import { Button, Paper, Table, TableBody, TableHead } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
function ShowInfoTable(prop){
    const history = useHistory();
    const params = useParams();
    const showDate = prop.show;
function handleEditClick(sale){
    history.push(`/editSale/${sale.ID}`)
}

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

})
const classes = useStyles()


return (
    <Table>
    <TableHead className='tableHead'>
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
        </TableHead>
    <TableBody >
        {showDate?.map((sale)=> 
        <tr className='tableBody'>
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
                <Button className={`${classes.btn1} ${classes.btn2}`} variant='contained' onClick={()=>{handleEditClick(sale)}}>
                    Edit
                </Button>
            </td>
        </tr>
        )}
    </TableBody>
</Table>
)

}
export default ShowInfoTable;