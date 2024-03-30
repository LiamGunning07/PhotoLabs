import React from 'react';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import { useState } from 'react'; // Added { useState }
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {

 

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
