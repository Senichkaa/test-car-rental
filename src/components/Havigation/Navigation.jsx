import React from 'react';
import { NaviLink, NaviList } from './Navigation.styled';

const Navigation = () => {
  return (
    <NaviList>
      <NaviLink to="/">Home</NaviLink>
      <NaviLink to="/catalog">Catalog</NaviLink>
      <NaviLink to="/favorites">Favorites</NaviLink>
    </NaviList>
  );
};

export default Navigation;
