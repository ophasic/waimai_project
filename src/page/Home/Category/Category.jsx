import './Category.scss'

import React from 'react';

import axios from 'axios';

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
        axios({
            method: 'get',
            url: '/json/head.json'
        }).then((res) => {
            console.log(res)
            this.props.dispatch(getHeaderData(res.data))
        });
    }

    renderItems() {
        let items = this.props.items;

        return items.map((item, index) => {
            return (
                <div key={index}>{item.name}</div>
            )
        })
    }

    render() {
        return (
            <div className="category-container">
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
