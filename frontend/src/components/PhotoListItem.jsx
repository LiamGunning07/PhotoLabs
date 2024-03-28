import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import { useState } from "react";

const PhotoListItem = (props) => {
  const [ isFavourite , setIsFavourite] = useState(false)

  const handleFavouriteClick = () => {
    console.log('Fav clicked')
    setIsFavourite(prevState => !prevState); // Toggle the favorite status
  };

  return (
  <div className="photo-list__item">
    <div>
      <PhotoFavButton className='photo-list__fav-icon-svg' isFavourite={isFavourite} onClick={handleFavouriteClick} />
    </div>
    <img src={props.photo.imageSource} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.photo.profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-list__username">{props.photo.username}</div>
        <p className="photo-list__user-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</p>
      </div>
  </div>
  )
};

export default PhotoListItem;
