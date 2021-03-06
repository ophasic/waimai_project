import React, { Component } from 'react';
import BottomBar from './BottomBar/BottomBar';
import Home from './Home/Home';
import Order from './Order/Order';
import My from './My/My';

import { connect } from 'react-redux';

import { Route, withRouter } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/my" component={My} />
        <BottomBar />
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
  })
)(Main));