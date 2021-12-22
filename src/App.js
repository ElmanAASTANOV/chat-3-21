import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "routing";

function App() {
  // const [login, setLogin] = useState(false);

  // useEffect(() => {

  // }, [])

  return (
    <Router>
      <div className="App">
        <AllRoutes />
      </div>
    </Router>
  );
}

export default App;
