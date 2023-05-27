import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink, NavList } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <NavList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </NavList>
      </header>
      <main>
        <Suspense fallback={<div>...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
