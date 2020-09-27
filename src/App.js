import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Importing components
import Header from "./shared/header";
import ErrorBoundary from "./shared/errorHandler";
import ProjectsContainer from "./containers/projectsContainer";
import FormContainer from "./containers/formContainer";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Header/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>

               <Route path="/create" component={FormContainer}></Route>
               <Route path="/" component={ProjectsContainer}>
              </Route>
            </Switch>
        </Router>
        </ErrorBoundary>
    </div>
  );
}

export default App;
