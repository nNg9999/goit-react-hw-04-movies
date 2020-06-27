import React, { Component } from 'react';

// components
import Spinner from '../components/Loader';
import Button from '../components/Button';
import MovieInfo from '../components/MovieInfo';
import MoviesListAddInfo from '../components/MoviesListAddInfo';

//utils
import tvApiService from '../services/movies-api-service';
import { toast } from 'react-toastify';


//styles
import 'react-toastify/dist/ReactToastify.css';

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
      toast.success('News dounload detalis');
      return data
    })
      .then(movie => {
        this.setState({
          movie
        });
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
  };


  render() {
    const { movie, loading } = this.state;

    return (
      <div>
        <Button onClick={this.onGoBack} />
        <h2>Show Details</h2>
        {loading && <Spinner />}
        {movie && <div >
          <MovieInfo {...this.props} movies={movie} />
          <MoviesListAddInfo {...this.props} movies={movie} />
        </div>}
      </div>
    );
  }
}
