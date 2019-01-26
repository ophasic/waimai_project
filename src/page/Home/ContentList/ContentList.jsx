import './ContentList.scss'

import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem/ListItem.jsx';
import Loading from '../../Components/Loading/Loading';
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
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;

        let proLoadDis = 30;

        if (scrollTop + clientHeight >= scrollHeight - proLoadDis) {
            this.page++;
            // 做多滚动3次
            if (this.page > 3){
                this.setState({
                    isend: true,
                    loadingText: '已完成'
                })
            } else {
                this.fetchData(this.page)
            }

        }
    }

    componentWillMount () {
        window.addEventListener('scroll', this.onLoadPage.bind(this))
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.onLoadPage.bind(this))
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
                {this.renderItems()}
                <Loading isend={this.state.isend} />
            </div>
        )
    }
}

export default connect(
    state => ({
        list: state.contentListReducer.list
    })
)(ContentList);
