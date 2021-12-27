import "./App.css";
import AllRoutes from "routing";
import { Provider } from "react-redux";
import store from "store/store";



function App() {

  return (
    <Provider store = {store}>
      <div className="App">
        <AllRoutes />
      </div>
    </Provider>
  );
}

export default App;
