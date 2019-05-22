import React, { Fragment } from 'react';
import MarvelLogo from '../../img/images';
import { LogoConteiner } from '../../styles';

const Nav = () => (
  <Fragment>
    <LogoConteiner>
      <img src={MarvelLogo} alt="logo" height="100px" />
    </LogoConteiner>
  </Fragment>
);

export default Nav;
