import React, { Component } from 'react';


//components
import Spinner from '../Loader';

//utils
import tvApiService from '../../services/movies-api-service';
import { toast } from 'react-toastify';

//styles
import 'react-toastify/dist/ReactToastify.css';


class Reviews extends Component {
  state = {
    results: [],
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

    tvApiService.fetchShowReviews(movieId)
      .then(data => {
        toast.success('Loading Reviews');
        return data
      })
      .then(results => {
        this.setState({ results });
      })
      .catch(error => {
        this.setState({ error: error.message });
        toast.error(error.message);
      })
      .finally(() => this.setState({ loading: false }));

  };

  render() {
    const { results, loading } = this.state;

    return (
      <ul>
        {loading && <Spinner />}
        {results.length > 0
          ? (
            <>
              {results.map(item => (<li key={item.id} >
                <h3>Autor: {item.author}</h3>
                <p>{item.content}</p>
              </li>))}
            </>

          )
          : <div>We don't have any reviews for this movie</div>}
      </ul>

    );
  }
}


export default Reviews;