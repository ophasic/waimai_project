import './ListItem.scss'

import React from 'react';

/**
 * @constructor <ListItem />
 * @description 列表单个组件
 */
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * 渲染是否是新到和品牌标签
     * @param {*} data 
     */
    renderBrand(data) {
        if(data.brand_type) {
            return <div className="brand brand-pin">品牌</div>
        } else {
            return <div className="brand brand-xin">新到</div>
        }
    }

    /**
     * 渲染5颗星得分方法
     * @param {*} data 
     */
    renderScore(data) {
        let wm_poi_score = data.wm_poi_score;

        let score = wm_poi_score.toString();

        let scoreArr = score.split('.');

        // 满星个数
        let fullstar = parseInt(scoreArr[0]);

        // 半星个数
        let halfstar = parseInt(scoreArr[1]) >= 5 ? 1 : 0;

        // 零星个数
        let nullstar = 5 - fullstar - halfstar;

        let starjsx = [];

        for (let i = 0; i < fullstar; i++) {
            starjsx.push(<div key={i + 'full'} className="star fullstar"></div>)
        }

        if (halfstar) {
            for (let i = 0; i < halfstar; i++) {
                starjsx.push(<div key={i + 'half'} className="star halfstar"></div>)
            }
        }

        if (nullstar) {
            for (let i = 0; i < nullstar; i++) {
                starjsx.push(<div key={i + 'null'} className="star nullstar"></div>)
            }
        }

        return starjsx;
    }

    /**
     * 渲染月售的数量
     * @param {*} data 
     */
    renderMonthNum(data) {
        let num = data.month_sale_num;

        if (num > 999) {
            return '999+'
        }

        return num;
    }

    /**
     * 是否需要美团专送tag
     * @param {*} data 
     */
    renderMeituanFlag(data) {
        if(data.delivery_type) {
            return <div className="item-meituan-flag">美团专送</div>
        }

        return null;
    }

    /**
     * 渲染商家活动
     * @param {*} data 
     */
    renderOthers(data) {
        let arr = data.discounts2;

        return arr.map((item, index) => {
            return (
                <div className="other-info" key={index}> 
                    <img src={item.icon_url}  className="other-tag" alt=""/>
                    <div className="other-content">{item.info}</div>
                </div>
            )
        })
    }

    render() {
        let data = this.props.itemData;
        return (
            <div className="item-container scale-1px">
                <img className="item-img" src={data.pic_url} alt="" />
                {this.renderBrand(data)}
                <div className="item-info-content">
                    <p className="item-title">{data.name}</p>
                    <div className="item-desc clearfix">
                        <div className="item-score">{this.renderScore(data)}</div>
                        <div className="item-count">月售{this.renderMonthNum(data)}</div>
                        <div className="item-distance">&nbsp;{data.distance}</div>
                        <div className="item-time">{data.mt_delivery_time}&nbsp;|</div>
                    </div>

                    <div className="item-price">
                        <div className="item-pre-price">{data.min_price_tip}</div>
                        {this.renderMeituanFlag(data)}
                    </div>

                    <div className="item-others">
                        {this.renderOthers(data)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem;
