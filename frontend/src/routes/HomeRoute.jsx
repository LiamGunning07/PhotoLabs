import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({photos, topics, favourites, toggleLike, handlePhotoClick, closeModal, selectTopic}) => {
 
 
  return (
    <div className="home-route">
      <TopNavigationBar  topics={topics} likesCount={favourites.length} selectTopic={selectTopic} photos={photos}/>
      <PhotoList photos={photos} favourites={favourites} toggleLike={toggleLike} handlePhotoClick={handlePhotoClick} closeModal={closeModal} />
    </div>
  );
};

export default HomeRoute;
