/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StateProvider } from './context';
import IndexPage from './components/IndexPage';
import Reducer from './reducers/Reducer';
import CreateBar from './components/CreateBar';
import JoinBar from './components/JoinBar';
import Bar from './components/Bar';
import Game from './components/Game';
import Understood from './components/Understood';

const App = () => {
  const initialState = {
    sessionId: 'no session yet',
    token: 'no token yet',
    key: 'no key yet',
    barName: 'no name yet',
    userName: 'no user name yet',
  };

  return (
    <StateProvider value={useReducer(Reducer, initialState)}>
      <Router>
        <Route path="/" component={IndexPage} exact />
        <Route path="/createbar" component={CreateBar} />
        <Route path="/joinbar" component={JoinBar} />
        <Route path="/bar" component={Bar} />
        <Route path="/game" component={Game} />
        <Route path="/understood" component={Understood} />
      </Router>
    </StateProvider>
  );
};

export default App;
