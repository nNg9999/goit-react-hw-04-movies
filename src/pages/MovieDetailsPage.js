import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';


// components
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import Spinner from '../components/Loader';
import Button from '../components/Button';

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
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);
      return;
    }

    this.props.history.push('/movies');
  };

  render() {
    const { movie, loading } = this.state;
    const { match } = this.props;

    return (
      <div>
        <Button onClick={this.onGoBack} />
        <h2>Show Details</h2>
        {loading && <Spinner />}
        {movie && <div >
          <div className="ShowDetails">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster"
              // width="1280"
              />
            </div>
            <div className="Wrapper">
              <h2>{`${movie.original_title} (${movie.release_date})`}</h2>
              <h3> Overview: </h3>
              <p>{movie.overview}</p>
              <h3>User Scope: <span>{Math.round(movie.popularity)}%</span> </h3>
              <h3> Gender: </h3>
              <ul>
                {movie.genres.map(({ name, id }) => <li key={id}>{name}</li>)}
              </ul>
            </div>
          </div>

          <div>
            <hr />
            Additional information
            <ul>
              <li>
                <NavLink to={`${match.url}/cast`} style={{ color: '#212121', fontWeight: 600 }}
                  activeStyle={{ color: 'palevioletred' }}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${match.url}/reviews`} style={{ color: '#212121', fontWeight: 600 }}
                  activeStyle={{ color: 'palevioletred' }}>Reviews</NavLink>
              </li>
            </ul>
            <hr />
            <Route path={`${match.path}/cast`} exact component={Cast} />
            <Route path={`${match.path}/reviews`} exact component={Reviews} />
          </div>
        </div>}
      </div>
    );
  }
}
