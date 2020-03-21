import React, { Component } from 'react';
import { Button, InputItem, Toast, WhiteSpace, WingBlank, Radio } from 'antd-mobile';
import { Link } from 'react-router-dom';
import axios from 'axios';
var qs = require('qs');

export default class Reg extends Component {
    state = {
        hasError: false,
        hasPwdError: false,
        hasCheckError: false,
        tel: '',
        pwd: '',
        check: '',
        extra: '点击获取验证码'
    }
    // 表单验证
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('请输入11位的数字');
        }
        console.log(this.state.hasError)
    }
    onPwdErrorClick = () => {
        if (this.state.hasPwdError) {
            Toast.info('以字母开头，长度在6~18之间，只能包含字母、数字和下划线');
        }
    }
    onCheckErrorClick = () => {
        if (this.state.hasCheckError) {
            Toast.info('请输入正确的验证码');
        }
    }
    onUserChange = (tel) => {
        if (tel.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            tel,
        });
    }
    onPwdChange = (pwd) => {
        if (pwd.replace(/^[a-zA-Z]\w{5,17}$/, '')) {
            this.setState({
                hasPwdError: true,
            });
        } else {
            this.setState({
                hasPwdError: false,
            });
        }
        this.setState({
            pwd,
        });
    }
    onCheckChange = (check) => {
        if (this.state.check === this.state.extra) {
            this.setState({
                hasCheckError: true
            })
        } else {
            this.setState({
                hasCheckError: false
            })
        }
        this.setState({
            check,
        });
    }
    change() {
        //字符串
        var arr = '0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
        //字符串分割成数组
        var str = arr.split('', 62);
        var inner = '';
        //循环添加标签   并利用随机方法随机取到数组里面的值
        for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * str.length);
            inner += str[index];
        }
        this.setState({
            extra: inner
        });
        console.log(inner);
    }
    render() {
        return (
            <div>
                <WingBlank>
                    <WhiteSpace size="xl" />
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号码"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onUserChange}
                        value={this.state.tel}
                        clear
                    ></InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        error={this.state.hasPwdError}
                        onErrorClick={this.onPwdErrorClick}
                        onChange={this.onPwdChange}
                        value={this.state.pwd}
                        clear
                    ></InputItem>
                    <InputItem
                        type="text"
                        placeholder="请输入验证码"
                        onChange={this.onCheckChange}
                        value={this.state.check}
                        className="check_input"
                        error={this.state.hasCheckError}
                        extra={this.state.extra}
                        onExtraClick={this.change.bind(this)}
                        onErrorClick={this.onCheckErrorClick}
                        clear
                    ></InputItem>
                    <WhiteSpace size="xl" />
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>我已同意《用户服务协议》</Radio>
                    <WhiteSpace size="xl" />
                    <Button type="primary" onClick={this.RegSubmit.bind(this)}>注册</Button>
                    <WhiteSpace size="sm" />
                    <Link to="/login">已有账号</Link>
                </WingBlank>
            </div>
        );
    }
    RegSubmit(e) {
        var data = {
            acc: this.state.tel,
            pwd: this.state.pwd
        }
        console.log(this.state.hasError,this.state.hasPwdError)
        if (this.state.hasError === false && this.state.hasPwdError === false &&this.state.hasCheckError===false) {
            axios.post('http://localhost:80/reg.php', qs.stringify(data)).then(res => {
                console.log(res)
                alert('注册成功')
                this.props.history.push('/login', '')
            });
        } else {
            alert('请检查您的账户，密码，验证码是否正确')
        }

        e.preventDefault();
    }
}
