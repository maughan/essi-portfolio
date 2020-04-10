import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Home,
  Shows,
  Editorials,
  Commercial,
  Info
} from './pages';
import './App.css';


function App() {
	return (
    <Router>
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/shows">
          <Shows />
        </Route>
        <Route path="/editorials">
          <Editorials />
        </Route>
        <Route path="/commercial">
          <Commercial />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

		
     
	);
}

export default App;
