import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logos/logo.png';
import { googleSignIn, initializeLogInFramework } from './firebase';

const Login = () => {
    initializeLogInFramework();
    const { user } = useContext(userContext);
    const [loggedinUser, setLoggedinUser] = user;

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(user => {
                if (user.loggedIn) {
                    setLoggedinUser(user);
                    history.replace(from);
                }
            });
    }
    return (
        <div className="formContainer">
            <img src={logo} alt="" width="20%" />
            <div className="form">
                <h3>Login With</h3>
                <div className="fireAuth">
                    <div className="mr-auto authLogo">
                        <img
                            src="https://raw.githubusercontent.com/kaziMashry/travel-guru-simple/master/src/images/Icon/google.png"
                            alt=""
                            width="40"
                        /></div>
                    <div className="authTitle" onClick={handleGoogleSignIn}><h5>Continue with Google</h5></div>
                </div>
            </div>
        </div>
    );
};

export default Login;