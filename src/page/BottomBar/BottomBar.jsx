import './BottomBar.scss';

import React, { Component } from 'react';

import { connect } from 'react-redux';

// import { changeTab } from '../../actions/tabAction';

import { NavLink, withRouter } from 'react-router-dom';

/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */
class BottomBar extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }


  changeTab = (item) => {
    // this.props.dispatch(changeTab({
    //     activeKey: item.key
    // }))
    this.props.history.replace(item.key)
  }

  renderItems(){
    let tabs = this.props.tabs;

    return tabs.map( (item, index) => {
        let cls = item.key + ' btn-item';
        let name = item.name;

        return (
            <div key={index} className={cls}>
                <NavLink replace={true} to={"/" + item.key} activeClassName="active" onClick={()=>this.changeTab(item)}>
                    <div className="tab-icon"></div>
                    <div className="btn-name">{name}</div>
                </NavLink>
            </div>
        )
    })
  }

  render() {
    return (
      <div className="bottom-bar">
        {this.renderItems()}
      </div>
    );
  }
}

export default withRouter(connect(
    state => ({
        tabs: state.tabReducre.tabs,
        activeKey: state.tabReducre.activeKey,
    })
)(BottomBar));
