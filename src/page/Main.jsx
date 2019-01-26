import React, { Component } from 'react';
import BottomBar from './BottomBar/BottomBar'
// import Home from './Home/Home';

import { connect } from 'react-redux';
import Order from './Order/Order';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    // <Home />
    return (
      <div>
         
         <Order />
         <BottomBar />
      </div>
    );
  }
}

export default connect(
  state => ({
  })
)(Main);