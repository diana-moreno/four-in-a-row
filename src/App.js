import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TwoPlayers from './components/TwoPlayers/TwoPlayers';
import SinglePlayer from './components/SinglePlayer/SinglePlayer';
import Rules from './components/Rules/Rules';

function App() {
  return (
    <Fragment>
      <header>
        <h1>Four in a row</h1>
      </header>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Rules} />
          <Route exact path='/twoPlayers' component={TwoPlayers} />
          <Route exact path='/singlePlayer' component={SinglePlayer} />
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;