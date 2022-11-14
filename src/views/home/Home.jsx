import React from 'react'

import './home.scss';

import { Link, Navigate } from 'react-router-dom';

import { auth } from '../../services/firebase';

const Salir = () => {
    return auth.signOut()
    Navigate('/')
};

const Home = (props) => {
    return (
        <div className='container-Home'>
            <h2 className='home-bienvenida'>
                {props.name 
                ? `Bienvenido - ${props.name}` 
                : 'Inicie Sesión'}
            </h2>
            <div className='container-login-logout'>
                <h2>
                    <Link className='titulos-home' to='/login'>Iniciar Sesion</Link>
                </h2>
                <br />
                <h2>
                    <Link className='titulos-home' to='/signup'>Registrarse</Link>
                </h2>
            </div>
            <button className='home-btn-salir' onClick={Salir}>Salir</button>
        </div>
    )
}

export default Home;