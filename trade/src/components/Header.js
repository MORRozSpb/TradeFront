import logo from '../logo.png';

function Header() {
    return (
        <div className='Header' >            
                <div className='menuItem'><img src={logo} height = '60px'/></div>
                <div className='menuItem' >Login</div>
                <div className='menuItem'>Catalogs</div>
                <div className='menuItem'>Documents</div>
                <div className='menuItem'>Reports</div>
        </div>
    );
}

export default Header;

