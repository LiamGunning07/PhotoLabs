import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import { useState } from "react";

const PhotoListItem = ({ photo, toggleLike, isFavourite, handlePhotoClick }) => {



  return (
    <div className="photo-list__item" >
      <PhotoFavButton className='photo-list__fav-icon-svg' isFavourite={isFavourite} onClick={() => toggleLike(photo.id)} />
      <img src={photo.urls.regular} alt="Photo" className="photo-list__image" onClick={() => handlePhotoClick(photo)} />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-list__username">{photo.user.username}</div>
        <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
