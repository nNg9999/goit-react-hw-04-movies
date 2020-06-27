import React, { Component } from 'react';

import Spinner from '../components/Loader';
import HomeInfo from '../components/HomeInfo';

import tvApiService from '../services/movies-api-service';
import { toast } from 'react-toastify';



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

    const { movies, loading } = this.state;

    return (
      <div >
        <h1>Trending Today</h1>
        {loading && <Spinner />}
        <HomeInfo {...this.props} movies={movies} />
      </div >
    );
  }
}






