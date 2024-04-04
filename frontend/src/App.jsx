import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import UseApplicationData from 'components/hooks/UseApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    favourites,
    showModal,
    handlePhotoClick,
    toggleLike,
    closeModal
  } = UseApplicationData()



  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} handlePhotoClick={handlePhotoClick} closeModal={closeModal} favourites={favourites} toggleLike={toggleLike} />
      {showModal && <PhotoDetailsModal closeModal={closeModal} showModal={showModal} handlePhotoClick={handlePhotoClick} favourites={favourites} toggleLike={toggleLike} />}
    </div>
  );
};

export default App;
