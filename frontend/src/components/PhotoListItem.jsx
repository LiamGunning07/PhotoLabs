import React from "react";

import "../styles/PhotoListItem.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};


const PhotoListItem = (props) => {

const { id, location, imageSource, username, profile } = sampleDataForPhotoListItem

  return (
    <div className="photo-list-item">
      <img src={imageSource} alt="Photo" className="photo-image" />
      <div className="photo-details">
        <h2 className="photo-username">{username}</h2>
        <p className="photo-location">{`${location.city}, ${location.country}`}</p>
        <p className="photo-id">{id}</p>
      </div>
      <img src={profile} alt="Profile" className="profile-image" />
    </div>
  )
};

export default PhotoListItem;
