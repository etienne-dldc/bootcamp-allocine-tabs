import React from 'react';
import Tabs from './Tabs';
import MoviesList from './MoviesList';

const Content = props => {
  const { currentPage, onTabNavigation, moviesData } = props;

  let content = <div>Loading...</div>;
  if (moviesData !== null) {
    content = <MoviesList moviesArray={moviesData.results} />;
  }

  return (
    <div className="content-centered">
      <Tabs
        selectedTab={currentPage}
        onTabClick={tab => {
          onTabNavigation(tab);
        }}
      />
      {content}
    </div>
  );
};

export default Content;
