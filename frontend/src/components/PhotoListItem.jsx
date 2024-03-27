import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


  return (
    <div className="photo-list-item">
      <img src={props.imageSource} alt="Photo" className="photo-image" />
        <img src={props.profile} alt="Profile" className="profile-image" />
        <h2 className="photo-username">{props.username}</h2>
        <p className="photo-location">{`${props.location.city}, ${props.location.country}`}</p>
        <p className="photo-id" key={props.id}>{props.id}</p>
    </div>
  )
};

export default PhotoListItem;
