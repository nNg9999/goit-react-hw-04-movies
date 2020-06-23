import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import qs from 'qs';
import Searchbar from '../components/Searchbar';
import Spinner from '../components/Loader';


//utils
import tvApiService from '../services/movies-api-service';
import { toast } from 'react-toastify';

//styles
import 'react-toastify/dist/ReactToastify.css';

const getQueryParamsFromProps = props =>
  qs.parse(props.location.search.slice(1));

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    const queryParams = getQueryParamsFromProps(this.props);

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
    const { query: prevQuery } = getQueryParamsFromProps(prevProps);
    const { query: nextQuery } = getQueryParamsFromProps(this.props);

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
    const { match } = this.props;
    const { movies, loading } = this.state;

    return (
      <div>
        <Searchbar onSearch={this.setSearchQuery} />
        {loading && <Spinner />}
        {movies && <ul> {movies.map(movie =>
          (<li key={movie.id} >
            <Link
              to={{
                pathname: `${match.url}/${movie.id}`,
                state: {
                  from: this.props.location
                },
              }
              } > {movie.title} </Link>
          </li>))}
        </ul>}
      </div>
    );
  }
}
