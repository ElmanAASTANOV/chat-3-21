import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "store/rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

export default store;