import React, { Component } from 'react';
import { HashRouter , Switch , Route } from 'react-router-dom';
import Login from './pages/Nav/Login';
import Reg from './pages/Nav/Reg';
import Nav from './pages/Nav';
import Error404 from './pages/Nav/Error404'
import Maap from './pages/Nav/Map'
import CityList from './pages/Nav/CityList'


export default class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Nav}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/reg" component={Reg}></Route>
                        <Route path="/map" component={Maap}></Route>
                        <Route path="/citylist" component={CityList}></Route>
                        <Route component={Error404}></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
