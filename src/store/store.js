import { createStore } from "redux";
import reducer from "store/reducers/reducer";

const store = createStore(reducer);

export default store;