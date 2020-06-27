// core
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// components
import Layout from './Layout';
import Spinner from '../components/Loader'
import Navigation from './Navigation';

// import Cast from './Cast';
// import Reviews from './Reviews';
// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';

import ErrorBoundary from './ErrorBoundary';

//utils
import { ToastContainer } from 'react-toastify';
import routes from '../routes';

//styles

const App = () => (
  <ErrorBoundary>
    < BrowserRouter >
      <Layout>
        <Navigation />
        <hr />
        <Suspense fallback={<Spinner />}>
          <Switch>
            {
              routes.map(({ name, path, component: RouteComponent, isExact }) =>
                (<Route
                  key={name}
                  exact={isExact}
                  path={path}
                  component={RouteComponent}
                />)
              )
            }
            {/* {routes.map(route => <Route key={route.path} {...route} />)} */}
            {/* <Route exact path={routes.HOME} component={HomePage} />
            <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
            <Route path={routes.MOVIE_DETAILS_CAST} component={Cast} />
            <Route path={routes.MOVIE_DETAILS_REVIEWS} component={Reviews} />
            <Route exact path={routes.MOVIES} component={MoviesPage} /> */}

            <Redirect to="/" />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Suspense>
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
  </ErrorBoundary>
);

export default App;