import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import { useState } from "react";

const PhotoListItem = ({photo, handleLike, handleUnlike}) => {
  const [ isFavourite , setIsFavourite] = useState(false)
  
  const handleFavouriteClick = () => {
    console.log('Fav clicked')
    if (!isFavourite) {
      handleLike();
    } else if (isFavourite) {
      handleUnlike();
    }
    setIsFavourite(prevState => !prevState); // Toggle the favorite status
  };

  return (
  <div className="photo-list__item">
    <div>
      <PhotoFavButton className='photo-list__fav-icon-svg' isFavourite={isFavourite} onClick={handleFavouriteClick} />
    </div>
    <img src={photo.urls.regular} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-list__username">{photo.user.username}</div>
        <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
      </div>
  </div>
  )
};

export default PhotoListItem;
