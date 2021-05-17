import { useState, useEffect } from 'react';
import fire from './fire';


const useLoginLogic = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  // Checking if the user is logged in or not
  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser('');
        }
      });
    };
    authListener();
  }, []);

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {

    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {

        let errorCode = err.code;
        let errorMessage = err.message;

        if (errorCode === 'auth/invalid-email') {
          setEmailError(errorMessage);
        } else if (errorCode === 'auth/user-not-found') {
          setEmailError(errorMessage);
        } else if (errorCode === 'auth/wrong-password') {
          setPasswordError(errorMessage);
        }

      });

  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  return { user, setUser, email, setEmail, password, setPassword, emailError, passwordError, handleLogin, handleLogout }

}

export default useLoginLogic;
