import "./App.css";
import Main from 'pages/Main';
import Login from 'pages/Login';
import { useState } from 'react';


function App() {
  const [login, setLogin] = useState(false);

  // useEffect(() => {
    
  // }, [])

  return (
    <div className="App">
      {login ? <Login setLogin = {setLogin}/> : <Main />} 
    </div>
  );
}

export default App;
