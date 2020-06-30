// Core
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Spinner from '../components/Loader';
import Button from '../components/Button';
import MovieInfo from '../components/MovieInfo';
import MoviesListAddInfo from '../components/MoviesListAddInfo';

// Instruments
import tvApiService from '../services/movies-api-service';

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    loading: false,
  };

  componentDidMount() {
    this.fetchDetails();

  }

  fetchDetails = () => {
    const movieId = this.props.match.params.movieId;

    this.setState({ loading: true });

    tvApiService.fetchShowDetails(movieId).then(data => {
      toast.success('Movies detalis loading');
      return data
    })
      .then(movie => {
        this.setState({ movie });
      })
      .catch(error => {
        this.setState({ error: error.message });
        toast.error(error.message);
      })
      .finally(() => this.setState({ loading: false }));
  };

  onGoBack = () => {
    const { state } = this.props.location;
    const { push } = this.props.history;

    if (state && state.from) {
      return push(state.from);
    }
    push('/movies');

    // const { history, location } = this.props;
    // if (location.state) {
    //   return history.push(location.state.from);
    // }
    // history.push('/movies')

  };


  render() {
    const { movie, loading } = this.state;
    const { location } = this.props;
    return (
      <div>
        <Button onClick={this.onGoBack} />
        <h2>Show Details</h2>
        {loading && <Spinner />}
        {movie && <div >
          <MovieInfo {...this.props} movies={movie} />
          <MoviesListAddInfo {...this.props} movies={movie} from={location?.state?.from} />
        </div>}
      </div>
    );
  }
}
