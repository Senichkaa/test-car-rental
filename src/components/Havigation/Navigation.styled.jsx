import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NaviList = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 35px;
`;

export const NaviLink = styled(NavLink)`
  color: #787575;
  font-size: 20px;
  transition: all 250ms ease-in-out 0ms;
  text-decoration: none;
`;
