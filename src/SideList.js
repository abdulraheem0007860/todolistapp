import React from 'react'
import VideoItem from './VideoItem'
import {Card,Spinner} from 'react-bootstrap'
const SideList = ({Videos,onVideoSelect}) => {
  if(Videos.length ===0) return<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
  </Spinner>

  return (
        Videos.map((item,idx)=> <VideoItem key={idx} video={item}  onVideoSelect={onVideoSelect}/> )
  )
}

export default SideList