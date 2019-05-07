import React from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';

class PopularMovies extends React.Component {
  state = {
    popularMovies: null,
  };

  render() {
    if (this.state.popularMovies === null) {
      return <div>Loading...</div>;
    }
    return <MoviesList moviesArray={this.state.popularMovies.results} />;
  }

  componentDidMount() {
    axios.get('https://api-allocine.herokuapp.com/api/movies/popular').then(response => {
      this.setState({ popularMovies: response.data });
    });
  }
}

export default PopularMovies;
