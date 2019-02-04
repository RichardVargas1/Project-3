import React from 'react';
import VideoListItem from '../video-list-item/index';
import './style.css';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onUserSelected={props.onVideoSelect}           
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;