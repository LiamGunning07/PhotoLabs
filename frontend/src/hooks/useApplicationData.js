import React, { useReducer } from 'react';

const initialState = {
  favourites: [],
  showModal: null,
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
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePhotoClick = (photo) => {
    dispatch({ type: 'SET_MODAL', photo });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const toggleLike = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', id });
  };

  return { favourites: state.favourites, showModal: state.showModal, handlePhotoClick, toggleLike, closeModal };
};

export default useApplicationData;

