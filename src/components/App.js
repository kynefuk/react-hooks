import React, { useReducer, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { rootReducer } from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
import {OperationLogs} from './OperationLogs';

const STATE_KEY = 'appWithRedux';

const App = () => {
  const appState = JSON.parse(localStorage.getItem(STATE_KEY));
  const initialState = appState ?? {
    events: [],
    operationLogs: []
  };
  
  const [state, dispatch] = useReducer(rootReducer, initialState);
  
  useEffect(() => {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='container-fluid'>
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
