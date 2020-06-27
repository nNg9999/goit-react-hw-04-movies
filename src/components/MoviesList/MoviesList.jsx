import React from 'react';
import { Link } from 'react-router-dom';

import { arrayOf, shape } from "prop-types";

const MoviesList = (props) => {
  const { movies, location, match } = props;

  return (
    <ul> {movies.map(({ id, title }) =>
      (<li key={id} >
        <Link
          to={{
            pathname: `${match.url}/${id}`,
            state: {
              from: location
            },
          }
          } > {title}
        </Link>
      </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: arrayOf(shape).isRequired,
};

export default MoviesList;


