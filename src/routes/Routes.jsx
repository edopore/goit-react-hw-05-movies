import Navbar from 'components/navbar/Navbar';
import { Home, Movie, MovieDetails } from '../views/';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar></Navbar>
        <Home></Home>
      </>
    ),
  },
  {
    path: '/movies',
    element: (
      <>
        <Navbar></Navbar>
        <Movie></Movie>
      </>
    ),
  },
  {
    path: '/movies/:movieId',
    element: (
      <>
        <Navbar></Navbar>
        <MovieDetails></MovieDetails>
      </>
    ),
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]);

export default routes;
