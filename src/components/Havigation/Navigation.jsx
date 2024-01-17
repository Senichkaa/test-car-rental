import React from 'react';
import { NaviLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NaviLink to="/">Home</NaviLink>
      <NaviLink to="/catalog">Catalog</NaviLink>
      <NaviLink to="/favorites">Favorites</NaviLink>
    </nav>
  );
};

export default Navigation;
