import React from 'react';
import RetailDashboard from './components/RetailDashboard/RetailDashboard';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas'
import { productsReducer } from './store/reducers';

const sagaMiddleware= createSagaMiddleware()
const store = createStore(productsReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
      <RetailDashboard/>
    </Provider>
  );
}

export default App;
