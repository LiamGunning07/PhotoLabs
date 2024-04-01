import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
// Note: Rendering a single component to build components in isolation
const App = () => {

 

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
