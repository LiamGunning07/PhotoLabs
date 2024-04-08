import React, { useReducer, useEffect } from 'react';

const initialState = {
  favourites: [],
  showModal: null,
  photoData: [],
  topicData: [],
};



const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      if (state.favourites.includes(action.id)) {
        return { ...state, favourites: state.favourites.filter((itemId) => itemId !== action.id) };
      } else {
        return { ...state, favourites: [...state.favourites, action.id] };
      }
    case 'SET_MODAL':
      return { ...state, showModal: action.photo };
    case 'CLOSE_MODAL':
      return { ...state, showModal: null };
    case 'SET_PHOTO_DATA':
      return {...state, photoData: action.payload}
      case 'SET_TOPIC_DATA':
      return {...state, topicData: action.payload}
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }))
  }, []);

  const handlePhotoClick = (photo) => {
    dispatch({ type: 'SET_MODAL', photo});
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const toggleLike = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', id });
  };


  return { favourites: state.favourites, showModal: state.showModal, handlePhotoClick, toggleLike, closeModal, photoData: state.photoData, topicData: state.topicData};
};

export default useApplicationData;

