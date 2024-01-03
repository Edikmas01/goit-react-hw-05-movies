import { Outlet, NavLink } from 'react-router-dom';
import './Layout.scss'

export const Layout = () => {
  return (
    <>
      {' '}
      <header className="header">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/movie" activeClassName="active">
          Movies
        </NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
{/* <NavLink to="/TrendingMovies" activeClassName="active">
  Home
</NavLink>; */}