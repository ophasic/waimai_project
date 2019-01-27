import './Order.scss';

import React from 'react';

import { connect } from 'react-redux';

import { getOrderData } from '../../actions/orderActions';

import ListItem from './ListItem/ListItem';

import ScrollView from 'components/ScrollView/ScorllView';
/**
 * @constructor <Order />
 * @description 订单tab
 */
class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isend: false
        };

        this.page = 0;
        this.fetchData(this.page)
    }

    loadPage () {
        this.page++;
        if (this.page > 3) {
            this.setState({
                isend: true
            })
        } else {
            this.fetchData(this.page)
        }
    }

    fetchData(page) {
        this.props.dispatch(getOrderData(page))
    }

    renderList(){
        let list = this.props.list;

        return list.map((item, index) => {
            return <ListItem key={index} itemData={item} />
        })
    }

    render() {
        return (
            <div className="order">
                <div className="header">订单</div>
                <ScrollView loadCallback={this.loadPage.bind(this)} isend={this.state.isend}>
                    <div className="order-list">{this.renderList()}</div>
                </ScrollView>
            </div>
        )
    }

}

export default connect(
    state => ({
        list: state.orderReducer.list
    })
)(Order);