import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  border-radius: 50px;
  padding: 50px 0;
  margin: 60px 0;
  img {
    width: 75%;
  }
  p {
    margin: 10px 0 0 5px;
  }
`;

const Card = ({ item: { name, types, weight, height, image, attacks } }) => {
  return (
    <Container>
      <div>
        <img src={image} alt="pokemon" />
      </div>
      <div>
        <h1>{name}</h1>
        <h4>Pokemon types:</h4>
        <p>{types[0]}</p>
        <p>{types[1]}</p>
        <p></p>
        <h4>Pokemon weight: </h4>
        <p>-min {weight.minimum}</p>
        <p>-max {weight.maximum}</p>

        <h4>Pokemon height: </h4>
        <p>-min {height.minimum}</p>
        <p>-max {height.maximum}</p>
      </div>
      <div>
        <h2>Special attacks</h2>
        <h4>Attack:</h4>
        <p>damage - {attacks.special[0].damage}</p>
        <p>type - {attacks.special[0].type}</p>
        <p>name - {attacks.special[0].name}</p>
      </div>
    </Container>
  );
};

export default Card;
