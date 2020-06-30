import React from 'react';

import { object } from "prop-types";

import fetchMovies from "../../services/movies-api-service";

const MovieInfo = (props) => {
  const { movies } = props;
  const { poster_path, overview, original_title, release_date, popularity, genres } = movies;
  return (
    <div className="ShowDetails">
      <div>
        <img
          src={
            poster_path
              ? `${fetchMovies.pathImage}/w200${poster_path}`
              : fetchMovies.noPoster
          }
          alt="poster"
          width="500"
        />
      </div>
      <div className="Wrapper">
        <h2>{`${original_title} (${release_date})`}</h2>
        {overview && (
          <>
            <h3> Overview: </h3>
            <p>{overview}</p>
          </>
        )}
        <h3>User Scope: <span>{Math.round(popularity)}%</span> </h3>
        {genres && (
          <>
            <h3> Gender: </h3>
            <ul>
              {genres.map(({ name, id }) => <li key={id}>{name}</li>)}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movies: object.isRequired,
};

export default MovieInfo;






