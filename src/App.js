import React from 'react';
import './App.css';
import Navbar from './componemts/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './componemts/Pages/Home';
import Services from './componemts/Pages/Services';
import Products from './componemts/Pages/Products';
import SignUp from './componemts/Pages/SignUp';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>      
    </>
  );
}

export default App;
