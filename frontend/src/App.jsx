import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';


// Note: Rendering a single component to build components in isolation
const App = () => {
//   const photos = [...Array(3)]; // Builds a new array with 3 posts filled with same sampledata

  return (
    <div className="App">
      {/* {photos.map((photo, i) => 
        <PhotoListItem key={i} photo={sampleDataForPhotoListItem} />
      )} */}
      <PhotoList />
    </div>
  );
};

export default App;
