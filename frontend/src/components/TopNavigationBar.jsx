import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({isFavPhotoExist, likesCount, topics}) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList className="topic-list__item span" topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} likesCount={likesCount} />
    </div>
  )
}

export default TopNavigationBar;