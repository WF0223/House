import React, { Component } from 'react'
import { SearchBar, Grid } from 'antd-mobile';
import '../../assets/styles/home.scss'


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data1: [
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '新房' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '二手房' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '租房' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '商铺二手房' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '卖房' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '海外房产' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '小区房价' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '问答' },
            ],
            data2: [
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '我要贷款' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '房贷计算' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '知识' },
                { url: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '扫一扫' },
            ]
        }
    }


    render() {
        let data1 = Array.from(this.state.data1).map((obj, i) => ({
            icon: obj.url,
            text: obj.text,
        }));
        let data2 = Array.from(this.state.data2).map((obj, i) => ({
            icon: obj.url,
            text: obj.text,
        }));
        return (
            <div className="home">
                <div className="title">
                    <div>成都市</div>
                    <SearchBar placeholder="挑好房，上菲菲房产APP" maxLength={8} />
                    <div>图标</div>
                </div>
                <Grid data={data1} hasLine={false} />
                <div>
                    <Grid data={data2} hasLine={false} />

                </div>
            </div >
        )
    }



}
