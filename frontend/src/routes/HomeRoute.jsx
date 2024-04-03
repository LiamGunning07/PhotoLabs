import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({photos, topics}) => {
  const [likesCount, setLikesCount] = useState(0);
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);
  const [showModal, setShowModal ] = useState(false)

  const handlePhotoClick = () => {
    setShowModal(true)
  }
   const closeModal = () => {
   if(showModal === true) {
      setShowModal(false);
    }
  }

  const handleLike = () => {
    setLikesCount(likesCount + 1);
    setIsFavPhotoExist(true);
  }
  const handleUnlike = () => {
    // Ensure likesCount doesn't go below 0
    if (likesCount > 0) {
      setLikesCount(likesCount - 1);
    }
  };
 
  return (
    <div className="home-route">
      <TopNavigationBar  topics={topics} likesCount={likesCount} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} likesCount={likesCount} isFavPhotoExist={isFavPhotoExist} handleLike={handleLike} handleUnlike={handleUnlike} handlePhotoClick={handlePhotoClick} showModal={showModal} closeModal={closeModal}/>
    </div>
  );
};

export default HomeRoute;
