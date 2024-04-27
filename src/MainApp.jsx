import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import About from "./components/About"

function MainApp() {
  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
