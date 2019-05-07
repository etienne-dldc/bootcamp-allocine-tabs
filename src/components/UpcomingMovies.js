import React from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';

class UpcomingMovies extends React.Component {
  state = {
    upcomingMovies: null,
  };

  render() {
    if (this.state.upcomingMovies === null) {
      return <div>Loading...</div>;
    }
    return <MoviesList moviesArray={this.state.upcomingMovies.results} />;
  }

  componentDidMount() {
    axios.get('https://api-allocine.herokuapp.com/api/movies/upcoming').then(response => {
      this.setState({ upcomingMovies: response.data });
    });
  }
}

export default UpcomingMovies;
