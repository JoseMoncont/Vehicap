import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Carros from './pages/Carros';
import Login from './pages/Login';
import Landing from './pages/LandingPage';

//Renderizamos y definimos las rutas de nuestras páginas

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Route
          path="/carros"
          render={(props) => <Carros {...props} />}
        />
        <Route
          path="/landing"
          render={(props) => <Landing {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} />}
        />
        
        <Redirect to="/home" />
        <Redirect from="/" to="/home" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


