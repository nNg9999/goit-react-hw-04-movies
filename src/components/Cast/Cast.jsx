import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//componets
import Spinner from '../Loader';

//utils
import tvApiService from '../../services/movies-api-service';
import fetchMovies from "../../services/movies-api-service";

//styles


class Cast extends Component {
  state = {
    cast: null,
    loading: false,
  };

  componentDidMount() {
    this.fetchDetails();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location === this.props.location) {
      return;
    }

    this.fetchDetails();
  }

  fetchDetails = () => {
    const movieId = this.props.match.params.movieId;

    this.setState({ loading: true });

    tvApiService.fetchShowCast(movieId)
      .then(data => {
        toast.success('Loading Cast');
        return data
      })
      .then(cast => {
        this.setState({ cast });
      })
      .catch(error => {
        this.setState({ error: error.message });
        toast.error(error.message);
      })
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { cast, loading } = this.state;

    return (
      <div>
        {loading && <Spinner />}
        {cast
          ? (<ul>
            {
              cast.map(({ id, name, profile_path }) => (<li key={id} >
                <img
                  src={
                    profile_path
                      ? `${fetchMovies.pathImage}/w500${profile_path}`
                      : fetchMovies.noImage
                    // `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  }
                  alt="poster"
                  width="160" />
                <h3>{name}</h3>
              </li>))
            }
          </ul>)
          : <div>We don't have any reviews for this movie</div>}
      </div>
    )
  }
}

export default Cast;
