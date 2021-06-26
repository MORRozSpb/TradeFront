 
import State from '../State/State'
 
function AccountsListItem() {
    
    var listItems = State.accounts.map((account) => 
    <tr>
        <td scope ='row'>
            {account.login}
        </td>
        <td>
            {account.name}
        </td>
        <td>
            {account.surname}
        </td>
        <td>
            {account.email}
        </td>
        <td>
            {account.phoneNumber}
        </td>
    </tr>
    );

 
    return(
        <tr className = 'AccountsListItem'>
            <table className="table table-light table-striped table-hover">
                    <tbody>

                        <tr className = 'table table-title'>
                            <td scope ='col'>login</td>
                            <td scope ='col'>name</td>
                            <td scope ='col'>surname</td>
                            <td scope ='col'>email</td>
                            <td scope ='col'>phoneNumber</td>
                        </tr>

                        {listItems} 

                    </tbody>
                </table>            
        </tr>
    )
 

};

export default AccountsListItem;