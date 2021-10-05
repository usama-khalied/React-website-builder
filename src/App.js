
import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import EditScreen from './editorScreen/EditScreen';
import { LandingPage } from './landingPage/LandingPage';
import PageSelectionScreen from './myComponents/PageSelectionScreen';
import Template1Page from './template1components/Template1Page'
import {LoginPage} from './loginPage/LoginPage'
import Preloader from './myComponents/Preloader';


export default function App() {

  const [temp, setTemp] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    console.log("CurrentTemp: ", temp);
  }, [temp]);
  
  return (
    <>
    {loaded ? null : <Preloader/>}
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage setLoaded={setLoaded}/>
          </Route>
          <Route exact path="/select-template">
            <PageSelectionScreen setTemp={setTemp} />
          </Route>
          <Route exact path='/edit'>
            <EditScreen temp={temp} />
          </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/preview'>
            <Template1Page />
          </Route>
        </Switch>
      </Router>
    </>
  );
}