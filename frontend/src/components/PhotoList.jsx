import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoList = ({ handleLike, handleUnlike, photos }) => {
  const [showModal, setShowModal ] = useState(false)

  const handlePhotoClick = () => {
    setShowModal(true)
  } 
  return (
    <ul className="photo-list">
      {showModal && <PhotoDetailsModal />}
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} handleLike={handleLike} handleUnlike={handleUnlike} handlePhotoClick={handlePhotoClick} />
      ))} 
    </ul>
  );
};

export default PhotoList;
