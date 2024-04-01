import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ handleLike, handleUnlike, photos }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} handleLike={handleLike} handleUnlike={handleUnlike} />
      ))}
    </ul>
  );
};

export default PhotoList;
