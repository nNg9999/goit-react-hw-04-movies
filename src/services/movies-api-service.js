const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '338897da6433601e8c5026c6fd0b5ca7'


const fetchShowDetails = showId => {

  return fetch(`${baseURL}/movie/${showId}?api_key=${apiKey}`)
    .then(res => res.json());
};


const fetchShowCast = showId => {

  return fetch(`${baseURL}/movie/${showId}/credits?api_key=${apiKey}`)
    .then(res => res.json())
    .then(res => res.cast);
};

const fetchShowReviews = showId => {

  return fetch(`${baseURL}/movie/${showId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    .then(res => res.json())
    .then(res => res.results);
};

const fetchShowWithQuery = searchQuery => {
  return fetch(`${baseURL}/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => data.results)
};

const fetchShowWithTrending = () => {
  return fetch(`${baseURL}/trending/all/day?api_key=${apiKey}&language=en-US&page=1&include_adult=false`)
    .then(res => res.json())
    .then(res => res.results)
}

export default {
  fetchShowDetails,
  fetchShowWithQuery,
  fetchShowWithTrending,
  fetchShowCast,
  fetchShowReviews,
};
