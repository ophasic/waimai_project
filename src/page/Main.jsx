import React, { Component } from 'react';
import BottomBar from './BottomBar/BottomBar'

import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
      <div>
         <BottomBar />
      </div>
    );
  }
}

export default connect(
  state => ({
  })
)(Main);