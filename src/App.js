import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="home">
      <div className="header">
        <div className="container">
          <Navbar></Navbar>
        </div>
      </div>  
      <div className="container">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
