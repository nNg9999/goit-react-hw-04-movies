import React from 'react';
import { Link } from 'react-router-dom';

import { arrayOf, shape } from "prop-types";

const НomeInfo = (props) => {
  const { movies, location, match } = props;

  return (
    <ul> {movies.map(({ id, title }) =>
      (<li key={id} >
        <Link
          to={{
            pathname: `${match.url}movies/${id}`,
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

НomeInfo.propTypes = {
  movies: arrayOf(shape).isRequired,
};

export default НomeInfo;