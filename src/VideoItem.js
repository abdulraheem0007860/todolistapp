import React from 'react'
import { Row,Col,Card} from 'react-bootstrap'
const VideoItem=({video,onVideoSelect}) =>{


  return (
    <Row>
        <Col sm={4}>
        <Card.Img variant="top" src={video.snippet.thumbnails.high.url} onClick={()=>{
          onVideoSelect(video )
        }}/>
        </Col>
        <Col sm={8}>
        <Card.Text>
        {video.snippet.channelTitle}
          </Card.Text>
          <Card.Text>
        {video.snippet.channeldescription}
          </Card.Text>
        </Col>
    </Row>
  )
}

export default VideoItem