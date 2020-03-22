import React, { Component } from 'react'
import { SearchBar, Grid } from 'antd-mobile';
import '../../assets/styles/home.scss'
import { Like } from '../../api/axios'


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data1: [
                { url: require('../../assets/images/h1.png'), text: '新房' },
                { url: require('../../assets/images/h2.png'), text: '二手房' },
                { url: require('../../assets/images/h3.png'), text: '租房' },
                { url: require('../../assets/images/h4.png'), text: '商铺二手房' },
                { url: require('../../assets/images/h5.png'), text: '卖房' },
                { url: require('../../assets/images/h6.png'), text: '海外房产' },
                { url: require('../../assets/images/h7.png'), text: '小区房价' },
                { url: require('../../assets/images/h8.png'), text: '问答' },
            ],
            data2: [
                { url: require('../../assets/images/q1.png'), text: '我要贷款' },
                { url: require('../../assets/images/q2.png'), text: '房贷计算' },
                { url: require('../../assets/images/q3.png'), text: '知识' },
                { url: require('../../assets/images/q4.png'), text: '扫一扫' },
            ],
            like: [],
            myCity: '定位中'
        }

    }

    render() {
        let data1 = Array.from(this.state.data1).map((obj) => ({
            icon: obj.url,
            text: obj.text,
        }));
        let data2 = Array.from(this.state.data2).map((obj) => ({
            icon: obj.url,
            text: obj.text,
        }));
        return (
            <div className="home">
                <div className="title">
                    <div onClick={this.Mapgul.bind(this, 'cityList')}>{this.state.myCity}▼</div>
                    <SearchBar placeholder="挑好房，上房产APP" maxLength={8} />
                    <div onClick={this.Mapgul.bind(this, 'map')}>图标</div>
                </div>

                <Grid data={data1} hasLine={false} />
                <div>
                    <Grid data={data2} hasLine={false} />
                </div>

                <div className="like">
                    <h4>猜你喜欢</h4>
                    {this.state.like.map(res =>
                        <div key={res.id} className="like_one">
                            <div className="like_list">
                                <img src={require('../../assets/images/' + res.id + '.jpg')} alt=""></img>
                                <div>
                                    <h3>{res.name}</h3>
                                    <p><span>{res.area}</span><span>{res.range}</span></p>
                                    <p><span>{res.type}</span><span>{res.point}平</span></p>
                                </div>
                            </div>
                            <h3>{res.price}/平</h3>
                        </div>
                    )}
                </div>
                {/* 准备一个地图div容器 */}
                <div id="myMap" style={{ width: '100%', height: '400px' }}></div>
            </div >
        )
    }
    componentDidMount() {
        Like().then(res => {
            // console.log(res)
            this.setState({
                like: res.data
            })
        })
        // console.log(this.state.like)
        this.showCityInfo();


    }
    Mapgul(url) {
        window.location.href = '/#/' + url
    }

    //获取用户所在城市信息
    showCityInfo() {
        var map = new window.AMap.Map("myMap", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        var _this = this
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    // console.log('您当前所在城市：' + cityinfo)
                    _this.setState({
                        myCity: cityinfo
                    })
                    // //地图显示当前城市
                    map.setBounds(citybounds);

                }
            } else {
                console.log('错误信息' + result.info);
            }
        });

    }
}
