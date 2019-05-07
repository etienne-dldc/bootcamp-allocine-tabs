import React from 'react';
import Header from './Header';
import Content from './Content';
import axios from 'axios';

class App extends React.Component {
  state = {
    currentTab: 'popular', // 'upcoming' | 'top'
    moviesData: null,
  };

  render() {
    return (
      <div>
        <Header />
        <Content
          moviesData={this.state.moviesData}
          currentPage={this.state.currentTab}
          onTabNavigation={tab => {
            this.setState({ currentTab: tab, moviesData: null });
            if (tab === 'upcoming') {
              axios.get('https://api-allocine.herokuapp.com/api/movies/upcoming').then(response => {
                if (this.state.currentTab === 'upcoming') {
                  this.setState({ moviesData: response.data });
                }
              });
            }
            if (tab === 'top') {
              axios.get('https://api-allocine.herokuapp.com/api/movies/top_rated').then(response => {
                if (this.state.currentTab === 'top') {
                  this.setState({ moviesData: response.data });
                }
              });
            }
            if (tab === 'popular') {
              axios.get('https://api-allocine.herokuapp.com/api/movies/popular').then(response => {
                if (this.state.currentTab === 'popular') {
                  this.setState({ moviesData: response.data });
                }
              });
            }
          }}
        />
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://api-allocine.herokuapp.com/api/movies/popular').then(response => {
      this.setState({ moviesData: response.data });
    });
  }
}

export default App;
