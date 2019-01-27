import './ListItem.scss'

import React from 'react';


/**
 * @constructor <ListItem />
 * @description 订单列表单个组件
 */
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * 渲染每个菜品的总计
     * @param {*} data 
     */
    renderTotalPrice(data, index) {
        return (
            <div className="product-item" key={index}>
                <span>...</span>
                <div className="p-total-count">
                    总计{data.product_count}个菜，实付
                    <span className="total-price">￥{data.total}</span>
                </div>
            </div>
        )
    }

    /**
     * 渲染具体菜品
     */
    renderProduct(data) {
        let list = data.product_list;

        // 复制数组防止引用
        let _list = JSON.parse(JSON.stringify(list));
        // push一个用来计算总计的{type：more}
        _list.push({type: 'more'});

        return _list.map((item, index) => {
            if (item.type === 'more') {
                return this.renderTotalPrice(data, index)
            } else {
                return (
                    <div className="product-item" key={index}>
                        {item.product_name}
                        <div className="p-count">x{item.product_count}</div>
                    </div>
                ) 
            }
        })
    }

    /**
     * 渲染评价按钮
     */
    renderComment(data) {
        let evaluation = data.is_comment;
        if (evaluation) {
            return (
                <div className="evaluation clearfix">
                    <div className="evaluation-btn">评价</div>
                </div>
            )
        }
    }

    render() {

        let data = this.props.itemData;

        return (
            <div className="order-item scale-1px">
                <div className="order-item-inner">
                    <img className="item-img" src={data.poi_pic} alt="" />
                    <div className="item-right">
                        <div className="item-top">
                            <p className="order-name one-line">{data.poi_name}</p>
                            <div className="arrow"></div>
                            <div className="order-status">xxx</div>
                        </div>
                        <div className="item-bottom">
                            {this.renderProduct(data)}
                        </div>
                    </div>
                </div>
                {this.renderComment(data)}
            </div>
        )
    }
}

export default ListItem;
