import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from '../services/firebase';

import Home from '../views/home/Home';
import Login from '../views/login/Login';
import SignUp from '../views/signUp/SingUp';

const MyRoutes = () => {
    const [userName, setUserName] = useState([]);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName)
            } else {
                setUserName('')
            }
        })
    }, [])

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home name={userName}/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes