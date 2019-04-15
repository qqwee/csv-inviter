import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from './session/components/Loading';

const MasterContainer = lazy(() => import('./layout/MasterContainer'));
const ErrorScreen = lazy(() => import('./session/components/ErrorScreen'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route exact path="/" component={MasterContainer}/>
        <Route path="*" component={ErrorScreen}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
