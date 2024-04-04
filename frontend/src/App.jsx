import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation
const App = () => {
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
  

  

  return (
    <div className="App">
        <HomeRoute photos={photos} topics={topics} handlePhotoClick={handlePhotoClick} closeModal={closeModal} favourites={favourites} toggleLike={toggleLike}/>
        {showModal && <PhotoDetailsModal closeModal={closeModal} showModal={showModal} handlePhotoClick={handlePhotoClick} favourites={favourites} toggleLike={toggleLike} />}
    </div>
  );
};

export default App;
