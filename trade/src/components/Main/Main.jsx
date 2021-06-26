import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../Login/Login'
import Accounts from '../Main/Accounts/Accounts'

class Main extends React.Component {
    render() {
        return(
            <div className = 'Main'>
                <Route path = '/login' component = {Login}/>              
                <Route path = '/accounts' component = {Accounts}/>                
            </div>
        );
    }
}

export default Main;