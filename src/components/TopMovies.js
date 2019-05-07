import React from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';

class TopMovies extends React.Component {
  state = {
    topMovies: null,
  };

  render() {
    if (this.state.topMovies === null) {
      return <div>Loading...</div>;
    }
    return <MoviesList moviesArray={this.state.topMovies.results} />;
  }

  componentDidMount() {
    axios.get('https://api-allocine.herokuapp.com/api/movies/top_rated').then(response => {
      this.setState({ topMovies: response.data });
    });
  }
}

export default TopMovies;
