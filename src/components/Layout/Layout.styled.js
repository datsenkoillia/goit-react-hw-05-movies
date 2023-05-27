import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  &.active {
    color: violet;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-bottom: 20px;
  border-bottom: 2px solid #aaaaaa;
`;
