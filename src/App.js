import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleProject from './components/SingleProject';
import useFetch from './services/useFetchProjectsData';
import Login from './components/Login';
import useLoginLogic from './services/useLoginLogic';

function App() {

  const { data, isLoading, errorMessage } = useFetch('https://access-security-dashboard.herokuapp.com/api/json');

  const { user, email, setEmail, password, setPassword, emailError, passwordError, handleLogin, handleLogout } = useLoginLogic();

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
      data && <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} emailError={emailError} passwordError={passwordError} />
  );

};

export default App;
