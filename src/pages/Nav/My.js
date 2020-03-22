import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import '../../assets/styles/my.scss'
const Item = List.Item;
export default class My extends Component {
    state = {
        list: [
            { num: 1, url: require('../../assets/images/c1.png'), txt: '钱包' },
            { num: 2, url: require('../../assets/images/c2.png'), txt: '优惠' },
            { num: 3, url: require('../../assets/images/c3.png'), txt: '积分' },
        ],
        listMy: [
            { icon: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", txt: '我的积分' },
            { icon: "https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png", txt: '我的订阅' },
            { icon: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", txt: '微聊联系人' },
            { icon: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", txt: '房贷计算器' },
            { icon: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", txt: '我的房子' },
            { icon: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", txt: '我的看房记录' },
            { icon: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", txt: '我的问答' },
            { icon: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", txt: '设置' },
            { txt: '意见反馈' },
        ]
    }
    render() {

        return (
            <div className="my">
                <div className="title">
                    <div className="top">
                        <img src={require('../../assets/images/head.jpg')} alt=""></img>
                        <div>
                            <p><Link to="/login">登录</Link>/<Link to="/reg">注册</Link></p>
                            <p>可以与经纪人发起聊天</p>
                        </div>
                        <img src={require('../../assets/images/set.png')} className="img" alt=""></img>
                    </div>
                    <div className="title_list">
                        {this.state.list.map(res =>
                            <div key={res.num} className="list">
                                <p>{res.num}</p>
                                <div>
                                    <img src={res.url} alt=""></img>
                                    <span>{res.txt}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <List>
                    {this.state.listMy.map(res =>
                        <Item
                            thumb={res.url}
                            arrow="horizontal"
                            onClick={() => { }}
                    >{res.txt}</Item>
                    )}
                </List>
            </div>
        )
    }
}
