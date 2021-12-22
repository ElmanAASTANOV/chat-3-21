import "./App.css";
import AllRoutes from "routing";
import { Provider } from "react-redux";
import {createStore} from "redux";

const initData = {
  groups: [],
  recents: [],
}

function reducer(store = initData, action){
  switch(action.type){
    case "setGroups":
      return {...store, groups: action.payload}
      case "setRecents":
        return {...store, recents: action.payload}   
    default: return store;
  }


}

const store = createStore(reducer);

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
