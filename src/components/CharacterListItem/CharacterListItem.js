import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import Button from '../Button/Button';

const CharacterConteiner = styled.div`
  width: 30%;
  padding: 10px;
  background-color: white;
  margin-bottom: 20px;
`;

const charactersListItem = props => (
  <CharacterConteiner data-testid="characterlistitem-container">
    <h1> {props.character && props.character.name} </h1>
    <img
      src={`${props.character && props.character.thumbnail.path}.${props.character && props.character.thumbnail.extension}`}
      alt="character"
      width="100%"
    />
    <p>{props.character && props.character.description}</p>
    <Button onClick={() => props.history.push(`/details/${props.character.id}`)}>Detalhes</Button>
  </CharacterConteiner>
);

export default withRouter(charactersListItem);
