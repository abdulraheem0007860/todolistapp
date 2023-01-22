import React, { useState } from 'react'
import { Container,InputGroup,Form,Button} from 'react-bootstrap'

    function SearchBar(props) {
  const [search,setSearch]= useState('')
  console.log(search)
  return (
    <Container fluid style={{marginTop:'2%'}}>
      <Form onSubmit={(e) =>{
        
         e.preventDefault()
        console.log(props)
      props.onSubmitHandler(search)
        // handleSubmit(search )
      }}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search}
          onChange={e=> setSearch(e.target.value)}
        />
        </InputGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        

        
      </Form>
      </Container>
  )
  }

export default SearchBar
