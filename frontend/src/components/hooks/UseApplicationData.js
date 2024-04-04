import React, {useState, useEffect} from 'react';


const UseApplicationData = () => {
  const [favourites, setFavourites] = useState([])
  const [showModal, setShowModal ] = useState(null)

  const handlePhotoClick = (photo) => {
    setShowModal(photo)
  }
   const closeModal = () => {
      setShowModal(null);
  }

  const toggleLike = (id) => {
    if (favourites.includes(id)) {
      setFavourites((prev) => prev.filter((itemId) => itemId !== id));
    } else {
      setFavourites((prev) => [...prev, id]);
    }
  };

  return { favourites, showModal, handlePhotoClick, toggleLike, closeModal}
  
};

export default UseApplicationData;
