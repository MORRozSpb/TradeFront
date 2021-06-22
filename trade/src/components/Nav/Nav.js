import NavCatalogs from './NavCatalogs';
import NavDocuments from './NavDocuments';
import NavReports from './NavReports';
import {Route} from 'react-router-dom';

function Nav() {
    return (
        <div className = 'Nav'>
            <Route path = '/catalogs' component = {NavCatalogs}/>
            <Route path = '/documents' component = {NavDocuments}/>
            <Route path = '/reports' component = {NavReports}/>
        </div>
    )
}

export default Nav;