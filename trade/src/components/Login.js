
function Login() {
    return (
        <div className='Login'>
            <div className="popup_login" id='modal'>
                <div className='mb-3'>
                    <label htmlFor='login' className='form-label'>login</label>
                    <input type='login' className='form-control' id='login'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>password</label>
                    <input type='password' className='form-control' id='password'></input>
                </div>

                <button className="btn btn-outline-info" onClick={onClick}>Login</button>
            </div>
        </div>
    );
}

export default Login;

function onClick() {
    const adress = 'http://93.100.213.197:9090/api/v1/auth/login';

    var bodyCreds = {
        "login": "admin",
        "password": "123!!!123"
    };

    var obj = {
        method: 'POST',
        body: JSON.stringify(bodyCreds),
        // mode: 'no-cors',
        headers: {
            // 'Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
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

}