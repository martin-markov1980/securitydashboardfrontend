import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleProject from './components/SingleProject';
import Login from './components/Login';
import useLoginLogic from './services/useLoginLogic';
import { useState, useEffect } from 'react';

function App() {

  const { user, email, setEmail, password, setPassword, emailError, passwordError, handleLogin, handleLogout, data, isLoading, errorMessage } = useLoginLogic('http://ec2-18-130-46-80.eu-west-2.compute.amazonaws.com:51000/api/json');

  const [status, setStatus] = useState(false);

  useEffect(() => {
    function myFunction() {
      setTimeout(function(){ setStatus(true) }, 1000);
    }
    myFunction()
  }, []);

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
              <Route exact path='/securitydashboardfrontend'>
                <Home data={data} isLoading={isLoading} errorMessage={errorMessage} />
              </Route>
              <Route path='/securitydashboardfrontend/projects/:name'>
                {errorMessage && <div>{errorMessage}</div>}
                {isLoading && 'Loading...'}
                {data && <SingleProject data={data} />}
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      :
      status && <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} emailError={emailError} passwordError={passwordError} />
  );

};

export default App;
