
function Login() {
    return (
        <div className='Login'>
            <div class="popup_login" id='modal'>
                <div class = 'mb-3'>
                    <label for ='login' class = 'form-label'>login</label>
                    <input type ='login' class = 'form-control' id ='login'></input> 
                </div>
                <div class = 'mb-3'>
                    <label for ='password' class = 'form-label'>password</label>
                    <input type ='password' class = 'form-control' id ='password'></input> 
                </div>
                
                <button class="btn btn-outline-info">Login</button>
            </div>
        </div>
    );
}

export default Login;