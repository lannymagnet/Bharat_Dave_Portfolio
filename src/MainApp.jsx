import React, {Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import About from "./components/About";
import Resume from "./components/Resume";
import Experience from './components/Experience';
import Skills from "./components/Skills";

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
            <Route path="/experience" component={Experience} />
            <Route path="/skills" component={Skills} />
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
