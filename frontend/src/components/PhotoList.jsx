import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoList = ({ handleLike, handleUnlike, photos, handlePhotoClick, showModal, closeModal }) => {
   
 
  return (
    <ul className="photo-list">
      {showModal && <PhotoDetailsModal closeModal={closeModal} />}
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} handleLike={handleLike} handleUnlike={handleUnlike} handlePhotoClick={handlePhotoClick} />
      ))} 
    </ul>
  );
};

export default PhotoList;
