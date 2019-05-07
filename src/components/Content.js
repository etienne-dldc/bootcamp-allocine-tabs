import React from 'react';
import Tabs from './Tabs';
import PopularMovies from './PopularMovies';
import UpcomingMovies from './UpcomingMovies';
import TopMovies from './TopMovies';

const Content = props => {
  const { currentPage, onTabNavigation } = props;

  let content = <PopularMovies />;
  if (currentPage === 'upcoming') {
    content = <UpcomingMovies />;
  }
  if (currentPage === 'top') {
    content = <TopMovies />;
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
