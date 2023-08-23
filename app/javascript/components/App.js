// app/javascript/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from '../static/Index';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/greeting" component={Greeting} />
    </Router>
  );
};

export default App;
