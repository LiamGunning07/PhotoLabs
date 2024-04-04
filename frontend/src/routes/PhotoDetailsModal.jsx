import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
const PhotoDetailsModal = ({ showModal, handlePhotoClick, closeModal, toggleLike, favourites }) => {
  const similarPhotos = showModal && Object.values(showModal.similar_photos)

  console.log(similarPhotos)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal} />
      </button>
      <div className="photo-details-modal__images" >
        <PhotoFavButton className='photo-list__fav-icon-svg' isFavourite={favourites && favourites.find(id => id === showModal.id)} onClick={() => toggleLike(showModal.id)} />
        <img src={showModal.urls.full} alt="Photo" className="photo-details-modal__image" onClick={() => handlePhotoClick(photo)} />
        <div />
        <div className="photo-details-modal__photographer-details">
          <img src={showModal.user.profile} alt="Profile" className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">{showModal.user.username}
            <p className="photo-details-modal__photographer-location">{`${showModal.location.city}, ${showModal.location.country}`}</p>
          </div>
        </div>
        <div className='photo-details-modal__header'>  Similar Photos </div>
        <div className="photo-details-modal__images">
        <PhotoList photos={similarPhotos} favourites={favourites} toggleLike={toggleLike} handlePhotoClick={handlePhotoClick} closeModal={closeModal} />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
