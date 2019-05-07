import React from 'react';

const Tabs = props => {
  const { selectedTab, onTabClick } = props;

  let popularTextDeco = 'none';
  if (selectedTab === 'popular') {
    popularTextDeco = 'underline';
  }

  let upcomingTextDeco = 'none';
  if (selectedTab === 'upcoming') {
    upcomingTextDeco = 'underline';
  }

  let topTextDeco = 'none';
  if (selectedTab === 'top') {
    topTextDeco = 'underline';
  }

  return (
    <nav>
      <ul className="tabs-items">
        <li
          onClick={() => {
            onTabClick('popular');
          }}
          style={{ textDecoration: popularTextDeco }}
        >
          Popular Movies
        </li>
        <li
          onClick={() => {
            onTabClick('upcoming');
          }}
          style={{ textDecoration: upcomingTextDeco }}
        >
          Upcoming Movies
        </li>
        <li
          onClick={() => {
            onTabClick('top');
          }}
          style={{ textDecoration: topTextDeco }}
        >
          Top Rated Movies
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
