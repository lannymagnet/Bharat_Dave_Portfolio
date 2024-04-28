import React, {Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import About from "./components/About";
import Resume from "./components/Resume";

function MainApp() {
  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
