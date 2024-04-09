import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicId, title, selectTopic }) => {

  return (
    <div className="topic-list__item">
      <span onClick={(() => selectTopic(topicId))}>{title}</span>
    </div>
  );
};

export default TopicListItem;
