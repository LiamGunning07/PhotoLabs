import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ likesCount, topics, selectTopic }) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList className="topic-list__item span" topics={topics} selectTopic={selectTopic} />
      <FavBadge isFavPhotoExist={likesCount > 0} likesCount={likesCount} />
    </div>
  )
}

export default TopNavigationBar;