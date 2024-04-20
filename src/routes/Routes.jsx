import Navbar from 'components/navbar/Navbar';
import { Home, Movie, MovieDetails } from '../views/';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Cast from 'components/cast/Cast';
import Reviews from 'components/reviews/Reviews';

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
    children: [
      {
        path: '/movies/:movieId/cast',
        element: <Cast></Cast>,
      },
      {
        path: '/movies/:movieId/reviews',
        element: <Reviews></Reviews>,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]);

export default routes;
