import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    favourites,
    showModal,
    handlePhotoClick,
    toggleLike,
    closeModal,
    photoData,
    topicData,
    selectTopic
  } = useApplicationData()



  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} handlePhotoClick={handlePhotoClick} closeModal={closeModal} favourites={favourites} toggleLike={toggleLike} selectTopic={selectTopic} />
      {showModal && <PhotoDetailsModal closeModal={closeModal} showModal={showModal} handlePhotoClick={handlePhotoClick} favourites={favourites} toggleLike={toggleLike} />}
    </div>
  );
};

export default App;
