import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../components/Loader';

import tvApiService from '../services/movies-api-service';
import { toast } from 'react-toastify';

import '../styles/styles.css';


export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {

    this.setState({ loading: true });

    tvApiService.fetchShowWithTrending()
      .then(data => {
        toast.success('Loading Trending');
        return data
      })
      .then(movies => {
        this.setState({
          movies: movies.filter(item => item.adult === false)
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
        toast.error(error.message);
      })
      .finally(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() {
    const { match } = this.props;
    const { movies, loading } = this.state;

    return (
      <div >
        <h1>Trending Today</h1>

        {loading && <Spinner />}

        <ul> {movies.map(movie =>
          (<li key={movie.id} >
            <Link
              to={{
                pathname: `${match.url}movies/${movie.id}`,
                state: {
                  from: this.props.location
                },
              }
              } > {movie.title}
            </Link>
          </li>
          ))}
        </ul>
      </div >
    );
  }
}






