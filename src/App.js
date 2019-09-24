import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Twoplayers from './Twoplayers';
import singlePlayer from './components/SinglePlayer/SinglePlayer';
import Rules from './components/Rules/Rules';

function App() {
  return (
    <Fragment>
      <header>
        <h1>Four in a row</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path='/' component={Rules} />
          <Route exact path='/twoplayers' component={Twoplayers} />
          <Route exact path='/singleplayer' component={singlePlayer} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;