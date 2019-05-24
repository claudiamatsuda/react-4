import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const CharacterListConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CharacterList = props => (
  <CharacterListConteiner data-testid="characterlist-container">
    {props.characters.map(chrt => (
      <CharacterListItem character={chrt} key={chrt.id} />
    ))}
  </CharacterListConteiner>
);

function mapStateToProps(state) {
  return {
    characters: state.Characters
  };
}

export default connect(mapStateToProps)(CharacterList);
