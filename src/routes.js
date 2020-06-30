import { lazy } from 'react';

// import Cast from './components/Cast';
// import Reviews from './components/Reviews';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';

const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */));
const Reviews = lazy(() => import('./components/Reviews' /* webpackChunkName: "rewies" */));
const Cast = lazy(() => import('./components/Cast' /* webpackChunkName: "cast" */));

// export default {
//   HOME: '/',
//   MOVIES: '/movies',
//   MOVIE_DETAILS: '/movies/:movieId',
//   MOVIE_DETAILS_CAST: '/movies/:movieId/cast',
//   MOVIE_DETAILS_REVIEWS: '/movies/:movieId/reviews',
// };


// export default [
//   {
//     name: 'Нome Page',
//     path: '/',
//     showInMenu: true,
//     isExact: true,
//     component: HomePage
//   },
//   {
//     name: 'Movies Details',
//     path: '/movies/:movieId',
//     showInMenu: false,
//     isExact: false,
//     component: MovieDetailsPage
//   },
//   {
//     name: 'Movies Details Cast',
//     path: '/movies/:movieId/cast',
//     showInMenu: false,
//     isExact: false,
//     component: Cast
//   },
//   {
//     name: 'Movies Details Reviews',
//     path: '/movies/:movieId/reviews',
//     showInMenu: false,
//     isExact: false,
//     component: Reviews
//   },
//   {
//     name: 'Movies',
//     path: '/movies',
//     showInMenu: true,
//     isExact: false,
//     component: MoviesPage
//   },

// ]


export default [
  {
    name: 'Нome Page',
    path: '/',
    showInMenu: true,
    exact: true,
    component: HomePage
  },
  {
    name: 'Movies Details',
    path: '/movies/:movieId',
    showInMenu: false,
    exact: false,
    component: MovieDetailsPage
  },
  {
    name: 'Movies Details Cast',
    path: '/movies/:movieId/cast',
    showInMenu: false,
    exact: false,
    component: Cast
  },
  {
    name: 'Movies Details Reviews',
    path: '/movies/:movieId/reviews',
    showInMenu: false,
    exact: false,
    component: Reviews
  },
  {
    name: 'Movies',
    path: '/movies',
    showInMenu: true,
    exact: false,
    component: MoviesPage
  },

]