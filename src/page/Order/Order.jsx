import './Order.scss';

import React from 'react';

import { connect } from 'react-redux';

import { getOrderData } from '../../actions/orderActions';

/**
 * @constructor <Order />
 * @description 订单tab
 */
class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.page = 0;
        this.fetchData(this.page)
    }

    fetchData(page) {
        this.props.dispatch(getOrderData(page))
    }

    renderList(){
        let list = this.props.list;

        return list.map((item, index) => {
            return <div key={index}>{item.poi_name}</div>
        })
    }

    render() {
        return (
            <div className="order">
                <div className="header">订单</div>
                <div className="order-list">{this.renderList()}</div>
            </div>
        )
    }

}

export default connect(
    state => ({
        list: state.orderReducer.list
    })
)(Order);