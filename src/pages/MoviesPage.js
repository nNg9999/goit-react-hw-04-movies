import React, { Component } from 'react';

import Searchbar from '../components/Searchbar';
import Spinner from '../components/Loader';
import MoviesList from '../components/MoviesList';


//utils
import tvApiService from '../services/movies-api-service';
import getQueryParams from '../utils/getQueryParams';
import { toast } from 'react-toastify';

//styles
import 'react-toastify/dist/ReactToastify.css';


export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    const queryParams = getQueryParams(this.props.location.search);

    if (!queryParams.query) {
      return;
    }

    this.setState({ loading: true });

    tvApiService.fetchShowWithQuery(queryParams.query).then(data => {
      toast.success('Movies details');
      return data
    })
      .then(movies => {
        this.setState({
          movies
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
        toast.error(error.message);
      })
      .finally(() => this.setState({ loading: false }));

  }

  componentDidUpdate(prevProps, prevState) {

    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery === nextQuery || !nextQuery) {
      return;
    }
    this.setState({ loading: true });
    tvApiService.fetchShowWithQuery(nextQuery)
      .then(data => {
        toast.success('Movies Search');
        return data
      }).then(movies => {
        this.setState({
          movies
        });
        if (!movies.length) {
          toast.info('Sory, Nothing was found for your query');
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
        toast.error(error.message);
      })
      .finally(() => this.setState({ loading: false }));
  }

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };


  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        <Searchbar onSearch={this.setSearchQuery} />
        {loading && <Spinner />}

        {movies && !loading &&
          <MoviesList {...this.props} movies={movies} />
        }
      </div>
    );
  }
}
