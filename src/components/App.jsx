// core
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// components
import Layout from './Layout';
import Navigation from './Navigation';
import Cast from './Cast';
import Reviews from './Reviews';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

//utils
import { ToastContainer } from 'react-toastify';
import routes from '../routes';

//styles


const App = () => (

  < BrowserRouter >
    <Layout>
      <Navigation />
      <hr />
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
        <Route path={routes.MOVIE_DETAILS_CAST} component={Cast} />
        <Route path={routes.MOVIE_DETAILS_REVIEWS} component={Reviews} />
        <Route exact path={routes.MOVIES} component={MoviesPage} />

        <Redirect to="/" />
        {/* <Route component={NotFound} /> */}
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  </ BrowserRouter >
);

export default App;