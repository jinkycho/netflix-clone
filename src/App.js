import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./components/views/NavBar/NavBar"
import LandingPage from './components/views/LandingPage/LandingPage'
import VideoPage from './components/views/VideoPage/VideoPage';

function App() {
  return (
      <Router>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/video/:title" component={VideoPage} />
          </Switch>
      </Router>
  );
}

export default App;
