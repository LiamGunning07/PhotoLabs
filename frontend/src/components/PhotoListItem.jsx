import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


  return (
    <div className="photo-list-item">
      <img src={props.photo.imageSource} alt="Photo" className="photo-image" />
      <img src={props.photo.profile} alt="Profile" className="profile-image" />
      <h2 className="photo-username">{props.photo.username}</h2>
      <p className="photo-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</p>
      <p className="photo-id" key={props.photo.id}>{props.photo.id}</p>
    </div>
  )
};

export default PhotoListItem;
