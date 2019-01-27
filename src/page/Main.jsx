import React, { Component } from 'react';
import BottomBar from './BottomBar/BottomBar'
// import Home from './Home/Home';
// import Order from './Order/Order';
import My from './My/My'

import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    // <Home />
    // <Order />
    return (
      <div>
         <My />
         <BottomBar />
      </div>
    );
  }
}

export default connect(
  state => ({
  })
)(Main);