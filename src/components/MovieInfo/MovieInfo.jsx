import React from 'react';

import { object } from "prop-types";

const MovieInfo = (props) => {
  const { movies } = props;
  const { poster_path, overview, original_title, release_date, popularity, genres } = movies;
  return (
    <div className="ShowDetails">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="poster"
          width="500"
        />
      </div>
      <div className="Wrapper">
        <h2>{`${original_title} (${release_date})`}</h2>
        <h3> Overview: </h3>
        <p>{overview}</p>
        <h3>User Scope: <span>{Math.round(popularity)}%</span> </h3>
        <h3> Gender: </h3>
        <ul>
          {genres.map(({ name, id }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movies: object.isRequired,
};

export default MovieInfo;






