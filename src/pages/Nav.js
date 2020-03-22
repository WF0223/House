import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Home from '../pages/Nav/Home'
import Recommend from '../pages/Nav/Recommend'
import History from '../pages/Nav/History'
import My from '../pages/Nav/My'


export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            hidden: false,
            tabbar: [
                { title: '首页', key: 'Home', icon: 'home1', selectedIcon: 'home2',component:<Home></Home> },
                { title: '足迹', key: 'History', icon: 'foot1', selectedIcon: 'foot2',component:<History></History> },
                { title: '推荐', key: 'Reccommend', icon: 'rec1', selectedIcon: 'rec2',component:<Recommend></Recommend> },
                { title: '我的', key: 'My', icon: 'my1', selectedIcon: 'my2',component:<My></My> },
            ]
        };
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" tabBarPosition="bottom" hidden={this.state.hidden} prerenderingSiblingsNumber={0}>
                    {/*  {
                        this.state.tabbar.map(res=>{
                            
                        })
                    } */}
                    {
                        this.state.tabbar.map(obj =>
                            <TabBar.Item
                                title={obj.title}
                                key={obj.key}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../assets/images/'+obj.icon+'.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../assets/images/'+obj.selectedIcon+'.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === obj.key}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: obj.key,
                                    });
                                }}
                                data-seed="logId"
                            >
                                {obj.component}
                            </TabBar.Item>)
                    }
                    {/*  <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../assets/images/foot1.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../assets/images/foot2.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="足迹"
                        key="History"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <History></History>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../assets/images/rec1.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../assets/images/rec2.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="推荐"
                        key="Reccommend"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        <Recommend></Recommend>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        <My></My>
                    </TabBar.Item>
                 */}</TabBar>
            </div>
        );
    }


}
