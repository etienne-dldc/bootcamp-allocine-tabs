import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  state = {
    currentTab: 'popular', // 'upcoming' | 'top'
  };

  render() {
    return (
      <div>
        <Header />
        <Content
          currentPage={this.state.currentTab}
          onTabNavigation={tab => {
            this.setState({ currentTab: tab });
          }}
        />
      </div>
    );
  }
}

export default App;
