import React, { useState } from 'react'

import './login.scss';

import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import InputControl from '../../components/inputControl/InputControl';

const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState(
        {
            email: '',
            pass: '',
        }
    );
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const loguearse =() => {
        if(!values.email || !values.pass) {
            setErrorMsg('Datos incompletos')
            return;
        }
        setErrorMsg('');
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res) => {
            setSubmitButtonDisabled(false);
            navigate('/');
        })
        .catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        })
    }
    return (
        <div className='container-Login'>
            <div className='innerBox'>
                <h1 className='headig'>Login</h1>
                <InputControl label='Email'
                onChange={(event) => setValues((prev) => 
                    ({...prev, email:event.target.value}))}
                placeholder='Ingrese su Correo'
                />
                <InputControl label='Contraseña'
                onChange={(event) => setValues((prev) => 
                    ({...prev, pass:event.target.value}))}
                placeholder='Ingrese su Contraseña'
                />
                <div className='footer'>
                    <b className='error'>{errorMsg}</b>
                    <button onClick={loguearse} 
                    disabled={submitButtonDisabled}
                    >
                        Login Btn
                    </button>
                    <p>Crear Cuenta
                        <span>
                            <Link to='/signup'> Registarse</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login