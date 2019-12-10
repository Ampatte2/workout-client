import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {NavBar} from "../components"
import {register, login, workout} from "../pages"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" exact component ={login}/>
        <Route path="/register" exact component = {register}/>
        <Route path="/workout" exact component = {workout}/>
      </Switch>
    </Router>
  );
}

export default App;
