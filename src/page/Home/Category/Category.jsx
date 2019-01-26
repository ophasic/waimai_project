import './Category.scss'

import React from 'react';

import { connect } from 'react-redux';

import { getHeaderData } from '../../../actions/categoryActions'
 
/**
 * @constructor <Category />
 * @description 外卖类别
 */
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fetchData();
    }

    fetchData() {
        this.props.dispatch(getHeaderData())
    }

    renderItems() {
        let items = this.props.items;

        items = items.splice(0, 8);

        return items.map((item, index) => {
            return (
                <div key={index} className="category-item">
                    <img className="item-icon" src={item.url} alt="" />
                    <p className="item-name">{item.name}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="category-container clearfix">
                 {this.renderItems()}
            </div>
        )
    }
}

export default connect(
    state => ({
        items: state.categoryReducers.items
    })
)(Category);
