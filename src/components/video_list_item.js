import React from 'react';

// if in function use ({video}) instead of (props) we get "const video declared"
const VideoListItem = ({video, onVideoSelect}) => {
  // Not needed because of ({video})
  // const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  // console.log(video);
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt=""/>
        </div>
        <div className="media-body">
          <div className="meda-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
