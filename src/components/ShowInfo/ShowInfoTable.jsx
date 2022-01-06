function ShowInfoTable(prop){
console.log('++++++++++++++++++++++++++++++')
console.log('++++++++++++++++++++++++++++++')
console.log(prop)
const showDate = prop.show;

return (
    <table>
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
        </tr>
        )}
    </tbody>
</table>
)

}
export default ShowInfoTable;