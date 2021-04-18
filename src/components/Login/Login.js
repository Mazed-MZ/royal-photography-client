import React, { useContext } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {

    const [loginUser,setLoginUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();

    const [user, setUser] = useState({
        name:'',
        email:'',
    })

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser =
                {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoginUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <main className='login-form'>
            <img id='logo-img' src="https://i.ibb.co/WPMrSqh/unnamed.png" alt="" /><br />
            <Button onClick={handleGoogleSignin} color="primary"><img src="https://i.ibb.co/q7PnhhN/search.png" alt="" /> <h3>Continue with Google</h3></Button>
        </main>
    );
};

export default Login;