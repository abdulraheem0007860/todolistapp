import React from 'react'
import { useState,useEffect } from 'react';
import Youtube from './components/api/Youtube';
import MainCard from './components/MainCard'
import SearchBar from './components/SearchBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideList from './SideList';
import { Container } from 'react-bootstrap';

function App() {
 const [Videos,setVideos] = useState([])
const[selectedVideo,setSelectedVideo]= useState()
 const handleSubmit = async (searchTerm) =>{
 const res= await Youtube.get('search',{
    params:{
    part:'snippet',
    maxResults:5,
    key:'AIzaSyBB06qTroldHhvcWAOkiSI1iVxvihoEiEU',
    q:searchTerm
    
    }
  })
setVideos(res.data.items)
setSelectedVideo(res.data.items[0])
 }
const onVideoSelect = (video)=>{
console.log(video)
setSelectedVideo(video)
}


useEffect(()=>{
handleSubmit('srk')
},[])

  return (
    <Container>
    <SearchBar onSubmitHandler={handleSubmit}/>
    <Row>
      <Col sm={8} >
      <MainCard  setVideos={selectedVideo}/>
      </Col>
      <Col sm={4} >
     <SideList Videos={Videos} onVideoSelect={onVideoSelect}/> 
      </Col>
      </Row>    
      </Container>
  )
}

export default App
