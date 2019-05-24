import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import { requestCharacters } from '../../redux/characters/types';

const Field = ({ component, ...props }) => <input {...props} />;

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div data-testid="searchbar-container">
        <Field
          name="searchform"
          placeholder="Buscar Personagens"
          component={SearchForm}
          type="text"
          onChange={e => this.props.requestCharacters(e.target.value)}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { requestCharacters }
)(SearchBar);
