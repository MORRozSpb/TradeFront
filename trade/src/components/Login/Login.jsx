import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {login: 'admin',
                      password: ''};

        this.handleChangeLogin    = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit         = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        disableDefaultFormValidation();
    }

    handleSubmit(event) {
        // alert(`Login is ${this.state.login} pass is ${this.state.password}`);
        event.preventDefault();
        event.stopPropagation();
        authorize(this.state);
    }

    handleChangeLogin(e) {
      
        this.setState({login: e.target.value});
    }

    handleChangePassword(e) {
      
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div className='Login'>
                <form className="popup_login needs-validation" noValidate onSubmit = {this.handleSubmit} id='modal'>
                    <div className='mb-3'>
                        <label htmlFor='login' className='form-label'>login</label>
                        <input type='login' className='form-control' id='login' value = {this.state.login} onChange = {this.handleChangeLogin} required></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>password</label>
                        <input type='password' className='form-control' id='password' value = {this.state.password} onChange = {this.handleChangePassword} required></input>
                    </div>

                    <button className="btn btn-outline-info" type='submit'>Login</button>

                    <div className="status" id = 'status'>
                        <p id = 'error'></p>    
                    </div>
                </form>
            </div>
        );
    }
}


export default Login;


function disableDefaultFormValidation() {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
}


function readData(data) {

    var status = document.getElementById('status');
    var error = document.getElementById('error');

    console.log((data));

    if (data.status === '403') {
        console.log(`error 403`);
        error.innerHTML = '403';
        status.classList.add('noSuccess');
    } else {
        console.log(`200`);
        error.innerHTML = 'success';
        status.classList.add('success');   
        localStorage.setItem('token', data.token);
    }
  

}

function authorize(formData) {

    const adress = 'http://93.100.213.197:9090/api/v1/auth/login';

    var bodyCreds = {
        "login": formData.login,
        "password": formData.password
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