import React, { Fragment } from 'react';

import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';

const Home = () => (
  <Fragment>
    <Nav />
    <SearchBar />
    <CharacterList />
  </Fragment>
);

export default Home;
