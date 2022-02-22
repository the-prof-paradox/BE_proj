import React from 'react';
import Navbar from './Navbar';
import Similarity from './Similarity';
import Tagging from './Tagging';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/">
            <Similarity/>
          </Route>
          <Route exact path="/similarity">
            <Similarity/>
          </Route>
          <Route exact path="/tagging">
            <Tagging/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
