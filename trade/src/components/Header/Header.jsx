import logo from './logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='Header' >
            <div className='menuItem'><img src={logo} height='60px' alt='Logo' /></div>
            <div className='menuItem'>
                <NavLink to='login'>Login</NavLink>
            </div>
            <div className='menuItem'>
                <NavLink to='catalogs'>Catalogs</NavLink>
            </div>
            <div className='menuItem'>
                <NavLink to='documents'>Documents</NavLink>
            </div>
            <div className='menuItem'>
                <NavLink to='reports'>Reports</NavLink>
            </div>
            <div className='menuItem'>
                <NavLink to='accounts'>Accounts</NavLink>
            </div>
        </div >
    );
}

export default Header;

