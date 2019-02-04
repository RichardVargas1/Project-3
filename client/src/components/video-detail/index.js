import React from 'react';
import { Col, Row, Container } from "../Grid";
import './style.css';

const VideoDetail = (props) => {
    const video = props.video;

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Container>
            <Row>
                <Col size="md-6">
                    <div className="video-detail" id="vidBox">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={url}></iframe>
                        </div>
                        {/* <div className="details">
                            <div>{video.snippet.title}</div>
                            <div>{video.snippet.description}</div>
                        </div> */}
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default VideoDetail;