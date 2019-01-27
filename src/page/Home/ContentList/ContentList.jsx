import './ContentList.scss'

import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem/ListItem.jsx';
import ScrollView from 'components/ScrollView/ScorllView';
import { getListData } from '../../../actions/contentListAction'
 
/**
 * @constructor <ContentList />
 * @description 附近商家列表
 */
class ContentList extends React.Component {
    constructor(props) {
        super(props);

        // 初始page
        this.page = 0;

        // 请求第一页数据
        this.fetchData(this.page);

        this.state = {
            isend: false,
            loadingText: "加载中"
        };
    }

    onLoadPage () {
        this.page++;
        // 做多滚动3次
        if (this.page > 3){
            this.setState({
                isend: true
            })
        } else {
            this.fetchData(this.page)
        }
    }

    fetchData(page) {
        this.props.dispatch(getListData(page))
    }

    renderItems() {
        let list = this.props.list;
        return list.map((item, index) => {
            return (
                <ListItem itemData={item} key={index} />
            )
        })
    }

    render() {
        return (
            <div className="list-container">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                    {this.renderItems()}
                </ScrollView>
            </div>
        )
    }
}

export default connect(
    state => ({
        list: state.contentListReducer.list
    })
)(ContentList);
