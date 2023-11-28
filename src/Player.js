import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (

    <Card>
      <Card.Img variant="top" src={imageUrl} alt={name} style={{ height: '200px', width: '200px' }} />

      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>

  );
};

Player.defaultProps = {
  name: 'Unknown',
  team: 'Unknown',
  nationality: 'Unknown',
  jerseyNumber: 'Unknown',
  age: 'Unknown',
  imageUrl: '',
};
export default Player;
