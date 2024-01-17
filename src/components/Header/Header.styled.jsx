import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { variables } from 'common/Variables';

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 35px;
`;

export const HeaderWrapper = styled.div`
  border: 1px solid ${variables.basicGray};
  border-radius: 16px;
  border-top: none;
`;
export const HeaderTitle = styled(NavLink)`
  color: #56615a;
  text-decoration: none;
  font-size: 36px;
  font-weight: 600;
`;

export const Image = styled.img`
  width: 200px;
`;
