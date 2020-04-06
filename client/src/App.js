import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import SignIn from "./componennts/signIn";
import SignUp from "./componennts/signUp";
import Home from "./componennts/Home";
import Profile from "./componennts/Profile";
import Guesthome from "./componennts/Guesthome";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={() => <Guesthome />} />
        <Route exact path="/login" render={() => <SignIn />} />
        <Route exact path="/register" render={() => <SignUp />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
