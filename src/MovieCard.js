import React from 'react'
import Movies from './data';
import Card from 'react-bootstrap/Card'


const MovieCard=({title,description,posterURL,rating})=>{

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={posterURL} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             <p>{description}</p>
             <p>{rating}</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
      );
}
MovieCard.defaultProps={ title: "Movie Name",
    description: "topic of Movie",
    ratingy:0, 
   posterURL: "https://via.placeholder.com/150"}

  export default MovieCard;