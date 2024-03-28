import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [ isFavourite , setIsFavourite] = useState(false)

  const handleFavouriteClick = () => {
    setIsFavourite(prevState => !prevState); // Toggle the favourite status
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFavourite={isFavourite} onClick={handleFavouriteClick} />
      </div>
    </div>
  );
}

export default PhotoFavButton;