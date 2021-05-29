import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setMessage] = useState(null);

  // Fetching the projects data from the endpoint
  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    let urlencoded = new URLSearchParams();
    urlencoded.append("token", process.env.REACT_APP_FETCH_DATA_TOKEN);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
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

    // eslint-disable-next-line
  }, ['https://access-security-dashboard.herokuapp.com/api/json']);

  return { data, isLoading, errorMessage };

}

export default useFetch;

