import { useState, useEffect } from 'react';
import fire from './fire';

const useLoginLogic = (url) => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setMessage] = useState(null);

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
          // Set the user and fetch the data from the backend
          setUser(user);
          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
          let urlencoded = new URLSearchParams();
          urlencoded.append("token", process.env.REACT_APP_FETCH_DATA_TOKEN);
          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
          };

          const abortCont = new AbortController();

          fetch(url, requestOptions, abortCont)
            .then((res) => {
              if (!res.ok) {
                throw Error(`Can't fetch data from that resource`);
              } else {
                return res.json();
              }
            })
            .then((data) => {
              setLoading(false);
              setMessage(null);
              setData(JSON.parse(data));
            })
            .catch((err) => {
              if (err.name === 'AbortError') {
                console.log('fetch aborted');
              } else {
                setData(null);
                setLoading(false);
                setMessage(err.message);
              }
            })

          return () => { abortCont.abort() };

        } else {
          setUser('');
        }
      });
    };
    authListener();
  });

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

  return { user, setUser, email, setEmail, password, setPassword, emailError, passwordError, handleLogin, handleLogout, data, isLoading, errorMessage }

}

export default useLoginLogic;
