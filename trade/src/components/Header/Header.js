import logo from './logo.png';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div className='Header' >
            <div className='menuItem'><img src={logo} height='60px' /></div>
            <div className='menuItem' >Login</div>
            <div className='menuItem'>
                <NavLink to='catalogs'>Catalogs</NavLink>
            </div>
            <div className='menuItem'>
                <NavLink to = 'documents'>Documents</NavLink>
            </div>
            <div className='menuItem'>
                <NavLink to = 'reports'>Reports</NavLink>
            </div>
        </div>
    );
}

export default Header;

