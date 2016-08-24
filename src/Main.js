import React from 'react';
import Navigation from './Nav';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
