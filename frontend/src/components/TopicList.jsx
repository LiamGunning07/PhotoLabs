import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(({id, slug, title}) => (
      <TopicListItem title={title} key={id} id={id} slug={slug} /> 
      ))}
    </div>
  );
};

export default TopicList;
