import React, { Component } from 'react'
import '../../assets/styles/login.scss'
import { Button, Flex, WhiteSpace, InputItem, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';
import axios from 'axios';
var qs = require('qs');


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {user:'',pwd:''}
        this.userChange = this.userChange.bind(this)
        this.pwdChange = this.pwdChange.bind(this)
        this.submit = this.submit.bind(this)
        
    }
    userChange(e) {
        this.setState({user: e.toUpperCase()});
    }
    pwdChange(e){
        this.setState({pwd: e.toUpperCase()});
    }
    render() {
        return (
            <div className="login">
                <WhiteSpace size="xl" />
                <Flex justify="center" className="logo">
                    <img src={require('../../assets/images/logo.jpg')} alt="您的网络不好"></img>
                </Flex>

                <WhiteSpace size="xl" />
                {/* 输入框 */}
                <WingBlank size="lg">
                    <InputItem value={this.state.user} onChange={this.userChange} placeholder="请输入您的账号名" clear>
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem value={this.state.pwd}  onChange={this.pwdChange} placeholder="请输入您的账号密码" clear>
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="xl" />
                    <Button type="primary" onClick={this.submit}>登录</Button>
                    <WhiteSpace size="sm" />
                    <Flex justify="between">
                        <Link to="/reg">手机快速注册</Link>
                        <Link to="/reg">忘记密码？</Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    submit(e) {
        var data = {
            acc:this.state.user,
            pwd:this.state.pwd
        }
        console.log(qs.stringify(data))
        axios.post("http://localhost:80/login.php",qs.stringify(data)).then(res=>{
            console.log(res)
            if(res.data==='ok'){
                alert('登录成功')
            }
        })
        e.preventDefault();
    }
    


}
