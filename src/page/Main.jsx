import React, { Component } from 'react';
import BottomBar from './BottomBar/BottomBar'
import Home from './Home/Home';

import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (
      <div>
         <Home />
         <BottomBar />
      </div>
    );
  }
}

export default connect(
  state => ({
  })
)(Main);