import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import { requestCharacters } from '../../redux/characters/types';

class Home extends Component {
  componentDidMount() {
    this.props.requestCharacters('thor');
    console.log(this.props);
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <SearchBar />
        {this.props.characters.map((chr, i) => <p key={i}>{chr.name}</p>)}
        <CharacterList />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.Characters
  };
}

export default connect(
  mapStateToProps,
  { requestCharacters }
)(Home);
