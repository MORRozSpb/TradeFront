import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 'a'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        disableDefaultFormValidation();
    }

    handleSubmit(event) {
        alert(`Login is ${this.state.value}`);
        event.preventDefault();
        event.stopPropagation();
    }

    handleChange(e) {
      
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className='Login'>
                <form className="popup_login needs-validation" noValidate onSubmit = {this.handleSubmit} id='modal'>
                    <div className='mb-3'>
                        <label htmlFor='login' className='form-label'>login</label>
                        <input type='login' className='form-control' id='login' value = {this.state.value} onChange = {this.handleChange} required></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>password</label>
                        <input type='password' className='form-control' id='password' required></input>
                    </div>

                    <button className="btn btn-outline-info" type='submit'>Login</button>

                    <div className="valid-feedback">
                        
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

    console.log((data));

}

function authorize() {

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