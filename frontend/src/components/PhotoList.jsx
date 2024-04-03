import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoList = ({ photos, handlePhotoClick, favourites, toggleLike }) => {
  
  // const photoData = () => {
  //   let info = Object.values(photos)
  //   console.log(info);
  // } 
 
  return (
    <ul className="photo-list">
   
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} toggleLike={toggleLike} isFavourite={favourites.find(id => id === photo.id)} handlePhotoClick={handlePhotoClick} />
      ))} 
    </ul>
  );
};

export default PhotoList;
