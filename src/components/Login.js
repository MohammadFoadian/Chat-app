import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

// styles
import google from '../assets/google.svg'
import styles from "./Login.module.css"

const Login = () => { // 1
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome To ChatBot</h2>

                <div 
                className={styles.button}
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                    <img src={google} alt='googles'/> Sign In With Google
                </div>
            </div>

            
        </div>
    );
};

export default Login;