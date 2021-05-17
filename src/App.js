import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleProject from './components/SingleProject';
import useFetch from './services/useFetchProjectsData';
import { useState, useEffect } from 'react';
import fire from './fire';
import Login from './Login';

function App() {

  const [data, isLoading, errorMessage] = useFetch('https://access-security-dashboard.herokuapp.com/api/json');

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
  }, [])

  const handleLogout = () => {
    fire.auth().signOut();
  };

  

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

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
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPassword(err.password);
            break;
          default:
            break;
        }
      });
  };
 
  return (
    user ?
      <Router>
        <div>
          <div className="nav">
            <div className="container">
              <Navbar handleLogout={handleLogout} />
            </div>
          </div>
          <div className="container">
            <Switch>
              <Route exact path='/'>
                <Home data={data} isLoading={isLoading} errorMessage={errorMessage} />
              </Route>
              <Route path='/projects/:name'>
                {errorMessage && <div>{errorMessage}</div>}
                {isLoading && 'Loading...'}
                {data && <SingleProject data={data} />}
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      : 
      data && <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} emailError={emailError} passwordError={passwordError} />
      
  );
};

export default App;
