import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
        <Redirect exact from="/" to="/home/" />

        <Route exact path="/home" component={() => <Home/>} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
