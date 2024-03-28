import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


  return (
  <div className="photo-list__item">
    <img src={props.photo.imageSource} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.photo.profile} alt="Profile" className="photo-list__user-profile" />
        <h2 className="photo-list__username">{props.photo.username}</h2>
        <p className="photo-list__user-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</p>
      </div>
  </div>
  )
};

export default PhotoListItem;
