import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, likesCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} />
      {!!isFavPhotoExist && <span>{likesCount}</span>}
    </div>
  ) 
};

export default FavBadge;