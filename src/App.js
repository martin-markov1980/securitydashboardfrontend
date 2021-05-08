import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProject from './components/SingleProject';
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setMessage] = useState(null);

  // Fetching the projects data from the endpoint

  useEffect(() => {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    let urlencoded = new URLSearchParams();
    urlencoded.append("token", "S63ztyBQROGHLRyLctgel7GGFq7Kaozj");
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    const abortCont = new AbortController();

    fetch('https://access-security-dashboard.herokuapp.com/api/json', requestOptions, abortCont)
      .then(res => {
        if (!res.ok) {
          throw Error(`Can't fetch data from that resource`);
        } else {
          return res.json()
        }

      })
      .then(data => {
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

    return () => { abortCont.abort() }

    // eslint-disable-next-line
  }, ['https://access-security-dashboard.herokuapp.com/api/json']);

  return (
    <Router>
      <div>
        <div className="nav">
          <div className="container">
            <Navbar />
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route exact path='/'>
              <Home data={data} isLoading={isLoading} errorMessage={errorMessage} />
            </Route>
            <Route path='/projects/:name'>
              {errorMessage && <div>{errorMessage}</div>}
              {isLoading === true && 'Loading...'}
              {data && <SingleProject data={data} />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
