import React from 'react';
import {  Switch, Route } from "react-router-dom";
import Home from '../components/screen/home' 

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      {/* <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/Projects">
        <Projects />
      </Route> */}
    </Switch>
  );
}
