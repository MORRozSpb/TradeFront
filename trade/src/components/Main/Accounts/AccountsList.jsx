import React from 'react';
import AccountsListsItems from './AccountsListItem';

class AccountsList extends React.Component {

    render() {
        return (
            <div className='AccountsList table-responsive'>

                <AccountsListsItems />

            </div>)
    }

}

export default AccountsList;