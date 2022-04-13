import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
        <Route exact path='/' element={ <Landing /> } />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
