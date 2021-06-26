import React from 'react';
import AccountsList from './AccountsList';

class Accounts extends React.Component {
   
    componentDidMount() {
        // fetchData();
    }
   
   
    render() {
        return (
            <div className = 'Accounts container-xl' >
                <h2>Accounts</h2>
               <AccountsList />
            </div>
        )
    }
}

export default Accounts;

function fetchData () {

    const adress = 'http://93.100.213.197:9090/api/v1/users';

    var token = 'Bearer_' + localStorage.getItem('token');
    

    var obj = {
        method: 'GET',        
        // mode: 'no-cors',
        headers: {
            // 'Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
            'Authorization' : token
        }
    };

    fetch(adress, obj)
        .then((response) => { return response.json() })
        .then((data) => { readData(data) })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);

        });
}

function readData(data) {

    

    console.log((data));

    if (data.status === '403') {
        console.log(`error 403`);
        
        
    } else {
        console.log(`200`);      
        
    }


}