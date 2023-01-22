import React from 'react'
import {Card,Spinner} from 'react-bootstrap'
function MainCard({setVideos}) {
  console.log(setVideos)
if(setVideos ===undefined) return <Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner>
const videoSrc=`https://www.youtube.com/embed/${setVideos.id.videoId}`
  return (
    <>
    <Card>
        {/*<Card.Img variant="top" src={setVideos.snippet.thumbnails.high.url} />*/}
        <iframe src={videoSrc} width={'100%'} height={'75%'}/>
        <Card.Body>
          <h1>{setVideos.snippet.title}</h1>
          <Card.Text>
         {setVideos.snippet.description}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      
      </>
  )
}

export default MainCard